// sidebar
const menuItems = document.querySelectorAll('.menu-item');
// messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.messages');
const messageSearch = document.querySelectorAll('#message-search');

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
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// ---------------------------messages-----------------------------


// search chart

const searchMessage = () =>{
    const val = messageSearch.values.toLowerCase();
    console.log(val);
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
    })
}

messageSearch.addEventListener('keyup',searchMessage);

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    },2000);
})