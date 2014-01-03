/*
 * ki.js - jQuery-like API super-tiny JavaScript library
 * This version gives support for IE8+ and modern browsers
 * Copyright (c) 2012 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
!function (b, c, d, f, h, i) {

  /*
   * (internal use)
   * ie8 workaround to convert NodeList to an array
   * a = NodeList
   * b = placeholder for each node
   * c = index
   * d = empty array
   * returns array of dom nodes
   */
  h = function (a, b, c, d) {
    c = -1
    d = []
    while (b = a[++c]) d[c] = b
    return d
  }

  /*
   * (internal use)
   * Cross-browser super-type event handler https://gist.github.com/dciccale/5521816
   * action = 'on' or 'off'
   * type = event type (i.e. 'click')
   * element = the element to add the event
   * callback = function to execute when event is triggered
   * method = placeholder for the native method to call (internal use)
   */
  i = function (action, type, element, callback, method) {
    method = {on: 'addEventListener', off: 'removeEventListener'}[action]
    try {
      element[method](type, callback, false)
    } catch (e) {
      method = {on: 'attachEvent', off: 'detachEvent'}[action]
      element[method](action + type, function () { callback.apply(element, arguments) })
    }
  }


  /*
   * $ main method
   * a = css selector, dom object, or function
   * returns instance
   */
  this.$ = function (a) {
    return new $[d].i(a)
  }

  // ki prototype
  f = {
    // default length
    length: 0,

    /*
     * init method (internal use)
     * a = selector, dom element or function
     */
    i: function (a) {
      c.push.apply(this, a && a.nodeType ? [a] : "" + a === a ? h(b.querySelectorAll(a)) : /^f/.test(typeof a) ? $(b).r(a) : null)
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
        i('on', a, this, b)
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
        i('off', a, this, b)
      })
    },

    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call each loop
     * b = the this value for that function
     * (c,d,e = internal use)
     * return this
     */
    each: function (a, b, c, d, e) {
      for (c=this,d=0,e=c.length;d<e;++d) {
        a.call(b,c[d],d,c)
      }
      return c
    },

    // for some reason is needed to get an array-like
    // representation instead of an object
    splice: c.splice
  }

  // set prototypes
  $[d] = f.i[d] = f
}(document, [], 'prototype');
