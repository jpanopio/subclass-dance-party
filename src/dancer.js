// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function(){
    return context.step();
  }, context.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  var position = 0;
  for(var i = 0; i < dancers.length; i++){
    position += (600 / dancers.length);
    //dancers[i].$node.css({'top':'250px','left':String(position)+ 'px','position':'fixed'}); 

    // Rebecca Notes: We weren't incrementing position for each item, and we weren't iterating through the dancers
    // correctly, so I added a position variable, and made sure we were iterating through each dancer

    dancers[i].$node.animate({'top':'250px','left':String(position)});
  }
};

makeDancer.prototype.interact = function(topDiff,leftDiff,topP,leftP) {
  var newTop = topP + topDiff > 0 || topP + topDiff < $('.highschool').height()-200 ? topP + topDiff : 0;
  var newLeft = leftP + leftDiff > 0 || leftP + leftDiff < $('.highschool').width()-200 ? leftP + leftDiff : 0; 

  this.$node.animate({top:String(newTop) + 'px', left:String(newLeft) + 'px'});
};
