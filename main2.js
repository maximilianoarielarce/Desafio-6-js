/* ejercicio B */

var cantidadDeGatos= prompt ("ingrese cantidad de gatos")
var cantidadDePasos= prompt ("ingrese cantidad de pasos")

for(var i=1; i <= cantidadDeGatos; i++ ) {

    var huellas = ""

    for(var j= 1 ; j<= cantidadDePasos; j++){  
        
        huellas = huellas + " 🐾 "
        
    }

    console.log ("Gato #" + i + "🐈" + huellas)
}



