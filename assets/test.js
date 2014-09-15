var box = document.querySelector('.box'),
  checkBlueLink = document.querySelector('.check-blue'),
  checkBigLink = document.querySelector('.check-big'),
  toggleLinks = document.querySelectorAll('[data-toggle-class]');

for(var i = 0, len = toggleLinks.length; i < len; i++) {
  toggleLinks[i].on('click', function(evt) {
    evt.preventDefault()
    var el = evt.srcElement || evt.originalTarget,
      klass = el.getAttribute('data-toggle-class');
    box.toggleClass(klass);
  });
}

checkBlueLink.on('click', function(evt) {
  evt.preventDefault();
  var isBlue = box.hasClass('blue');
  isBlue ? alert("Looks blue to me!") : alert("It's not blue!");
});

checkBigLink.on('click', function(evt) {
  evt.preventDefault();
  var isBig = box.hasClass('big');
  isBig ? alert("Yes, it hardly fits!") : alert("No, it's pretty small, actually!");
});

