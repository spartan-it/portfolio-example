balance = 1830;

function restart(){
  resultado.innerText = "";
  billetes.innerHTML = "";
}

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}



function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  usuario = parseInt(t.value);
  for(var bi of caja)
  {

    if(dinero > 0 & dinero <= 1830 )
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
      restart();
    }

  }

  if(dinero > 0)
  {

    resultado.innerHTML = "I am a bad ATM, I have been bad and I can't give you that amount :(";
  }
  else
  {
    resultado.innerHTML = resultado.innerHTML + "<br/>";
    for(var e of entregado)
    {

      if(e.cantidad > 0 & balance >= usuario)
      {
        console.log(balance);
              resultado.innerHTML = resultado.innerHTML + e.cantidad + " bill(s) of $" + e.valor + "<br/>" + "<br/>";

              for (var i = 0; i < e.cantidad; i++) {
                if (e.valor == 100) {
                  var imagen = document.createElement("img");
                  imagen.src = 1 + ".jpg";
                  billetes.appendChild(imagen);
                }
                if (e.valor == 50) {
                  var imagen = document.createElement("img");
                  imagen.src = 2 + ".jpg";
                  billetes.appendChild(imagen);
                }
                if (e.valor == 20) {
                  var imagen = document.createElement("img");
                  imagen.src = 3 + ".jpg";
                  billetes.appendChild(imagen);
                }
                if (e.valor == 10) {
                  var imagen = document.createElement("img");
                  imagen.src = 4 + ".jpg";
                  billetes.appendChild(imagen);
                }
                if (e.valor == 5) {
                  var imagen = document.createElement("img");
                  imagen.src = 5 + ".jpg";
                  billetes.appendChild(imagen);
                }
                if (e.valor == 2) {
                  var imagen = document.createElement("img");
                  imagen.src = 6 + ".jpg";
                  billetes.appendChild(imagen);
                }
                if (e.valor == 1) {
                  var imagen = document.createElement("img");
                  imagen.src = 7 + ".jpg";
                  billetes.appendChild(imagen);
                }
              }

      }
    }
    if (balance < usuario) {
      saldo.innerHTML = "Tu saldo es " + balance;
      resultado.innerHTML = "You don't have enough money";
    }
    else if(balance >= usuario){
      balance = balance - usuario;
      saldo.innerHTML = "Your balance is $ " + balance + " dollars";
      }

    resultado.innerHTML = resultado.innerHTML ;
    entregado.length -= entregado.length;
    }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 10) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 10) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
caja.push( new Billete(2, 2) );
caja.push( new Billete(1, 1) );

var div = 0;
var papeles = 0;

var balance = 1830;




var saldo = document.getElementById("saldo");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");


b.addEventListener("click", entregarDinero);

console.log(b);

var billetes = document.getElementById("billetes");


function loop(){
  for (var i = 0; i < 7; i++) {
    var imagen = document.createElement("img");
    imagen.src = i+1 + ".jpg";
    billetes.appendChild(imagen);
  }
}
