
/* 
    ESSE JAVASCRIPT FOI ENCONTRADO NO FORUM "STACK OVERFLOW"
    E MINIMAMENTE ADAPTADO PARA A SITUAÇÃO ATUAL!

    link: https://stackoverflow.com/questions/36962903/javascript-shake-html-element
*/

var randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var shakingElements = [];

var shake = function (element, magnitude = 16, angular = false) {

  if(dobotao){
    console.log("Terremoto chamado do botão!");
    dobotao = false;
  }else if(!aleatorio){
    console.log("Não dessa vez, meu chapa!");
    return;
  }

  //First set the initial tilt angle to the right (+1) 
  var tiltAngle = 1;

  //A counter to count the number of shakes
  var counter = 1;

  //The total number of shakes (there will be 1 shake per frame)
  var numberOfShakes = randomInt((x/2)*100,x*100);

  //Capture the element's position and angle so you can
  //restore them after the shaking has finished
  var startX = 0,
      startY = 0,
      startAngle = 0;

  // Divide the magnitude into 10 units so that you can 
  // reduce the amount of shake by 10 percent each frame
  var magnitudeUnit = magnitude / numberOfShakes;

  //Add the element to the `shakingElements` array if it
  //isn't already there
  if(shakingElements.indexOf(element) === -1) {
    //console.log("added")
    shakingElements.push(element);

    //Add an `updateShake` method to the element.
    //The `updateShake` method will be called each frame
    //in the game loop. The shake effect type can be either
    //up and down (x/y shaking) or angular (rotational shaking).
    if(angular) {
      angularShake();
    } else {
      console.log("Aplicado um terremoto de " + numberOfShakes/100 + " vezes de um terremoto comum.");
      upAndDownShake();
    }
  }

  //The `upAndDownShake` function
  function upAndDownShake() {
    //Shake the element while the `counter` is less than 
    //the `numberOfShakes`
    if (counter < numberOfShakes) {

      //Reset the element's position at the start of each shake
      element.style.transform = 'translate(' + startX + 'px, ' + startY + 'px)';

      //Reduce the magnitude
      magnitude -= magnitudeUnit;

      //Randomly change the element's position
      var randomX = randomInt(-magnitude, magnitude);
      var randomY = randomInt(-magnitude, magnitude);

      element.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';

      //Add 1 to the counter
      counter += 1;

      requestAnimationFrame(upAndDownShake);
    }

    //When the shaking is finished, restore the element to its original 
    //position and remove it from the `shakingElements` array
    if (counter >= numberOfShakes) {
      element.style.transform = 'translate(' + startX + ', ' + startY + ')';
      shakingElements.splice(shakingElements.indexOf(element), 1);
    }
  }

  //The `angularShake` function
  function angularShake() {
    if (counter < numberOfShakes) {
      console.log(tiltAngle);
      //Reset the element's rotation
      element.style.transform = 'rotate(' + startAngle + 'deg)';

      //Reduce the magnitude
      magnitude -= magnitudeUnit;

      //Rotate the element left or right, depending on the direction,
      //by an amount in radians that matches the magnitude
      var angle = Number(magnitude * tiltAngle).toFixed(2);
      console.log(angle);
      element.style.transform = 'rotate(' + angle + 'deg)';
      counter += 1;

      //Reverse the tilt angle so that the element is tilted
      //in the opposite direction for the next shake
      tiltAngle *= -1;

      requestAnimationFrame(angularShake);
    }

    //When the shaking is finished, reset the element's angle and
    //remove it from the `shakingElements` array
    if (counter >= numberOfShakes) {
      element.style.transform = 'rotate(' + startAngle + 'deg)';
      shakingElements.splice(shakingElements.indexOf(element), 1);
      //console.log("removed")
    }
  }

};

/* 
    PARTE ADICIONADA E MODIFICADA COM INTUITOS DE MELHOR CONTROLE 
    QUERIA DIZER ND NÃO MAS FOI DIFICIL RSRS 
*/

let x = 1,
    aleatorio = true,
    dobotao = false;

/* A FUNÇÃO SERÁ CHAMADA A CADA X TEMPOS*/
setInterval(treme,randomInt(10,30)*1000);

/* SE CLICAR EM TERREMOTO , A FUNÇÃO IRÁ INICIAR */
document.querySelector('#treme').addEventListener('click',function(){
  dobotao = true;
  treme();
});

/* FUNÇÃO QUE CHAMA A FUNÇÃO SHAKE*/
function treme(){
  shake(document.querySelector("main"));
}

/* SALVAR OS VALORES UTILIZADOS NAS CONFIGURAÇÕES (inicia no Load) */
document.querySelector('#salvar').addEventListener('click',configuracoes);
window.onload = configuracoes;

/* FUNÇÃO QUE SALVA OS VALORES*/
function configuracoes(){
  x = document.querySelector('#intensidade').value;
  if(x>13){
    x=13;
  } else if(x<0){
    x=0;
  }
  aleatorio = document.querySelector('#aleatorios').checked;
}



/* 
    CONFIGURAÇÃO
*/


let botaoEl = document.querySelector('#configurarT'),
    imagemEl = document.querySelector('#some'),
    aparece = true;
/* SWITCH ENTRE APARECE E NÃO APARECE */
botaoEl.addEventListener('click',function(){
    if(aparece){
      botaoEl.innerHTML = " - Configurações";
      aparece = false;
      imagemEl.style.left = "-400px";
      imagemEl.style.opacity = "0";
    } else{
      botaoEl.innerHTML = " + Configurações";
      aparece = true;
      imagemEl.style.left= "0";
      imagemEl.style.opacity = "1";
    }
});
