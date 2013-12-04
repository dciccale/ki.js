/*!
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2013 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
!function(a, b, c, d, e) {
    /*
   * $ main method
   * a = css selector, dom object, or function
   * returns instance
   */
    this.$ = function(a) {
        return new $[c].i(a);
    }, // ki prototype
    e = {
        // default length
        length: 0,
        /*
     * init method (internal use)
     * a = selector, dom element or function
     */
        i: function(c) {
            b.push.apply(this, c && c.nodeType ? [ c ] : "" + c === c ? b.slice.call(a.querySelectorAll(c)) : /^f/.test(typeof c) ? $(a).r(c) : null);
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
            return this.each(function(c) {
                c["add" + d](a, b);
            });
        },
        /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
        off: function(a, b) {
            return this.each(function(c) {
                c["remove" + d](a, b);
            });
        },
        /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call each loop
     * (b = internal use)
     * return this
     */
        each: function(a, c) {
            return b.forEach.call(c = this, a), c;
        },
        // for some reason is needed to get an array-like
        // representation instead of an object
        splice: b.splice
    }, // set prototypes
    $[c] = e.i[c] = e;
}(document, [], "prototype", "EventListener");