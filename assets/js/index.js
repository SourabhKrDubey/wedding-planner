const placeSizeSelector = (id) => {
    setLocalStorage('placeSelectorId', id);
    const placeSelector = document.getElementById('place-selector');
    placeSelector.querySelectorAll('.place-selector-viewer').forEach(e => {
        e.style.background = 'none';
    });
    placeSelector.querySelector(`#pc${id}`).style.background = '#007bff';
    placeSelector.querySelector('.next').disabled = false;
};

const guestSelector = (id) => {
    setLocalStorage('guest', id);
    const guestSelector = document.getElementById('guest-selector');
    guestSelector.querySelectorAll('.guest-viewer').forEach(e => {
        e.style.background = 'none';
    });
    guestSelector.querySelector(`#guest${id}`).style.background = '#007bff';
    guestSelector.querySelector('.next').disabled = false;
};

const foodSelector = (id) => {
    setLocalStorage('food', id);
    const foodSelector = document.getElementById('food-selector');
    foodSelector.querySelectorAll('.food-viewer').forEach(e => {
        e.style.background = 'none';
    });
    foodSelector.querySelector(`#food${id}`).style.background = '#007bff';
    foodSelector.querySelector('#custom-food').parentElement.parentElement.classList.add('d-none');
    foodSelector.querySelector('.next').disabled = true;
    if (id < 8) {
        foodSelector.querySelector('.next').disabled = false;
    } else {
        foodSelector.querySelector('#custom-food').value = '';
        foodSelector.querySelector('#custom-food').parentElement.parentElement.classList.toggle('d-none');
    }
}

const customFoodSelector = (e) => {
    setLocalStorage('customFood', e.target.value);
    const foodSelector = document.getElementById('food-selector');
    foodSelector.querySelector('.next').disabled = !e.target.value;
}

const roomSelector = (id) => {
    setLocalStorage('room', id);
    const roomSelector = document.getElementById('room-selector');
    roomSelector.querySelectorAll('.room-viewer').forEach(e => {
        e.style.background = 'none';
    });
    roomSelector.querySelector(`#room${id}`).style.background = '#007bff';
    roomSelector.querySelector('#custom-room').parentElement.parentElement.classList.add('d-none');
    roomSelector.querySelector('.last').disabled = true;
    if (id < 8) {
        roomSelector.querySelector('.last').disabled = false;
    } else {
        roomSelector.querySelector('#custom-room').value = '';
        roomSelector.querySelector('#custom-room').parentElement.parentElement.classList.toggle('d-none');
    }
}

const customRoomSelector = (e) => {
    setLocalStorage('customRoom', e.target.value);
    const roomSelector = document.getElementById('room-selector');
    roomSelector.querySelector('.last').disabled = !e.target.value;
}

const locationSelector = (id) => {
    setLocalStorage('location', id);
    const locationSelector = document.getElementById('location-selector');
    locationSelector.querySelectorAll('.location-viewer').forEach(e => {
        e.style.background = 'none';
    });
    locationSelector.querySelector(`#location${id}`).style.background = '#007bff';
    locationSelector.querySelector('#custom-location').parentElement.parentElement.classList.add('d-none');
    locationSelector.querySelector('.next').disabled = true;
    if (id < 8) {
        locationSelector.querySelector('.next').disabled = false;
    } else {
        locationSelector.querySelector('#custom-location').value = '';
        locationSelector.querySelector('#custom-location').parentElement.parentElement.classList.toggle('d-none');
    }
}

const customLocationSelector = (e) => {
    setLocalStorage('customLocation', e.target.value);
    const locationSelector = document.getElementById('location-selector');
    locationSelector.querySelector('.next').disabled = !e.target.value;
}

const weddingTypeSelector = (id) => {
    setLocalStorage('weddingType', id);
    const weddingTypeSelector = document.getElementById('weddingType-selector');
    weddingTypeSelector.querySelectorAll('.weddingType-viewer').forEach(e => {
        e.style.background = 'none';
    });
    weddingTypeSelector.querySelector(`#weddingType${id}`).style.background = '#007bff';
    weddingTypeSelector.querySelector('#custom-wedding-type').parentElement.parentElement.classList.add('d-none');
    weddingTypeSelector.querySelector('.next').disabled = true;
    if (id < 8) {
        weddingTypeSelector.querySelector('.next').disabled = false;
    } else {
        weddingTypeSelector.querySelector('#custom-wedding-type').value = '';
        weddingTypeSelector.querySelector('#custom-wedding-type').parentElement.parentElement.classList.toggle('d-none');
    }
}

const customWeddingTypeSelector = (e) => {
    setLocalStorage('customWeddingType', e.target.value);
    const weddingTypeSelector = document.getElementById('weddingType-selector');
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
}