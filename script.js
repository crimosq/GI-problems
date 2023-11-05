//easy
function exercise(exerciseName) {
    console.log("Today's exercise: " + exerciseName);
  }
  exercise('Running')

//medium
  function sharePizza(sliceCount, peopleCount) {
    if (peopleCount === 0) {
      return "Nobody is here to eat pizza!";
    }
  
    let slicesPerPerson = sliceCount / peopleCount;
    let calcSlices;
  

    if (Number.isInteger(slicesPerPerson)) {
      calcSlices = slicesPerPerson.toString();
    } else {
      calcSlices = slicesPerPerson.toFixed(2);
    }
  
    return `Each person gets ${calcSlices} slices of pizza; from our ${sliceCount} slice pizza`;
  }
  console.log(sharePizza(8, 2));

  //hard

  function patient(name, ssn) {
    
    let PII = {
      name: name,
      ssn: ssn 
    };
  
    return {
      getName: function() {
        return PII.name;
      }
     
    };
  }
  

  var patient2 = patient("Mike", "704-442-1212");

console.log(patient2.names); 
console.log(patient2.ssn); 
console.log(patient2.getName());
console.log(patient2.getSSN); 