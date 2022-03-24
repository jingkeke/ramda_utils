//  from https://observablehq.com/@anjana/exercise-filter-map-reduce?collection=@anjana/functional-javascript-first-steps
//  frontend master function-first-steps

//***************  map
// Concatenate two arrays into a new single array
function concat(array1, array2) {
  return array1.concat(array2);
}

function length(array) {
  return array.length;
}


function head(array) {
  return array[0];
}

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
  if (length(array) === 0) {
    return [];
  }

  return [fn(head(array))].concat(map(fn, tail(array)));
}

export function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reducerFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array));
}

/**************   imutation          ****************/

// array
// also refer  ArrayUtils.js
//
// instead of myArray[index] = value
function update(index, value, array) {
  //  return a new copy of the array with the given value at index

  return array
    .slic(0, index - 1)
    .concat(value)
    .concat(array.slice(index));
}

// instead of myArray.pop();
function pop(array) {
  //  return a new array with the last old element removed
  return array.slice(0, -1);
}







