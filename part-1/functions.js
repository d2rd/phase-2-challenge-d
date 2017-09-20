// Show a weekday

  // Write a function weekday(date) to find the weekday for a given Date object, returning either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.
  function weekday(date) {

    if (!(date instanceof Date)) {
      throw new Error("This is not a valid input.")
    }

    let dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] //  Per requirements "Mon" is indexed as 0.

    let targetDate = date.getDay(); // Invokes 'getDay() method to extract numeric value of day from 'date' argument and stores it in 'targetDate'. 

    return dayOfWeek[targetDate] //Returns string representing weekday name from array 'dayOfWeek' corresponding to index value stored in 'targetDate'. Per requirements "Mon" is indexed as 0.

  }

//filterBetween
        // Write a function filterBetween(array, min, max) that takes an array of numbers, a min value, and a max value. It returns a new array containing only the elements that are greater than or equal to min and less than or equal to max.

    let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // source array.  ??? Should this be local to numsBetween()?  If so rename 1st argument in filterBetween() to avoid duplication.

    // let numsBetween = numArray.filter(numArray > minNum) &&  numArray.filter(numArray < maxNum);
    function filterBetween(numArray, minNum, maxNum) {  
      let numsBetween = numArray.filter(numArray >= minNum &&  numArray <= maxNum);
      return console.log(numsBetween)
    }

    filterBetween(numArray, 22, 79);

// snippet from text
        // use str.substr(start, [length])
        // Write a function snippet(string, maxlength) that shortens the string given to the maxlength and adds the ellipsis character ("…") to the end of string, and then returns the shortened string. If the string is shorter than the maxlength, just return the string unmodified.
    function snippet(string, maxlength) {
      snippedString = string.substr(0,maxlength) + "...";
       return console.log(snippedString);
    }


//Number of properties
        // Write a function numProps(obj) that returns the num of properties an object has. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

    let clients = {
        "id": 1,
        "rep_name": "Xymenes Dewer",
        "company": "Beahan, Swift and Hoppe",
        "no_employees": 742,
        "phone": "1-(863)994-6147",
        "city": "Lakeland",
        "state": "Florida",
        "created_at": "11/4/2003"
      };

    function numProps(obj){
      propCount = Object.keys(obj).length; // should be 8
      return console.log(propCount);  // should be 8
    }
    numProps(clients);  




module.exports = {weekday, filterBetween, snippet, numProps}