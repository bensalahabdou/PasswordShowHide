const input = document.getElementById("input"),
      btn = document.getElementById("btn");



btn.onclick = function () {
 if (input.classList.contains('hidden')){
     btn.textContent = 'hide'
     input.firstElementChild.setAttribute('type', 'text')
     input.classList.toggle('hidden')

 }else {
    btn.textContent = 'show'
    input.firstElementChild.setAttribute('type', 'password')
    input.classList.toggle('hidden')
 }
}      

