
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let arr = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
  
    if (acc === undefined) {
      acc = arr[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < arr.length; i++) {
      acc = callback(acc, arr[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            return collection[key];
          }
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            result.push(collection[key]);
          }
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  

  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    let newArr = array.slice();
    newArr.sort(function(a, b) {
      let aVal = callback(a);
      let bVal = callback(b);
      if (aVal > bVal) return 1;
      if (aVal < bVal) return -1;
      return 0;
    });
    return newArr;
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          newArr = newArr.concat(array[i]);
        } else {
          newArr.push(array[i]);
        }
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          myFlatten(array[i], false, newArr);
        } else {
          newArr.push(array[i]);
        }
      }
    }
    return newArr;
  }

  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  

module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    mySortBy,
    myFlatten,
    myKeys,
    myValues
};
  