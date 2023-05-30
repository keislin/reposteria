let nameUser=document.getElementById("name")
let emailUser=document.getElementById("email")
let phoneUser=document.getElementById("phone")
let buttonFormulary=document.getElementById("buttonForm")

//listen to click on botton

buttonFormulary.addEventListener("click", function(evento){
   evento.preventDefault()
   let names=nameUser.value
   let emails=emailUser.value
   let phones=phoneUser.value

   let errores=[]

   if(!names){
    errores.push("error en el nombre")
    nameUser.classList.add("is-invalid")
   }
   if(!emails){
    errores.push("error en el correo")
    emailUser.classList.add("is-invalid")
   }
   if(!phones){
    errores.push("error en el telefono")
    phoneUser.classList.add("is-invalid")
   }

   console.log(errores)

   if (errores.length>0){
    Swal.fire({
        icon: 'error',
        text: 'debes de llenar todos los campos requeridos!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
   }else{
    Swal.fire(
        'envío exitoso!',
        'nos estaremos contactando contigo',
        'success'
      )

   }
   
  
})