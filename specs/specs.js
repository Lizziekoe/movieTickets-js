describe ('Ticket', function() {
  describe ('price', function() {
    it("calculates the price of a default ticket based off default properties", function(){
      var test = Object.create(Ticket);
      expect(test.price).to.equal(9.50);
    });
    it("calculates the price for a senior, new release, matinee", function(){
      var test = Object.create(Ticket);
      test.age = "Senior";
      test.time = Date.parse('01/01/2015 11:00:00');
      test.adjustPrice();
      expect(test.price).to.equal(4.50);
    });
    it("calculates the price for a child, non-new-release", function(){
      var test = Object.create(Ticket);
      test.age = "Child";
      test.newRelease = false;
      test.adjustPrice();
      expect(test.price).to.equal(5.50);
    });
    it("calculates the price for a student", function(){
      var test = Object.create(Ticket);
      test.age = "Student";
      test.adjustPrice();
      expect(test.price).to.equal(8.25);
    });
  });
});
