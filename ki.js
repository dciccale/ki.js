/*!
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2015 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
!function (b, c, d) {
  /*
   * $ main function
   * a = css selector, dom object, or function
   * http://www.dustindiaz.com/smallest-domready-ever
   * returns instance or executes function on ready
   */
  $ = function (a) {
    return this instanceof $
      ? c.push.apply(this, a && a.nodeType ? [a] : '' + a === a ? b.querySelectorAll(a) : d) // constructor
      : /^f/.test(typeof a) ? /c/.test(b.readyState) ? a() : $(b).on('DOMContentLoaded', a) : new $(a) // function
  };

  // set prototype to array to inherit array behavior
  $.prototype = $.fn = c

  // set ki prototype
  Object.assign($.fn, {
    /*
     * on method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    on(a, b) {
      return this.each(function (c) {
        c.addEventListener(a, b)
      })
    },

    /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    off(a, b) {
      return this.each(function (c) {
        c.removeEventListener(a, b)
      })
    },

    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call on each iteration
     * b = the this value for that function
     */
    each(a, b) {
      this.forEach(a, b)
      return this
    },
  })
}(document, []);
