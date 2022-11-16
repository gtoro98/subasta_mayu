
var posicion = 0
var total = 0
var num_subasta = 1
var fundraising_thermometer_497 = {"layout":"1","fill-color":"rgba(231, 96, 81, 1)","goal-amount":"10000","progress-amount":"0","show-goal-amount":"1","show-progress-percentage":"1","show-progress-amount":"1", "svg-thermometer-background": "0"};


xlsx.readFile("../../subasta_mayu")
set_cuadro()

function sumar(){
    
    var input = document.getElementById('monto');
    
    total = parseInt(total) + parseInt(input.value)

    fundraising_thermometer_497 = {"layout":"1","fill-color":"rgba(231, 96, 81, 1)","goal-amount":"10000","progress-amount": total,"show-goal-amount":"1","show-progress-percentage":"1","show-progress-amount":"1"}
    
    actualizar_monto()
    set_cuadro()
    // Start by creating an empty `<script />` tag element


  }

function set_cuadro(){
    var foto_obra_html = document.getElementById("foto")
    var nombre_obra_html = document.getElementById("nombre_obra")
    var nombre_artista_html = document.getElementById("nombre_artista")
    var ano_html = document.getElementById("ano")
    var dimensiones_html = document.getElementById("dimensiones")
    var tecnica_html = document.getElementById("tecnica")
    var precio_base_html = document.getElementById("precio_base")

    path_foto = "/static/media/" + cuadros[posicion][1].replace(/ /g, "_") + '.JPG'
    console.log(path_foto)
    foto_obra_html.setAttribute("src", path_foto)
    console.log(cuadros[posicion])
    nombre_artista_html.innerHTML = cuadros[posicion][0]
    nombre_obra_html.innerHTML = cuadros[posicion][1]
    ano_html.innerHTML = cuadros[posicion][2]
    dimensiones_html.innerHTML = cuadros[posicion][3]
    tecnica_html.innerHTML = cuadros[posicion][4]
    precio_base_html.innerHTML = "Precio Base: $" + cuadros[posicion][5]
    
    posicion += 1
  }

function actualizar_monto(){
    var scriptTag = document.createElement("script");

    scriptTag.setAttribute("for", "fundraising-thermometer-497");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.src = "https://d22knjn4n6hjqd.cloudfront.net/thermometer/embed.js";

    document.head.appendChild(scriptTag);
  }

function reiniciar(){
    total = 0
    posicion = 0
    set_cuadro()
    var meta = window.prompt("Ingrese el monto de la meta","10000");
    var num_subasta = window.prompt("Ingrese el numero de la subasta","1");

    fundraising_thermometer_497 = {"layout":"1","fill-color":"rgba(231, 96, 81, 1)","goal-amount":meta,"progress-amount":"0","show-goal-amount":"1","show-progress-percentage":"1","show-progress-amount":"1"};

    actualizar_monto()
  }

  function select_subasta(){

  }