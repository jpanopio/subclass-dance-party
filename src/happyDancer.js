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
    // call the old version of step at the beginning of any call to this new version of step
    //makeDancer.step.call(this);
    this.angle += 20;
    var angle = this.angle;
    makeDancer.prototype.step.call(this);
    this.$node.css("transform","rotate(" + angle+"deg)");
    // setInterval(function() {
    //   angle += 3;
    //   this.$node.rotate(angle);
    // }, 50);
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.animate({rotate:'+20deg'});
};
