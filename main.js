document.getElementById('burger-main').onclick = function() {
    document.getElementById('burger-main').classList.add('setOpacity');
    document.getElementById('burger-active').classList.add('active');
}

document.getElementById('burger-close').onclick = function() {
    document.getElementById('burger-active').classList.remove('active');
    document.getElementById('burger-main').classList.remove('setOpacity');
}

document.getElementById('search-icon').onclick = function() {
    document.getElementById('input-search').classList.add('flex');
    document.getElementById('search-icon').classList.add('setOpacity');
}