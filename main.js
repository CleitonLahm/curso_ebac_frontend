function Animal(nome, idade, especie){
  this.nome = nome;
  this.idade = idade;
  this.especie = especie;

  this.emitirSom = function(){
    console.log('O animal esta emitindo um som');
  }
}

function Cachorro(nome,idade) {
  Animal.call(this, nome, idade, 'cachorro')

  this.latir = function() {
    console.log('Au Au');
  }
}

function Gato(nome, idade) {
  Animal.call(this, nome, idade, 'gato');

  this.miar = function () {
    console.log('Miau!');
  };
}

const dog = new Cachorro('Dog', 2)
const miau = new Gato('Miau', 3)
const Fred = new Animal('Fred', 1, 'passaro')