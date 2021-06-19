import './bodycontacto.css';



function Bodycontacto() {
  return (
    <main className="container3 gradient-border">
    <div className="animacion">
            <div class="wrapper">
                <div class="typing-demo">
                    ¡Escríbeme!
                    Quiero ayudarte.
                </div>
            </div>
     </div>
     <div className="formulario">
     <div class="redes-form">
         <a class="icono-social-contacto email noSelect" href="mailto: juandagarciadev@gmail.com" rel="noopener noreferrer"></a>
         <a class="icono-social-contacto whatsapp noSelect" href="https://api.whatsapp.com/send?phone=573184291360&amp;text=Hola%20Juan" target="_blank" ></a>
         <a class="icono-social-contacto instagram noSelect" href="https://www.instagram.com/juandagarciaa/" target="_blank" ></a>
         <a class="icono-social-contacto linkedin noSelect" href="https://www.linkedin.com/in/juandagarciaa/" target="_blank"></a>
         <a class="icono-social-contacto github noSelect" href="https://www.github.com/juandagarcia/" target="_blank"></a>
         <a class="icono-social-contacto youtube noSelect" href="https://www.github.com/juandagarcia/" target="_blank"></a>
     </div>
     <div>
       <form className="form">
         <input placeholder="Nombre" required="" class="input-textarea" name="name" type="text" maxlength="40" value=""/><br/>

         <input required="" placeholder="Email" class="input-textarea" name="email" type="email" maxlength="50" value=""/><br/>
         <textarea placeholder="Mensaje" required="" class="input-textarea" name="mensaje" id="" rows="5"></textarea>
         <div>
         <button class="btn">Enviar</button>
         </div>
        </form>
    </div>
    </div>              
</main>

  );
}

export default Bodycontacto;