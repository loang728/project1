var greet = new Array("Hola", "Hallo", "Merhaba");

var counter= 0;
document.getElementById('greeting').innerHTML = greet[counter];

Changegreeting1();
function Changegreeting1(){
  incrementIndex()
  document.getElementById('greeting1').innerHTML = greet[counter];

  document.getElementById('greeting').style.opacity = 0;
 
  document.getElementById('greeting1').style.opacity = 1;

  setTimeout(Changegreeting, 5000);
}
function Changegreeting(){
  incrementIndex();
  document.getElementById('greeting').innerHTML = greet[counter];
 
  document.getElementById('greeting').style.opacity = 1;
 
  document.getElementById('greeting1').style.opacity = 0;
 
  setTimeout(Changegreeting1, 5000);
}
function incrementIndex(){
  if(counter < greet.length - 1 ){
    counter++;
  }else{
    counter = 0;
  }
}
