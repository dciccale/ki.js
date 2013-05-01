/*
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2012 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
!function (b, c, d, f, h) {

  /*
   * $ main method
   * a = css selector, dom object, or function
   * returns instance
   */
  this.$ = function (a) {
    return new $[d].i(a)
  };

  // ki prototype
  h = {
    // default length
    length: 0,

    /*
     * init method (internal use)
     * a = selector, dom element or function
     */
    i: function (a) {
      c.push.apply(this, a && a.nodeType ? [a] : "" + a === a ? c.slice.call(b.querySelectorAll(a)) : /^f/.test(typeof a) ? $(b).r(a) : null)
    },

    /*
     * ready method
     * Smallest DOMReady code, ever
     * http://www.dustindiaz.com/smallest-domready-ever
     * a = function to call when dom is ready
     * return this
     */
    r: function (a) {
      /c/.test(b.readyState) ? a() : $(b).on('DOMContentLoaded', a)
      return this
    },

    /*
     * on method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    on: function (a, b) {
      return this.each(function (c) {
        c["add" + f](a, b)
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
        c["remove" + f](a, b)
      })
    },

    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call each loop
     * (b = internal use)
     * return this
     */
    each: function (a, b) {
      c.forEach.call(b = this, a)
      return b
    },

    // for some reason is needed to get an array-like
    // representation instead of an object
    splice: c.splice
  };

  // set prototypes
  $[d] = h.i[d] = h
}(document, [], 'prototype', 'EventListener');
