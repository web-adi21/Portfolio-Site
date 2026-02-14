
const logo = document.querySelector('.logo img');


logo.addEventListener('click', () => {
   
    document.body.classList.toggle('dark-theme');
    
   
    const isDarkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});


window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
};