import './bodycv.css';
import developer from './developer.png';
import economista from './economist.png';
import teologia from './theology.png';
import educacion from './educacion.png';
import espanol from './espanol.png';
import ingles from './english.png';
import aleman from './aleman.png';
function Bodyconoceme() {
  return (
   <div className="container">
    <div className="contacto" >
    <h1>LAURA YANETH VARGAS TORRES</h1>
	    <p className="ocupacion">Software developer</p>
	    <hr />
	    <div className="datospersonales">
		    <div className="info1"><i class="fas fa-phone-alt"></i>+57 3227667277 </div>
		    <div className="info2">< i class="fas fa-envelope"></i>laurayvargastorres@gmail.com</div>
		 </div>

    	<div className="acercademi">
	      <h2>ACERCA DE MÍ</h2>
	      <p>Estudié economía y teología, ahora con el bootcamp de desarrollo Front-End espero poder generar una sinergía
	      entre las distintas disciplinas en las que me he desenvuelto. Considero que las habilidades de programación ya 
	      son una necesidad interdisciplinaria y que puedo aportar en esos campos con lo que estoy estudiando.</p>
     	</div>
     	<div className="experiencialaboral">
     	<h2>EXPERIENCIA LABORAL</h2></div>
     	<div className="contactos">
     	      <div className="cajacontactosleft">
		      	<h3>PeachTree publishing Services</h3>
		      	<hr/>
		      	<h5>2021-actualmente</h5>
		      	<p>Proofreader para proyectos de Biblias en español e inglés</p>
		      </div>
		      <div className="cajacontactoscenter">
		      	<h3>Fiduciaria Bogotá</h3>
		      	<hr/>
		      	<h5>2017-2018</h5>
		      	<p>Analista operativo de negocios</p>
		      </div>
		      <div className="cajacontactosright">
		      	<h3>IDRD</h3>
		      	<hr/>
		      	<h5>2012-2013</h5>
		      	<p>Guardián de Ciclovía</p>

		      </div>
		
			</div>
			<div className="educacion">
     		<h2>EDUCACIÓN</h2>
     	</div>
			<div className="contactos2">
     	    <div className="cajareferenciasleft">
		      	<h3>Junior Front developer</h3>
		      	<img src={developer} alt="Foto developer" />
		      	<hr/>
		      	<h5>2021-actualmente</h5>
		      	<p>Kuepa-becaria</p>
		      </div>
		      <div className="cajareferenciascenter">
		      	<h3>Estudios teológicos avanzados</h3>
		      	<img src={teologia} alt="Foto teología" />
		      	<hr/>
		      	<h5>2018-2020</h5>
		      	<p>Seminario Bautista de Colombia-becaria</p>
		      </div>
		      <div className="cajareferenciasright">
		      	<h3>Economista</h3>
		      	<img src={economista} alt="Foto economista" />
		      	<hr/>
		      	<h5>2017</h5>
		      	<p>Universidad Nacional de Colombia</p>
		      </div>
		     </div>
		     <div className="columnasdobles">
		     <div className="habilidades">
                            <h1>Habilidades</h1>
                            <div className="hab"> Figma  <progress max="100" value="70"></progress></div>
                            <div className="hab"> Git/GitHub <progress max="100" value="70"></progress></div>
                            <div className="hab"> HTML y CSS  <progress max="100" value="80"></progress></div>
                            <div className="hab"> JavaScript  <progress max="100" value="60"></progress></div>
                            <div className="hab"> React <progress max="100" value="60"></progress></div>
                            <div className="hab"> Bootstrap <progress max="100" value="70"></progress></div>
         </div>
         <div className="idiomas">
         <h1>Idiomas</h1>
      
	         <img src={espanol} alt="Foto bandera" width="40px"/><p className="idiomasletra">Español: Nativo</p>
	         <img src={ingles} alt="Foto bandera"  width="40px"/><p className="idiomasletra">Inglés: 80%</p>
	         <img src={aleman} alt="Foto bandera"  width="40px"/><p className="idiomasletra">Alemán 10%</p>
         
                            
         </div>
         </div>

		</div>
		</div>

  );
}
export default Bodyconoceme;