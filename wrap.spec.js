const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns error message if the function is not passed a string', () => {
    expect(wrap(5, 10)).to.equal('Line input must be a string.');
  });
  it('Returns a string', () => {
    expect(typeof wrap('Hello!', 4)).to.equal('string');
  });
});

/*we want to check that function is ..
    returning a string
    in which each line isn't longer than the column number
    that the length of the string itself hasn't been changed
*/

/*possible cases
  function isn't returning a string
  function is passed an input that isn't a string
  function returns a string but it isn't the same string that it was passed
  function returns a string but at least one line of that string is too long,
      aka its length is > than column's max
  function gets a string that is less than column length to begin with
  column length is 1
  column length is 0
  string length is 0
*/
