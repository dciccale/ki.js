# ki.js

ki.js is a super-tiny jQuery-like API JavaScript library (445 bytes | 282 gzipped)

### Browser support

[ki.js](https://github.com/dciccale/ki.js/blob/master/ki.js) version is supported by all modern browsers: IE9+, Chrome 6+, Safari 5+, Firefox 6+, Opera 11.5+.

*The minified and gzip size numbers mentioned above where measured without the header comments*

## Installation

With bower

```bash
$ bower install ki
```

..or clone the repo

```bash
$ git clone https://github.com/dciccale/ki.js.git
```

## Build

In order to run the build task you'll need [NodeJS](http://nodejs.org/) and [Grunt.js](http://gruntjs.com/).

After installing NodeJS, install grunt-cli:

Install grunt-cli:

```bash
$ npm install -g grunt-cli
```

Now that you have NodeJS and Grunt installed, clone the project by running:

```bash
$ git clone git://github.com/dciccale/ki.js.git
```

Install local dependencies inside ki.js directory:

```bash
$ cd ki.js && npm install
```

Now you can run the default task that will generate a `ki.min.js` file ready to use.

```bash
$ grunt
```

## What can I do with ki.js?

With ki.js you can do the basic stuff jQuery can, for example:

### DOM Ready?

```javascript
$(function () {
  // this will be executed when the dom is ready!
  alert("Hey the DOM is ready ;)");
});
```

**This was just ki.js, no jQuery**

### CSS Selectors

Use any CSS selector that exists to get elements from the DOM.

```javascript
$("p:nth-last-of-type(2)");
$("[attribute|=value]");
$("p:not(.note)");
$("p:empty");
```

[See a list of all CSS selectors](https://drafts.csswg.org/selectors-3/#selectors)

### Array manipulation

You can use ki.js objects like you would use normal arrays, including bracket notation, array methods and iterators

```javascript
$('p')[0]; // -> get the first element
$('p').map(e => e.textContent); // -> get text in all elements
for (const element of $('p')) { // iterators
  element.textContent = "Hello";
}
```

### Events

Yes, events with the known `.on()` and `.off()` methods

```html
<button>ki.js</button>
```

```javascript
$(function () {
  // ok now that the dom is ready i would like to add some events
  var alertMyName = function () {
    alert("My name is " + this.textContent); // will alert 'ki.js'
  };

  $("button").on("click", alertMyName);
  // to turn it off just use .off()
  //$('button').off('click', alertMyName);
});
```

You can add any JavaScript event even touch events for mobile, under the hood ki.js uses addEventListener, so feel free to use any valid [DOM event](https://developer.mozilla.org/en-US/docs/Web/Events).

### .each()

The `each()` method is also included in the core of ki.js for easy iteration on a DOM collection.

```javascript
$(function () {
  // get all p tags
  $("p").each(function (elem, i) {
    // change color to red
    elem.style.color = "red";

    // append the index to the text
    elem.textContent += i;
  });
});
```

### Keep the chain!

All ki.js methods are chainable, just like jQuery.

## Plugins?

Yeah, you can write plugins for ki.js if you want, fork the project, keep them super super xxs and I promise to merge them into the official repo.

### ki.extend

Check out a lot of already made extensions for ki.js here: [ki.extend.js](https://github.com/james2doyle/ki.extend.js) (thanks to [james2doyle](https://github.com/james2doyle))

### How to make plugins?

Just add your methods to the prototype of ki.js and you're done.
For example, let's add a `text()` method for setting or getting the text of an element, in the tiniest way I can think of:

```javascript
// minified is 106 bytes
$.fn.text = function (a) {
  return a === a + ""
    ? this.each(function (b) {
        b.textContent = a;
      })
    : this[0].textContent;
};
```

Now use the plugin just like the other methods:

```javascript
$(function () {
  // <p>hello</p>

  // get the text from the p tag
  console.log($("p").text()); // hello

  // set another text
  $("p").text("bye"); // bye
});
```

<hr>
<strong>Create your own plugin and let's make the tiniest JavaScript Library ever!
Remember to write byte-saving code, see this [useful resource for JavaScript byte-saving techniques](https://github.com/jed/140bytes/wiki/Byte-saving-techniques) written by 140byt.es community</strong>
<hr>

## Where can I use ki.js?

In every cool and modern browser.

## The Code

The code of ki.js was written for byte-saving, so I don't recommend using this script for a real application or website.
It was done for fun, and the funniest part is that it actually works :)

## License

See [LICENSE.txt](https://raw.github.com/dciccale/ki.js/master/LICENSE.txt)
