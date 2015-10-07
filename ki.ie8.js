/*!
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2015 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
!function (b, c, d, e, f) {

  // addEventListener support?
  f = b['add' + e]

  /*
   * init function (internal use)
   * a = selector, dom element or function
   * d = placeholder for matched elements
   * i = placeholder for length of matched elements
   */
  function i(a, d, i) {
    for(d = (a && a.nodeType ? [a] : '' + a === a ? b.querySelectorAll(a) : c), i = d.length; i--; c.unshift.call(this, d[i]));
  }

  /*
   * $ main function
   * a = css selector, dom object, or function
   * http://www.dustindiaz.com/smallest-domready-ever
   * returns instance or executes function on ready
   */
  $ = function (a) {
    return /^f/.test(typeof a) ? /in/.test(b.readyState) ? setTimeout('$('+a+')', 9) : a() : new i(a)
  }

  // set ki prototype
  $[d] = i[d] = {

    // default length
    length: 0,

    /*
     * on method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    on: function (a, b) {
      return this.each(function (c) {
        f ? c['add' + e](a, b, false) : c.attachEvent('on' + a, b)
      })
    },

    /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    off: function (a, b) {
      return this.each(function (c) {
        f ? c['remove' + e](a, b) : c.detachEvent('on' + a, b)
      })
    },

    /*
     * each method
     * a = the function to call on each iteration
     * b = the this value for that function (the current iterated native dom element by default)
     * return this
     */
    each: function (a, b) {
      for (var c = this, d = 0, e = c.length; d < e; ++d) {
        a.call(b || c[d], c[d], d, c)
      }
      return c
    },

    // for some reason is needed to get an array-like
    // representation instead of an object
    splice: c.splice
  }
}(document, [], 'prototype', 'EventListener');
