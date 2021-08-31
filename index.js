const employee = {
    name: "Jon",
    streetAddress: "Pole Street",
};

function updateEmployeeWithKeyAndValue(object, key, value){
    let newObject = {...object}
    newObject[key] = value

    return newObject
    
    
    
}

function  destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){

    object[key] = value 
    return object
}

function deleteFromEmployeeByKey(object, key){

  let newObject = {...object}
  delete newObject[key]
    return newObject

}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}