/* ejercicio C */

var cantidadDeGatos= prompt ("ingrese cantidad de gatos")
var cantidadDePasos= prompt ("ingrese cantidad de pasos")

for(var i=1; i <= cantidadDeGatos; i++ ) {

    var huellas = ""

    for(var j= 1 ; j<= cantidadDePasos; j++){  
        
        huellas = huellas + " 🐾 "
        
    }

      if( i % 2 === 0 ) {

        console.log ("Gato #" + i + "🐈 ⬛" + huellas)

    } else{

        console.log ("Gato #" + i + "🐈" + huellas)

    }   
  
}

 