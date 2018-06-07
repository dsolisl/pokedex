function json(){
    var pokemones = [
        {
          "id":"001",
          "name":"Charmander",
          "photo":"01",
          "type":"fire"
        },
        {
          "id":"002",
          "name":"Kanjaskan",
          "photo":"02",
          "type":"fighting"
        },
        {
          "id":"003",
          "name":"Mewtwo",
          "photo":"03",
          "type":"fairy"
        },
        {
          "id":"004",
          "name":"Blastoise",
          "photo":"04",
          "type":"water"
        },
        {
          "id":"005",
          "name":"Bulbasaur",
          "photo":"05",
          "type":"grass"
        },
        {
          "id":"006",
          "name":"Magikarp",
          "photo":"06",
          "type":"water"
        },
        {
          "id":"007",
          "name":"Pikachu",
          "photo":"07",
          "type":"electric"
        },
        {
          "id":"008",
          "name":"Gengar",
          "photo":"08",
          "type":"ghost"
        },
        {
          "id":"009",
          "name":"Vamoacalmarno",
          "photo":"09",
          "type":"water"
        }
      ];  
      
      var content = "";

      for (var i=0; i<pokemones.length; i++){
          content += "<div class = 'pokeFriends'>";
          content += "<img  class= 'bicho' src = 'img/photos/" + pokemones[i].photo +'.jpg'+ "'/>";
          content += "<h2 class= 'nombre'>" + pokemones[i].name + "</h2>";
          content += "<div class = 'numnombre'>";
          content += "<h1 class= 'numero'>" + pokemones[i].id + "</h1>";
          content += "<img class='tipo' src = 'img/types/" + pokemones[i].type +'.png' +  "'/>";
          content += "</div>";
          content += "</div>";
 
      }
        document.getElementById("result").innerHTML = content;
}