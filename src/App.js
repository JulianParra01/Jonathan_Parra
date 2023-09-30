import './App.css';
import imagenes from './img/imagenes.js';

function MiComponente() {
  return (
   
      <body>
      <div className="navbar">
        <h1>Jonathan Julian Parra</h1>
        <div className='cv'>
          <a href="https://drive.google.com/file/d/181h-f2zfZNS6j1P8zf0J6UGhXrJ1bt25/view?usp=drive_link">CV</a>
          
          <a href="https://api.whatsapp.com/send?phone=3174613344&text=Quiero%20contactar%20me%20contigo!">Contacto</a>
          </div>
      </div>
<div className="boton_flotante">
<a href="https://api.whatsapp.com/send?phone=3174613344&text=Quiero contactar me contigo!"><img src={imagenes.wasap} alt="Mi Foto"/></a>      
</div>

      
      <div className="acerca_de_mi">
        <div className="acerca_de_mi_texto">
        <h2>Sobre Mí</h2>
        <p>Soy una persona con un gran gusto
con la tecnología , mi objetivo principal es desarrollarme profesionalmente  y evolucionar en el sector de la programación, de manera que busco oportunidades que me permitan hacerlo, esto alineándome completamente con los objetivos de la empresa ,sin dejar de lado mis valores y objetivos profesionales

</p>
        </div>
        <div className='container-fotos'>
        <img src={imagenes.tu_foto} alt="Mi Foto" />
         <div className='logo'><img src={imagenes.Logo} alt="Logo" /></div>
         </div>
      </div>

      <div className="boxes">
      <div className="box">
          <h3>Estudios</h3>
          
             <p>Tecnico en programación de software - Sena 2020-2021</p>
              <p>Ingenieria de software - Politecnico gran colombiano 2022 - En progreso</p>
          
          </div>
       
        <div className="box">
          <h3>Experiencia Laboral</h3>
          <p>Tecnico Sistemas - COPCO S.A.S 04/2021- Actualmente</p>
        </div>
        <div className="box">
          <h3>Estudios complentarios</h3>
          <p>Front end Basico - Todos a la U, Universidad distrital Fransico Jose de caldas</p>
          <p>Conceptualización del lenguaje de programación C++  -SENA 2021
</p>
<p>Conceptualización del lenguaje de programación C++  -SENA 2021
</p>
<p>Estructura del lenguaje de programación C++ (Nivel I)  -SENA 2021
</p>
<p>Diseño WEB con Adobe Dreamweaver -SENA 2021 </p>
<p>Curso de Alfabetización digital - Universidad San Mateo 2021</p>
        </div>
      </div>
      <h1>Algunos trabajos hechos con Photoshop</h1>
      <div className="gallery">
     
<section>
        <img src={imagenes.gallery1} alt="Foto 1" />
        <img src={imagenes.gallery2} alt="Foto 2" />
        <img src={imagenes.gallery3} alt="Foto 3" />
        <img src={imagenes.gallery4} alt="Foto 3" />
        <img src={imagenes.gallery5} alt="Foto 3" />
    
</section>
</div>
      
      </body>
  
  );
}

export default MiComponente;

   
