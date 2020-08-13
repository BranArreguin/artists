var openwindow = document.getElementById('open-window');
var show = document.getElementById('info-window');

openwindow.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})