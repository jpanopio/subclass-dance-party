var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append($('<img src="src/img/danceGifs/drake_dance2.gif"></img>'));
  this.$node.addClass('blinkyDancer');
  
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
    // makeDancer.prototype.step.call(this);
   
    // var direction = String(Math.floor(Math.random()*50));
    // var animations = ["left","top","right","bottom"];
    // var animater = animations[Math.floor(Math.random()*4)];

    // this.$node.css(animater,direction + "px");
};
