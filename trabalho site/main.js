function tocaSom (seletorAudio) {
const elemento  = document.querySelector(seletorAudio).play();
}

else{
    alert('elemento nao encontrado');
}
 if(elemento != null & elemento.localname === 'audio' ) {
    elemento.play ();
 }  


const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = funcition (){

            tecla.classlist.add('space' || evento.code === 'enter'  )
    }

        tecla.classlist.add('ativa');
    }

    tecla.onkeyup = funcition (){

        tecla.classlist.remove('ativa');

}
