function darkMode(){
    const content = document.querySelector('.content')
    const btnMode = document.querySelector('#btn-mode')
    
    btnMode.classList.toggle('dark-mode')
    content.classList.toggle("dark-mode")

}