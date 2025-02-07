const banner= document.getElementById("first-div-main");
const botonIzq= document.getElementById("div-button-left");
const botonDerch= document.getElementById("div-button-right");
const imgBanner= document.getElementById("banner");
let imagenes=["/ARBELL/docs/img/1.jpg","/ARBELL/docs/img/2.jpg","/ARBELL/docs/img/3.jpg"]
let i=0;
let intervalo;



function colocarImagen(){
intervalo=setInterval(()=>{
    imgBanner.src=imagenes[i];
    i++;
    if(i==imagenes.length){
    i=0;
    }

},3000);

}

botonDerch.addEventListener("click",()=>{
     cambiarImagen(1);
  });


  botonIzq.addEventListener("click",()=>{
      cambiarImagen(-1);
  });

function cambiarImagen(direccion){
    clearInterval(intervalo);
    i=(i+direccion);
    if(i>2){
        i=0;
    }
    if(i<0){
        i=2;
    }
    console.log(i);
    imgBanner.src=imagenes[i];
    colocarImagen();



}



banner.addEventListener("mouseover",()=>{
    let seguro=0;
   botonIzq.style.display="flex";
   botonDerch.style.display="flex";

   if(seguro==0){
    botonDerch.addEventListener("mouseover",()=>{
       if(i==2){
     botonDerch.style.display="none"
       }
       if(i>=0){
        botonDerch.style.display="flex";
    }

        botonIzq.style.display="flex";
    })

    botonIzq.addEventListener("mouseover",()=>{
        botonDerch.style.display="flex";

        if(i==2){
            botonIzq.style.display="none"
              }
              if(i>=0){
               botonIzq.style.display="flex";
           }
    })
}

});

banner.addEventListener("mouseout", function(){
    botonIzq.style.display="none";
    botonDerch.style.display="none";
    
});


if(i<3){
    colocarImagen();
}
