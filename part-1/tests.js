var {expect} = require ('chai')
var {weekday, filterBetween, snippet, numProps}  = require('./functions')


describe('weekday()', function () {
  it('should return a function', function() {
    expect(weekday).to.be.a('function')
  })
  it('should return the day of the week for a given date', function(){

    let targetDate = new Date(2017, 5, 15)

    expect(weekday(targetDate)).to.equal("Thu")
  })

  it('should throw an error if the date is not passed through', function(){
   expect(weekday).to.throw(Error)
  })
})


describe('filterBetween()', function(){

  it('should return a function', function(){
    expect(filterBetween).to.be.a('function')
  })

  it('returns a new array containing only the values between the values of min and max arguments, function()', function(){
    let animals = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
     expect(filterBetween(animals, 'chimp', 'lobster')).to.eql(['cat', 'zebra', 'ape'])
   })

  let animals = ("24", "dog")

  it('throws an error if an object is not passed through', function(){
     expect(filterBetween).to.throw(Error)
   })
 })
