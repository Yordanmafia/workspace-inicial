const user = document.getElementById('usuario')
const pass = document.getElementById('contra')
const buton = document.querySelector('#envi')
document.addEventListener("DOMContentLoaded", ()=>{
  const enviar = ()=>{
   localStorage.setItem('usuario1', user.value)
   localStorage.setItem('password1', pass.value)
   window.location.href = 'index.html'
}


})
