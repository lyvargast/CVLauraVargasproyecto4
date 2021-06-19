import './body.css';
import foto from './yo.jpeg';

function Body() {
  return (
    <div className="containers">
        <div className="texto">
          <span>Hola, soy</span>
          <h2>Laura Vargas Torres </h2>
          <p>Hola, soy Laura Vargas, tengo 29 años, economista de profesión y trabajo como proofreader. En 2021 accedí a una beca financiada por la Citi Foundation y ejecutada por Kuepa para mujeres que quisieran entrar en el campo de la programación.
          Fue un bootcamp enfocado en desarrollo Front-End intensivo, pero de mucho aprendizaje. Quiero seguir especializandome en el tema de diseño y experiencia de usuario.</p>
          
        </div>
        <hr/>
        <div className="foto">
          <img src={foto} alt="Foto" />
        </div>
    </div>
  );
}

export default Body;