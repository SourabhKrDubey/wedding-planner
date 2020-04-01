const primaryBlue = '#007bff';

const placeSizeSelector = (e, id) => {
    setLocalStorage('placeSelectorId', id);
    const placeSelector = e.target.closest('.place-selector');
    placeSelector.querySelectorAll('.place-selector-viewer').forEach(e => {
        e.style.background = 'none';
    });
    e.target.parentElement.style.background = primaryBlue;
    placeSelector.querySelector('.next').disabled = false;
};

const guestSelector = (e, id) => {
    setLocalStorage('guest', id);
    const guestSelector = e.target.closest('.guest-selector');
    guestSelector.querySelectorAll('.guest-viewer').forEach(e => {
        e.style.background = 'none';
    });
    e.target.parentElement.style.background = primaryBlue;
    guestSelector.querySelector('.next').disabled = false;
};

const foodSelector = (e, id) => {
    setLocalStorage('food', id);
    const foodSelector = e.target.closest('.food-selector');
    foodSelector.querySelectorAll('.food-viewer').forEach(e => {
        e.style.background = 'none';
    });
    e.target.parentElement.style.background = primaryBlue;
    foodSelector.querySelector('.custom-food').parentElement.parentElement.classList.add('d-none');
    foodSelector.querySelector('.next').disabled = true;
    if (id < 8) {
        foodSelector.querySelector('.next').disabled = false;
    } else {
        foodSelector.querySelector('.custom-food').value = '';
        foodSelector.querySelector('.custom-food').parentElement.parentElement.classList.toggle('d-none');
    }
}

const customFoodSelector = (e) => {
    setLocalStorage('customFood', e.target.value);
    const foodSelector = e.target.closest('.food-selector');
    foodSelector.querySelector('.next').disabled = !e.target.value;
}

const roomSelector = (e, id) => {
    setLocalStorage('room', id);
    const roomSelector = e.target.closest('.room-selector');
    roomSelector.querySelectorAll('.room-viewer').forEach(e => {
        e.style.background = 'none';
    });
    e.target.parentElement.style.background = primaryBlue;
    roomSelector.querySelector('.custom-room').parentElement.parentElement.classList.add('d-none');
    roomSelector.querySelector('.last').disabled = true;
    if (id < 8) {
        roomSelector.querySelector('.last').disabled = false;
    } else {
        roomSelector.querySelector('.custom-room').value = '';
        roomSelector.querySelector('.custom-room').parentElement.parentElement.classList.toggle('d-none');
    }
}

const customRoomSelector = (e) => {
    setLocalStorage('customRoom', e.target.value);
    const roomSelector = e.target.closest('.room-selector');
    roomSelector.querySelector('.last').disabled = !e.target.value;
}

const locationSelector = (e, id) => {
    setLocalStorage('location', id);
    const locationSelector = e.target.closest('.location-selector');
    locationSelector.querySelectorAll('.location-viewer').forEach(e => {
        e.style.background = 'none';
    });
    e.target.parentElement.style.background = primaryBlue;
    locationSelector.querySelector('.custom-location').parentElement.parentElement.classList.add('d-none');
    locationSelector.querySelector('.next').disabled = true;
    if (id < 8) {
        locationSelector.querySelector('.next').disabled = false;
    } else {
        locationSelector.querySelector('.custom-location').value = '';
        locationSelector.querySelector('.custom-location').parentElement.parentElement.classList.toggle('d-none');
    }
}

const customLocationSelector = (e) => {
    setLocalStorage('customLocation', e.target.value);
    const locationSelector = e.target.closest('.location-selector');
    locationSelector.querySelector('.next').disabled = !e.target.value;
}

const weddingTypeSelector = (e, id) => {
    setLocalStorage('weddingType', id);
    const weddingTypeSelector = e.target.closest('.weddingType-selector');
    weddingTypeSelector.querySelectorAll('.weddingType-viewer').forEach(e => {
        e.style.background = 'none';
    });
    e.target.parentElement.style.background = primaryBlue;
    weddingTypeSelector.querySelector('.custom-wedding-type').parentElement.parentElement.classList.add('d-none');
    weddingTypeSelector.querySelector('.next').disabled = true;
    if (id < 8) {
        weddingTypeSelector.querySelector('.next').disabled = false;
    } else {
        weddingTypeSelector.querySelector('.custom-wedding-type').value = '';
        weddingTypeSelector.querySelector('.custom-wedding-type').parentElement.parentElement.classList.toggle('d-none');
    }
}

const customWeddingTypeSelector = (e) => {
    setLocalStorage('customWeddingType', e.target.value);
    const weddingTypeSelector = e.target.closest('.weddingType-selector');
    weddingTypeSelector.querySelector('.next').disabled = !e.target.value;
}

const setLocalStorage = (selector, value) => {
    let wp = localStorage.getItem('wp');
    if (wp) {
        wp = JSON.parse(wp);
        wp[selector] = value;
        localStorage.setItem('wp', JSON.stringify({ ...wp }));
    } else {
        localStorage.setItem('wp', JSON.stringify({ [selector]: value }));
    }
}

const next = (e) => {
    e.target.parentElement.classList.toggle('d-none');
    e.target.parentElement.nextElementSibling.classList.toggle('d-none');
}

const previous = (e) => {
    e.target.parentElement.classList.toggle('d-none');
    e.target.parentElement.previousElementSibling.classList.toggle('d-none');
}

const last = (e) => {
    e.target.parentElement.classList.toggle('d-none');
    e.target.parentElement.nextElementSibling.classList.toggle('d-none');
    filter();
}

(function () {
    localStorage.removeItem('wp');
    localStorage.removeItem('wp-filter');
})();

const filter = () => {
    const wp = JSON.parse(localStorage.getItem('wp'));
    let high = 0;
    let medium = 0;
    let low = 0;
    for (let [key, value] of Object.entries(wp)) {
        if (value > 0 && value < 4) {
            high += 1.5;
        } else if (value > 3 && value < 7) {
            medium += 1;
        } else {
            low += .5;
        }
    }
    const final = Math.round(Math.max(high, medium, low));
    let html = '';
    for (let i = final; i < final + 5; i++) {
        html += `<col class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="/assets/img/${i}.jfif" alt="" width="300" height="150"/>
                        </div>
                    </div>
                 </col>`;
    }
    document.getElementsByClassName('filter')[0].innerHTML = html;
}
