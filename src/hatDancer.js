var makeHatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append($('<img src="src/img/drakehead3.png"></img>')); 
  this.$node.addClass('hatDancer');
  // this.$node = $('<span class="dancer hatDancer"><img src="src/img/drakehead3.png"></img></span>');
};

makeHatDancer.prototype = Object.create(makeDancer.prototype);

makeHatDancer.prototype.constructor = makeHatDancer;

makeHatDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //makeDancer.step.call(this);
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};
