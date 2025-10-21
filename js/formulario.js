document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('contact-form');
  if(!form)return;
  const msg=document.getElementById('contact-msg');

  form.addEventListener('submit',e=>{
    e.preventDefault();
    const nombre=form.nombre.value.trim();
    const email=form.email.value.trim();
    const mensaje=form.mensaje.value.trim();
    const re=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if(!nombre||!email||!mensaje){msg.textContent='Completa todos los campos.';return;}
    if(!re.test(email)){msg.textContent='Correo inválido.';return;}

    msg.textContent='Enviando...';
    setTimeout(()=>{msg.textContent='Gracias, tu mensaje ha sido enviado.';form.reset();},800);
  });
});
