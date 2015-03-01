
// is document ready?  console.log that it is
$(document).ready(function () { console.log('on jQuery ready'); });

$( "#reveal" ).hide();
$( "div").hide();

//creates and organizes teams and players
 function Playerteam(p, t) {
      this.player = p;
      this.team = t;
      this.toHTML = function() {
        return "<li class='playerteam'>" + this.player + "-" + this.team + "</li>";
      }
    }
    function Deck() {
      var thisDeck = this;
      this.teams = ['Sonics', 'Bulls', 'Nuggets', 'Trailblazers'];
      this.players = ['C', 'PF', 'PG', 'SF', 'SG'];
      $.each(thisDeck.teams, function() {
        var team = this;
        $.each(thisDeck.players, function() {
          var player = this;
          var playerteam = new Playerteam(player, team);
          $('#playerteam').append(playerteam.toHTML());
        });
      });
    }
    var deck = new Deck();


//adds player css ids
/*$('li:contains("sonics")').addClass('click', function(e) {
  $('button').remove();
  $('p').addClass('raceresults');
  playGame();
});
*/





// Shuffles the DOM #playerteam li elements, taken from James Padolsey
(function($){
    $.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        return $(shuffled);
    };
})(jQuery);

//button calls shuffle and takes first player listed after shuffle from each position, puts them into class pick5

$('#draft').click(function() {
  $('button').remove("#draft");
  $('ul#playerteam li').shuffle();


//take the first player listed from each position and put them in class pick5

  $( "li:contains('PG'):first" ).attr( {class: "pick5"} );
  $( "li:contains('SG'):first" ).attr( {class: "pick5"} );
  $( "li:contains('C'):first" ).attr( {class: "pick5"} );
  $( "li:contains('SF'):first" ).attr( {class: "pick5"} );
  $( "li:contains('PF'):first" ).attr( {class: "pick5"} );
  $( "#reveal" ).show();
});


//button removes players from list and reveals their identity
$( "#reveal" ).click(function() {
  $('button').remove("#reveal");
  $( "div").show();
  $(".pick5").prependTo( ".picks");
  $('#player1').append( "<img src='images/" + $( '.pick5:first' ).text() + ".png' height='127' width='175'>" );
  $('#player2').append( "<img src='images/" + $( "li" ).eq( 16 ).text() + ".png' height='127' width='175'>" );
  $('#player3').append( "<img src='images/" + $( "li" ).eq( 17 ).text() + ".png' height='127' width='175'>" );
  $('#player4').append( "<img src='images/" + $( "li" ).eq( 18 ).text() + ".png' height='127' width='175'>" );
  $('#player5').append( "<img src='images/" + $( '.pick5:last' ).text() + ".png' height='127' width='175'>" );

})











