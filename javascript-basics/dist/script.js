// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
var done = false;
 let temp ;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }

  console.log(array);
  var first = array.pop();
  var second = array.pop();
  return second;
 
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
const count = {};
  var checklist = string.split("");
  for(let char of checklist){
    if(char in count){
      count[char]  += 1;
    }else{
      count[char] = 1;
    }
  }
count;
  
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflattenObject) {
 
    
    let flattenObject = {};
 
    
    for (const key in unflattenObject) {
 
        
        if ((typeof unflattenObject[key]) === 'object' || Array.isArray(unflattenObject[key])) {
            const temp = flatten(unflattenObject[key]);
            for (const j in temp) {
 
                
                flattenObject[key + '.' + j] = temp[j];
            }
        }
 
        
        else {
            flattenObject[key] = unflattenObject[key];
        }
    }
    return flattenObject;
};

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
var unflattenObject = {}
  for (var key in flatObject) {
    var subkeys = key.split('.')
    subkeys.reduce(function(r, e, j) {
      return r[e] || (r[e] = isNaN(Number(subkeys[j + 1])) ? (subkeys.length - 1 == j ? flatObject[key] : {}) : [])
    }, unflattenObject)
  }
  return unflattenObject;
}