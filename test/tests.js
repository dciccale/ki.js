(function () {

  'use strict';

  var $ps = $('p');
  var $btn = $('button');
  var btn = document.getElementById('btn');

  var clicked = 0;
  var onClick = function () {
    clicked++;
  };

  $btn.on('click', onClick);

  test('query the dom', 1, function () {
    ok($ps.length === 2);
  });

  test('fail silently for unmatched elements', 2, function () {
    ok($(null).length === 0);
    ok($('asd').length === 0);
  });

  test('wrap a DOM element with $', 1, function () {

    ok($(btn) instanceof $);
  });

  test('ready method', 1, function () {
    $(function() {
      ok(true === true);
    });
  });

  test('on method', 2, function () {
    btn.click();
    ok(clicked === 1);

    btn.click();
    ok(clicked === 2);
  });

  test('off method', 1, function () {
    $btn.off('click', onClick);
    btn.click();
    ok(clicked === 2);
  });

  test('iterate through all matched elements', 2, function () {
    $ps.each(function (p, i) {
      ok(p === $ps[i]);
    });
  });

  test('allow chaining', 1, function () {
    var noop = function(){};
    ok($ps.each(noop).on('click', noop).off('click', noop) === $ps);
  });
}());
