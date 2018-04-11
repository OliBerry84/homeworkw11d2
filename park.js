const Park = function(enclosure){
  this.enclosure = [];
}

  Park.prototype.numberOfDinosaurs = function(){
      return this.enclosure.length
  };

  Park.prototype.addDinosaur = function(dinosaur){
    this.enclosure.push(dinosaur);
  };

  Park.prototype.removeDinosaurOfType = function(dinosaur){
    for(let dinosaur of this.enclosure){
      if(dinosaur.type = dinosaur){
        this.enclosure.splice(dinosaur,1)
      }
    }
  };

  Park.prototype.moreThanTwoOffspring = function(){
    let tempArray = [];
    for(let dinosaur of this.enclosure){
      if(dinosaur.offspring >= 3){
        tempArray.push(dinosaur);
      }
    }
    return tempArray;
  };

module.exports = Park;
