////////////////////////////////////////////////////////////////////////////////////
// Declaracion de Varialbes:
const ID_TEXTO_LINEAA = "texto_lineaA";
const ID_TEXTO_LINEAB = "texto_lineaB";
const ID_TEXTO_LINEAC = "texto_lineaC";
const ID_TEXTO_LINEAD = "texto_lineaD";
const ID_TEXTO_LINEAE = "texto_lineaE";
const ID_TEXTO_LINEAH = "texto_lineaH";


////////////////////////////////////////////////////////////////////////////////////
// MAIN

setInterval(async function(){ //LA EJECUTO CADA 1 min
   updateAllLetter();
}, 60000);

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Declaracion de Fuciones:

async function updateAllLetter(){
    
    try{
        fetch("http://172.30.180.10:3021/scp/carteles/90002/")
        .then(response => response.text())
        .then(data => {
        datos = JSON.parse(data);

        console.log(datos);

       // const status_lineaA = datos[0].lines[0].state;
        let txt_lineaA = "Servicio normal";
        if( datos[0].lines[0].txtState !== "" ){       //LINEA A
            txt_lineaA = datos[0].lines[0].txtState;
        }

        //const status_lineaB = datos[0].lines[1].state;
        let txt_lineaB = "Servicio normal";
        if( datos[0].lines[1].txtState !== "" ){       //LINEA B
            txt_lineaB = datos[0].lines[1].txtState;
        }

        //const status_lineaC = datos[0].lines[2].state;
        let txt_lineaC = "Servicio normal";
        if( datos[0].lines[2].txtState !== "" ){       //LINEA C
            txt_lineaC = datos[0].lines[2].txtState;
        }

        //const status_lineaD = datos[0].lines[3].state;
        let txt_lineaD = "Servicio normal";
        if( datos[0].lines[3].txtState !== "" ){       //LINEA D
            txt_lineaD = datos[0].lines[3].txtState;
        }

        //const status_lineaE = datos[0].lines[4].state;
        let txt_lineaE = "Servicio normal";
        if( datos[0].lines[4].txtState !== "" ){       //LINEA E
            txt_lineaE = datos[0].lines[4].txtState;
        }

        //const status_lineaH = datos[0].lines[5].state;
        let txt_lineaH = "Servicio normal";
        if( datos[0].lines[5].txtState !== "" ){       //LINEA H
            txt_lineaH = datos[0].lines[5].txtState;
        }

        //document.getElementById(ID_TEXTO_INSTITU).innerText = txt_institucional;
        document.getElementById(ID_TEXTO_LINEAA).innerText = txt_lineaA;
        document.getElementById(ID_TEXTO_LINEAB).innerText = txt_lineaB;
        document.getElementById(ID_TEXTO_LINEAC).innerText = txt_lineaC;
        document.getElementById(ID_TEXTO_LINEAD).innerText = txt_lineaD;
        document.getElementById(ID_TEXTO_LINEAE).innerText = txt_lineaE;
        document.getElementById(ID_TEXTO_LINEAH).innerText = txt_lineaH;
        

    });
    
}catch(error){
    console.log("ERROR");    
}



}