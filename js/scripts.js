var Ticket = {age: 'Adult', time: Date.parse('01/01/2015 20:00:00'), newRelease: true, price: 9.50};
Ticket.adjustPrice = function() {
  if(this.age === 'Senior') {
    this.price = this.price - 2.25;
  } else if (this.age === 'Child') {
    this.price = this.price - 3.25;
  } else if (this.age === 'Student') {
    this.price = this.price - 1.25;
  }
  if (this.time < Date.parse('01/01/2015 5:00:00')){
    this.price = this.price - 2.75;
  }
  if (!this.newRelease){
    this.price = this.price - 0.75;
  }
};

$(function() {
  $(".time li").click( function(event){
    event.preventDefault();
    var time = $(event.target).text()
    var newTicket = Object.create(Ticket);
    newTicket.time = Date.parse('01/01/2015 ' + time + ':00')
    newTicket.age = $('#age').val();
    newTicket.adjustPrice();
    $('#ticketInfo').empty();
    $('#ticketInfo').append('<h4>The ' + newTicket.age + ' Price for the ' + time + ' Showing is: $' + newTicket.price + '</h4>');

  });

  $("#hotPursuit").hover(
    function() {
      $('#banner').empty().append("Now Playing");
      $('span.poster').html('<img src="css/img/hotpursuit.jpg">');
    }, function() {
      $('#banner').empty().append("Coming Soon!");
      $('span.poster').html('<img src="css/img/starwars.jpg">');
    }
  );
  $("#breakfastClub").hover(
    function() {
      $('#banner').empty().append("Now Playing");
      $('span.poster').html('<img src="css/img/breakfastclub.jpg">');
    }, function () {
      $('#banner').empty().append("Coming Soon!");
      $('span.poster').html('<img src="css/img/starwars.jpg">');
    }
  );
  $("#barbarella").hover(
    function() {
      $('#banner').empty().append("Now Playing");
      $('span.poster').html('<img src="css/img/barbarella.jpg">');
    }, function () {
      $('#banner').empty().append("Coming Soon!");
      $('span.poster').html('<img src="css/img/starwars.jpg">');
    }
  );
  $("#laStrada").hover(
    function() {
      $('#banner').empty().append("Now Playing");
      $('span.poster').html('<img src="css/img/lastrada.jpg">');
    }, function () {
      $('#banner').empty().append("Coming Soon!");
      $('span.poster').html('<img src="css/img/starwars.jpg">');
    }
  );
});
