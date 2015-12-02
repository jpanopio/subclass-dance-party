var makeHatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append($('<img src="src/img/drakehead3.png"></img>')); 
  this.$node.addClass('hatDancer');
  this.mouse();
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
    // this.$node.toggle();
    
};

makeHatDancer.prototype.mouse = function() {
  var context = this;
  var currentRotation = 0
  var mousedOver = false;

    //setTimeout(function(){ return context.mouse() }, 1000);
  context.$node.mouseover(function(now, fx) {
    console.log("mouseover!");

    /*while(currentRotation < 360) {
      setTimeout(function(){
        context.$node.css({'transform':'rotateY(' + currentRotation + 'deg)'});
        currentRotation += 20;
      }(),10)
    }*/
    // context.$node.animate({borderSpacing: -360}, {step: function() {
    //   context.$node.css({'transform':'rotateY(60deg)'})
    // }, 'duration':'slow'}, 'linear');
    if(!mousedOver) {
      var angle = 0;
      setInterval(function() {
        context.$node.css({'transform':'rotateY(' + angle + 'deg)'});
        angle+=1;
      }, 10);
      mousedOver = true;
    }
  });

};
