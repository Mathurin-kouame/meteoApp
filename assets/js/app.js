let ville = "Abidjan";
recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () =>{
     ville = prompt('Quelle ville souhaitez-vous visiter ?'); 
      recevoirTemperature(ville);
});

function recevoirTemperature(ville){

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=53318e7518e346a8bca7712a1ed53569&units=metric';

  let requette = new XMLHttpRequest();
  requette.open('GET', url);
  requette.responseType ='json';
  requette.send();

  requette.onload = function(){
    if(requette.readyState === XMLHttpRequest.DONE){
      if(requette.status === 200){
        let reponse = requette.response;
        console.log(reponse);
         let temperature = reponse.main.temp;
         document.querySelector("#temperature_label").textContent = temperature;
         let ville = reponse.name;
         document.querySelector("#ville").textContent = ville; 
      }
      else{
        alert("un problème est intervenu merci de revenir plus tard");
      }
    }
  } 
}