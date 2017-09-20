var {expect} = require ('chai')
var {weekday, filterBetween, snippet, numProps}  = require('./functions')


describe('weekday()', function(){
  it('should return the day of the week for a given date', function(){
    let targetDate = new Date(1971, 6, 5)
    expect(weekday(targetDate)).to.equal("Sat")
  })

  let weekday = ("2011, 19, 22")
  it('should throw an error if date is not passed through', function(){
   expect(weekday).to.throw(new Error('invalid date'))
  })
})


describe('filterBetween()', function(){
  it('returns a new array (`numArray`) containing only the values between the values of min and max arguments.', function(){
    let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    function filterBetween(numArray, minNum, maxNum) {  
      let numsBetween = numArray.filter(numArray >= minNum &&  numArray <= maxNum);
      return console.log(numsBetween)
    }
     expect(filterBetween(numArray, 22, 79)).to.eql([30, 40, 50, 70])
   })

  let numArray = ("10", "eagle")

  it('throws an error if an object is not passed through', function(){
     expect(filterBetween).to.throw(new Error('invalid input'))
   })
 })

describe('snippet()', function(){
  it('shortens the string given to the maxLength and adds the ellipsis character ("…") to the end of string, and then returns the shortened string.', function snippet(string, maxLength) {
     var string = 'Goodness is about character - integrity, honesty, kindness, generosity, moral courage, and the like. More than anything else, it is about how we treat other people.';

      snippedString = string.substr(0,maxLength) + "...";
      return console.log(snippedString);
    })

  let snippet = ("this is the string", fish)
  it('should throw an error if maxLength is not passed through', function(){
   expect(snippet).to.throw(new Error('invalid input'))
  })
})

describe('numProps()'), function(){
  it('returns the num of properties an object has. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.', function numProps(obj){
      let clients = {"id": 1, "rep_name": "Xymenes Dewer", "company": "Beahan, Swift and Hoppe", "no_employees": 742,
        "phone": "1-(863)994-6147", "city": "Lakeland", "state": "Florida", "created_at": "11/4/2003"
      };

    function numProps(obj){
      propCount = Object.keys(obj).length; 
      return console.log(propCount);
      });

  let numProps = ("this is the string", fish)
  it('should throw an error if maxLength is not passed through', function(){
   expect(numProps).to.throw(new Error('invalid input'))
  }) 
  }
  


