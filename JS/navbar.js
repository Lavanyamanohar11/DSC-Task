function showMenu(){
    document.getElementById('ham-menus').classList.add('display-block');
    document.querySelector('.ham-icon').classList.toggle('display-none')
    document.querySelector('.close-icon').classList.toggle('display-none');
    document.querySelector('.close-icon').classList.toggle('display-block');

    document.getElementById('top-content').classList.add('overlay')

}

function closeMenu(){
    document.getElementById('ham-menus').classList.toggle('display-block');
    document.querySelector('.ham-icon').classList.toggle('display-none')
    document.querySelector('.close-icon').classList.toggle('display-none');
    document.querySelector('.close-icon').classList.toggle('display-block');
    
    document.getElementById('top-content').classList.remove('overlay')

}