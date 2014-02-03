/*!
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2013 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
! function(a, b, c, d, e, f) {

  /*
   * (internal use)
   * ie8 workaround to convert NodeList to an array
   * a = NodeList
   * b = placeholder for each node
   * c = index
   * d = empty array
   * returns array of dom nodes
   */
  e = function(a, b, c, d) {
    for (c = -1, d = []; b = a[++c];) d[c] = b;
    return d;
  },

  /*
   * (internal use)
   * Cross-browser super-type event handler https://gist.github.com/dciccale/5521816
   * action = 'on' or 'off'
   * type = event type (i.e. 'click')
   * element = the element to add the event
   * callback = function to execute when event is triggered
   * method = placeholder for the native method to call (internal use)
   */
  f = function(a, b, c, d, e) {
    e = {
      on: "addEventListener",
      off: "removeEventListener"
    }[a];
    try {
      c[e](b, d, !1);
    } catch (f) {
      e = {
        on: "attachEvent",
        off: "detachEvent"
      }[a], c[e](a + b, function() {
        d.apply(c, arguments);
      });
    }
  },

  /*
   * $ main method
   * a = css selector, dom object, or function
   * returns instance
   */
  this.$ = function(a) {
    return new $[c].i(a);
  }, // ki prototype
  d = {
    // default length
    length: 0,

    /*
     * init method (internal use)
     * a = selector, dom element or function
     */
    i: function(c) {
      b.push.apply(this, c && c.nodeType ? [c] : "" + c === c ? e(a.querySelectorAll(c)) : /^f/.test(typeof c) ? $(a).r(c) : null);
    },

    /*
     * ready method
     * Smallest DOMReady code, ever
     * http://www.dustindiaz.com/smallest-domready-ever
     * a = function to call when dom is ready
     * return this
     */
    r: function(b) {
      return /c/.test(a.readyState) ? b() : $(a).on("DOMContentLoaded", b), this;
    },

    /*
     * on method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    on: function(a, b) {
      return this.each(function() {
        f("on", a, this, b);
      });
    },

    /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    off: function(a, b) {
      return this.each(function() {
        f("off", a, this, b);
      });
    },

    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call each loop
     * (b = internal use)
     * return this
     */
    each: function(a, b, c, d) {
      for (b = this, c = 0, d = b.length; d > c; ++c) a.call(b[c], b[c], c, b);
      return b;
    },

    // for some reason is needed to get an array-like
    // representation instead of an object
    splice: b.splice
  }

  // set prototypes
  $[c] = d.i[c] = d;
}(document, [], "prototype");