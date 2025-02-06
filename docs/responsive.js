const divMenuResponsive= document.getElementById("menu-responsive");
const iconoMenuResponsive=document.getElementById("contenedor-img-menu");
const iconoCruz= document.getElementById("img-cruz");
const hijos=divMenuResponsive.children;
const log=document.createElement('img');
const bolsa=document.createElement('img');
const divLog=document.createElement('div');
const divCompra=document.createElement('div');
const parrafoCompras=document.createElement('p');
const parrafoLog=document.createElement('p');
const imagenDeBanner=document.getElementById("banner");
const divButton=document.getElementById('div-button-right');



function crearSectorLogMenu(){
hijos[1].appendChild(log);
log.classList.add("logo-de-menu-responsive")
log.src="../img/log.png"
hijos[1].appendChild(divLog);
divLog.classList.add("div-parrafos-menu");
divLog.appendChild(parrafoLog);
parrafoLog.classList.add('parrafos-menu');
parrafoLog.innerText="INICIAR SESION";

}

function crearSectorCompra(){
    hijos[2].appendChild(bolsa);
    bolsa.classList.add("logo-de-menu-responsive")
    bolsa.src="../img/bolsa-compras.png"
    hijos[2].appendChild(divCompra);
    divCompra.classList.add("div-parrafos-menu");
    divCompra.appendChild(parrafoCompras);
    parrafoCompras.classList.add('parrafos-menu');
     parrafoCompras.innerText="BOLSA DE COMPRAS";

    }


    iconoMenuResponsive.addEventListener("click",()=>{
        divMenuResponsive.style.display="flex";
        crearSectorLogMenu();
        crearSectorCompra();
    })

    
    iconoCruz.addEventListener("click",()=>{
        divMenuResponsive.style.display="none";
    })    
    
    

    const img = document.getElementById("miImagen");

    function obtenerDimensiones() {
      const rect = imagenDeBanner.getBoundingClientRect();
      console.log(`Ancho: ${rect.width}px, Alto: ${rect.height}px`);
      divButton.style.height=rect.height;
    }
  
    // Detectar cambios de tamaño en la pantalla
    window.addEventListener("resize", obtenerDimensiones);
  
    // Llamar una vez al inicio para obtener el tamaño inicial
    obtenerDimensiones();



    function ajustarAltura() {
        const banner = document.getElementById("banner");
        const botones = document.getElementsByClassName("div-button");
      
        // Obtener la altura actual de la imagen
        const alturaBanner = banner.clientHeight;
      
        // Asignar la misma altura a los div de botones
        for (let boton of botones) {
          boton.style.height = alturaBanner + "px";
        }
      }
      
      // Ejecutar al cargar la página y al cambiar el tamaño de la ventana
      window.addEventListener("load", ajustarAltura);
      window.addEventListener("resize", ajustarAltura);