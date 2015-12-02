$(document).ready(function() {
  window.dancers = [];

  //$("body").css('background-image','/img/Degrassi.jpg' )
  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  $(".addLineUp").on("click", function(event){
      for(var i = 0; i < dancers.length; i++){
        dancers[i].lineUp();

      }
  });

  $(".interactButton").on("click",function(){
    var dancerPositions = [];

    for(var i = 0; i < dancers.length; i++) {
      var height = dancers[i].$node.css('top');
      var formatHeight = Number(height.substring(0, height.length - 2));

      var width = dancers[i].$node.css('left');
      var formatWidth = Number(width.substring(0, width.length - 2));

      dancerPositions.push([dancers[i], formatHeight, formatWidth]);
    }

    for(var i = 0; i < dancerPositions.length; i++){
      for(var j = i + 1; j < dancerPositions.length; j++){
        var topDiff = dancerPositions[i][1] - dancerPositions[j][1];
        var leftDiff = dancerPositions[i][2] - dancerPositions[j][1];

        console.log("topDiff: " + topDiff);
        console.log("leftDiff: " + leftDiff);

        if(Math.abs(topDiff) < 200 || Math.abs(leftDiff) < 200) {
          dancerPositions[i][0].interact(topDiff, leftDiff, dancerPositions[i][1], dancerPositions[i][2]);
          dancerPositions[j][0].interact(topDiff, leftDiff, dancerPositions[j][1], dancerPositions[j][2]);
        }
      }
    }
  });
});
