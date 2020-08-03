var kittens = ["Milo", "Otis", "Garfield" ] //define your array here

// Add your functions and code here
function appendKitten(kitten){
  var newArray =[];
  newArray= kittens.concat(kitten);
return newArray;
}

function destructivelyAppendKitten(kitten){
  kittens.push(`${kitten}`);
}



function destructivelyPrependKitten(kitten){
  kittens.unshift(`${kitten}`);
}


function destructivelyRemoveLastKitten(kitten){
  kittens.pop(kitten);
}

function destructivelyRemoveFirstKitten(kitten){
  kittens.shift(kitten);
  }
  
  
  function prependKitten(kitten){
  var newArray= [kitten,...kittens];
return newArray;
  }
  
  
  
  function removeLastKitten(kitten){
   return kittens.slice(0, -1)
  }
  
  
  function removeFirstKitten(kitten){
    return kittens.slice(1)
  }