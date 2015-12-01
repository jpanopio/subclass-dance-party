var makeHappyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append($('<img src="src/img/danceGifs/drake_dance.gif"></img>'));
  this.$node.addClass('happyDancer');
  this.angle = 0;

  //this.$node = $('<span class="dancer happyDancer"><img src="src/img/danceGifs/carlton_dance.gif"></img></span>');
};

makeHappyDancer.prototype = Object.create(makeDancer.prototype);

makeHappyDancer.prototype.constructor = makeHappyDancer;

makeHappyDancer.prototype.step = function() {

    // this.angle += 20;
    // var angle = this.angle;
    // makeDancer.prototype.step.call(this);
    // this.$node.css("transform","rotate(" + angle+"deg)");

};
