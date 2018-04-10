const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('Triceratops', 2);
  });

  it('Dinosaur has a type', function(){
    const result = dinosaur.type;
    assert.strictEqual(result, 'Triceratops');
  });

  it('Dinosaur has offspring', function(){
    const result = dinosaur.offspring;
    assert.strictEqual(result, 2);
  });

}); //wrapper
