import './bodyconoceme.css';
import foto2 from './lau.jpeg';
import flores from './flores.3ee26ec2.svg';
import floresotras from './floresotras.png';
import pic from './woman.png';
import habilidad from './lapiz.png';


function Bodyconoceme() {
  return (
    <main className="container3 gradient-border">
            <div className="sobremi">
                <div id="box">
                    <div className='texto2'>
                        <h1> Conóceme <img src={pic} alt="Icon Mujer"></img></h1>
                        
                        <p>Hola, soy Laura Vargas, tengo 29 años, economista de profesión y trabajo como proofreader. En 2021 accedí a una beca financiada por la Citi Foundation y ejecutada por Kuepa para mujeres que quisieran entrar en el campo de la programación.
                          Fue un bootcamp enfocado en desarrollo Front-End intensivo, pero de mucho aprendizaje. Quiero seguir especializandome en el tema de diseño y experiencia de usuario.</p>
                    <br />
                    <br />
                    
                        <div className="habilidades">
                            <h1>Habilidades</h1>
                            <div className="hab"> Figma  <progress max="100" value="70"></progress></div>
                            <div className="hab"> Git/GitHub <progress max="100" value="70"></progress></div>
                            <div className="hab"> HTML y CSS  <progress max="100" value="80"></progress></div>
                            <div className="hab"> JavaScript  <progress max="100" value="60"></progress></div>
                            <div className="hab"> React <progress max="100" value="60"></progress></div>
                            <div className="hab"> Bootstrap <progress max="100" value="70"></progress></div>
                        </div>
                    </div>  
                </div>
            <div className="img_mia">
                <img src={foto2} alt="Foto de mujer" />
                <div className="flores">
                            <img src={floresotras} alt="Foto de mujer" width="300px" />
                </div>
            </div> 
            

        </div>           
    </main>

  );
}

export default Bodyconoceme;