var Ticket = {age: 'Adult', time: Date.parse('01/01/2015 20:00:00'), newRelease: true, price: 9.50};
Ticket.adjustPrice = function() {
  if(this.age === 'Senior') {
    this.price = this.price - 2.25;
  } else if (this.age === 'Child') {
    this.price = this.price - 3.25;
  } else if (this.age === 'Student') {
    this.price = this.price - 1.25;
  }
  if (this.time < Date.parse('01/01/2015 17:00:00')){
    this.price = this.price - 2.75;
  }
  if (!this.newRelease){
    this.price = this.price - 0.75;
  }
};

$(function() {
  $("#hotPursuit").hover(
    function() {
      $('span.poster').html('<img src="css/img/hotpursuit.jpg">');
    }, function() {
      $('span.poster').html('<img src="css/img/starwars.jpg">');
    }
  );
  $("#breakfastClub").hover(
    function() {
      $('span.poster').html('<img src="css/img/breakfastclub.jpg">');
    }, function () {
      $('span.poster').html('<img src="css/img/starwars.jpg">');
    }
  );
  $("#barbarella").hover(
    function() {
      $('span.poster').html('<img src="css/img/barbarella.jpg">');
    }, function () {
      $('span.poster').html('<img src="css/img/starwars.jpg">');
    }
  );
  $("#laStrada").hover(
    function() {
      $('span.poster').html('<img src="css/img/lastrada.jpg">');
    }, function () {
      $('span.poster').html('<img src="css/img/starwars.jpg">');
    }
  );
});
