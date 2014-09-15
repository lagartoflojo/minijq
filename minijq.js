// Re-implementation of jQuery.hasClass
HTMLElement.prototype.hasClass = function(klass) {
  var el = this,
    classes = el.className.split(' ');
  return classes.indexOf(klass) >= 0;
}

// Re-implementation of jQuery.addClass
HTMLElement.prototype.addClass = function(klass) {
  var el = this,
    classes = el.className.split(' ');

  if(!el.hasClass(klass)) {
    classes.push(klass);
    el.className = classes.join(' ');
  }

  return el;
}

// Re-implementation of jQuery.removeClass
HTMLElement.prototype.removeClass = function(klass) {
  var el = this,
    classes = el.className.split(' '),
    idx;

  while(classes.indexOf(klass) >= 0) {
    idx = classes.indexOf(klass);
    classes.splice(idx, 1);
  }

  el.className = classes.join(' ');

  return el;
}

// Re-implementation of jQuery.toggleClass
HTMLElement.prototype.toggleClass = function(klass) {
  if(this.hasClass(klass)) {
    this.removeClass(klass);
  }
  else {
    this.addClass(klass);
  }

  return this;
}

// Re-implementation of jQuery.on
HTMLElement.prototype.on = function(evtName, callback) {
  this.addEventListener(evtName, callback);
  return this;
}
