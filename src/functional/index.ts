//  from https://observablehq.com/@anjana/exercise-filter-map-reduce?collection=@anjana/functional-javascript-first-steps
//  frontend master function-first-steps


// Concatenate two arrays into a new single array
function concat(array1, array2) {
  return array1.concat(array2);
}

function lenght(array){returna array.length}

function head(array){return array[0])

// Return the rest of an array after the first item
function tail(array) {
  return array.slice(1);
}


export function filter(predicateFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
}


export function map(fn, array) {
   if(length(array)===0){ return []}

 return [fn(head(array))].concat(map(fn,tail(array)))
}

export function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) returninitialValue;
  const newInitialValue = reducerFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array));
}
