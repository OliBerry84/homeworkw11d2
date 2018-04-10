const assert = require('assert');
const Park = require('../park.js');

describe('Park', function(){

  let park;

  beforeEach(function(){
      park = new Park();
  });

  it('Park should start empty', function(){
    const result = park.enclosure;
    assert.deepStrictEqual(result, []);
  });

  it('Can add dinosaur to park', function(){
    park.addDinosaur('Triceratops');
    const result = park.enclosure.length;
    assert.deepStrictEqual(result, 1);
  });

  it('Can remove dinosaurs of a certain type', function(){
    park.addDinosaur('Triceratops');
    park.addDinosaur('Triceratops');
    park.addDinosaur('Tyrannosaurus Rex');
    park.removeDinosaurOfType('Triceratops');
    const result = park.enclosure.length;
    assert.deepStrictEqual(result, 1);
  });

  xit('Return dinosaurs with more than two offspring', function(){
    park.addDinosaur('Tyrannosaurus Rex', 3);
    park.addDinosaur('Tyrannosaurus Rex', 5);
    park.addDinosaur('Tyrannosaurus Rex', 1);
    park.moreThanTwoOffspring('Tyrannosaurus Rex');
    const result = park.enclosure.length;
    assert.deepStrictEqual(result, 2);
  });











}); //wrapper
