QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
  });

  QUnit.test('Testing LengthConverter function with positive number sets of inputs', function (assert) {

    assert.equal(LengthConverter(5),0.41665,'Tested with small positive number 5');
    assert.equal(LengthConverter(0),0,'Tested with zero number ');
    assert.equal(LengthConverter(555),46.24815,'Tested with large positive number 555');
});

QUnit.test('Testing LengthConverter function with negitive number sets of inputs', function (assert) {

    assert.equal(LengthConverter(-5),0,'Tested with small -ve number -5');
    assert.equal(LengthConverter(-1),0,'Tested with small -ve number -1');
    assert.equal(LengthConverter(-555),0,'Tested with large -ve number -555');
});

QUnit.test('Testing LengthConverter function with floating point number sets of inputs', function (assert) {

    assert.equal(LengthConverter(5.67),0.4724811,'Tested with small floating point number 5.67');
    assert.equal(LengthConverter(1.0),0.08333,'Tested with small floating point number 1.0');
    assert.equal(LengthConverter(555.55555),46.2944439815,'Tested with large floting number 555.555');
});

QUnit.test('Testing LengthConverter function with negitive floating point number sets of inputs', function (assert) {

    assert.equal(LengthConverter(-5.67),0,'Tested with small -ve floating point number -5.67');
    assert.equal(LengthConverter(-1.0),0,'Tested with small -ve floating point number -1.0');
    assert.equal(LengthConverter(-555.55555),0,'Tested with -ve large floting number -555.555');
});

QUnit.test('Testing LengthConverter function with String', function (assert) {

    assert.throws(function () { LengthConverter('a'); }, /The given argument is not a number/, 'Passing in a string correctly rLengthConverterses an Error');
});

QUnit.test('Testing LengthConverter function with No Arguments', function (assert) {

    assert.throws(function () { LengthConverter(); }, /The given argument is not a number/, 'no Argument method check');
});
