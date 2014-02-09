/*!
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2014 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
! function (b, c, d, e, f, g) {

  // addEventListener support?
  f = b['add' + e];

  /*
   * init function (internal use)
   * a = selector, dom element or function
   */
  function i(a) {
    c.push.apply(this, a && a.nodeType ? [a] : '' + a === a ? c.slice.call(b.querySelectorAll(a)) : g);
  }

  /*
   * ready function (internal use)
   * Smallest DOMReady code, ever
   * http://www.dustindiaz.com/smallest-domready-ever
   * a = function to call when dom is ready
   * return this
   */
  function r(a) {
    /c/.test(b.readyState) ? a() : $(b).on('DOMContentLoaded', a);
  }

  /*
   * $ main function
   * a = css selector, dom object, or function
   * returns instance
   */
  $ = function (a) {
    return /^f/.test(typeof a) ? r(a) : new i(a);
  };

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
        f ? c['add' + e](a, b, false) : this.attachEvent('on' + a, b);
      });
    },

    /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    off: function (a, b) {
      return this.each(function (c) {
        f ? c['remove' + e](a, b) : this.detachEvent('on' + a, b);
      });
    },

    /*
     * each method
     * a = the function to call each loop
     * b = the this value for that function
     * return this
     */
    each: function (a, b) {
      for (var c=this, d=0, e=c.length; d<e; ++d) {
        a.call(b, c[d], d, c);
      }
      return c;
    },

    // for some reason is needed to get an array-like
    // representation instead of an object
    splice: c.splice
  };
}(document, [], 'prototype', 'EventListener');
