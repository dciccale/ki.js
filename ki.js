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
    c.push.apply(this, a && a.nodeType ? [a] : a && Array.isArray(a) ? a : '' + a === a ? ( /^<[^\0]+>$/.test(a) ? [b.createElement(a.replace(/^<(\w+)\s*?\/?>[^\n\r\S]*(?:$|<\/\1>)/, '$1'))] : b.querySelectorAll(a) ) : [b.createDocumentFragment()]);
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
  $[d] = i[d] = $.fn = i.fn = Object.create(Array.prototype, {

    /*
     * on method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    on: {value: function (a, b) {
      return this.each(function (c) {
        c.addEventListener(a, b)
      })
    }},

    /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    off: {value: function (a, b) {
      return this.each(function (c) {
        c.removeEventListener(a, b)
      })
    }},

    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call on each iteration
     * b = the this value for that function
     */
    each: {value: function (a, b) {
      c.forEach.call(this, a, b)
      return this
    }},
  }
}(document, [], 'prototype');
