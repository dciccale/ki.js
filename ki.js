/*!
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2015 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
!function (b, c, d, e) {

  /*
   * init function (internal use)
   * a = selector, dom element or function
   */
  function i(a) {
    c.push.apply(this, a && a.nodeType ? [a] : '' + a === a ? b.querySelectorAll(a) : e)
  }

  /*
   * $ main function
   * a = css selector, dom object, or function
   * http://www.dustindiaz.com/smallest-domready-ever
   * returns instance or executes function on ready
   */
  $ = function (a) {
    return /^f/.test(typeof a) ? /c/.test(b.readyState) ? a() : $(b).on('DOMContentLoaded', a) : new i(a)
  }

  // set ki prototype
  $[d] = i[d] = $.fn = i.fn = {

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
        c.addEventListener(a, b)
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
        c.removeEventListener(a, b)
      })
    },

    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call on each iteration
     * b = the this value for that function
     */
    each: function (a, b) {
      c.forEach.call(this, a, b)
      return this
    },

    // for some reason is needed to get an array-like
    // representation instead of an object
    splice: c.splice
  }
}(document, [], 'prototype');
