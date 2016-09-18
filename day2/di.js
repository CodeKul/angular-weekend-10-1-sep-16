var eng = new Engine();

function  Car(){
  var engine = new Engine(); // creating dependency
  engine = eng; // refering to global variable
};

function Bmw(engine){
  this.engine = engine;
};

function Engine(){

};

var engine = new Engine();
var engineTokoyo = new Engine();

var bmw = new Bmw(engineTokoyo); // passing the dependency
