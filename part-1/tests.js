var {expect} = require ('chai')
var { weekday, snippet, numProps, filterBetween }  = require('./functions')


describe('weekday()', function () {
  it('should return a function', function() {
    expect(weekday).to.be.a('function')
  })
  it('should return the weekday of a given date', function(){

    let targetDate = new Date(2017, 5, 15)

    expect(weekday(targetDate)).to.equal("Thu")
  })

  it('should throw an error if the date is not passed through', function(){
   expect(weekday).to.throw(Error)
  })
})





describe.only('capitalizeFourth()', function(){

  it('should return a function', function(){
    expect(capitalizeFourth).to.be.a('function')
  })

  it('should return a string where every 4th character is converted to uppercase and the rest, lowercase', function() {

  })
  let string = [3,4,5,6]

  it( "should throw an error if typeof string !== 'string'"), function (){
var myFunction = function() {return capitalizeFourth(89)}
    expect(myFunction).to.throw(Error('invalid input'))
  }


describe('getValues()', function () {
  it('should return a function', function() {
    expect(getValues).to.be.a('function')
  })

  it('should return the values of the properties in an object', function() {

  let person = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

    expect(getValues(person)).to.eql(['Dominique', 30, '555-555-5555'])
  })
  it('should throw an error if an object is not passed in', function(){
   expect(getValues).to.throw(Error)
  })
})

//
//
//
//
describe('filterAround()', function(){

  it('should return a function', function(){
    expect(filterAround).to.be.a('function')
  })

  it('returns a new array containing only the elements from the source array that come before lower alphabetically and after upper, function()', function(){
    let animals = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
     expect(filterAround(animals, 'chimp', 'lobster')).to.eql(['cat', 'zebra', 'ape'])
   })

  let animals = ("24", "dog")

  it('throws an error if an object is not passed through', function(){
     expect(filterAround).to.throw(Error)
   })
 })
