// sidebar
const menuItems = document.querySelectorAll('.menu-item');

// remove active class for all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications' ){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector()
        }
    })
})
