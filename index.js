function myEach(collection, callback)
{
if (Array.isArray(collection))
{collection.forEach (element => callback(element))}
else {
    for (const key in collection)
    {const value = collection[key];
        callback(value, key, collection)
      }}
return collection}

function myMap(collection, callback){
const newCollection = [];
if (Array.isArray(collection))
 {collection.forEach(element =>
          newCollection.push(callback(element))
          )}
else {
    for (const key in collection)
    {const element = collection[key];
    newCollection.push(callback(element))
      }}
return newCollection}


function myReduce(collection, callback, acc)
{    if (!Array.isArray(collection)) 
    
    collection = Object.values(collection)

    if (!acc) {
      acc = collection[0]
      collection = collection.slice(1)
    }

    for (let i=0; i < collection.length; i++){
      acc = callback(acc, collection[i], collection)
    }

    return acc
  }

  function myFind(collection, predicate) {
    if (!Array.isArray(collection)) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    }

    function myFilter(collection, predicate){
    let result = [];
    if (!Array.isArray(collection)) {
      collection = Object.values(collection);
    }
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  }


  function mySize(collection){
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);}
    return collection.length }

function myFirst(array, num){
    let n = !!num ? num : 1;
    let result = array.slice(0, n);
    return !!num ? result : result[0]
  }


  function myLast(array, num)
  {
    let n = !!num ? -num : -1;
    let result = array.slice(n);
    return !!num ? result : result[0];
  }

  function myKeys(object){
    let result = [];
    for (const key in object) {
      result.push(key);
    }
    return result;
  }

  function myValues(object){
  let result = []
  for (const key in object){
    result.push(key.value)
  }}
  