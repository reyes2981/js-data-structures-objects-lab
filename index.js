// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver };
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(newDriver, key, value) {
    newDriver[key] = value;
    return newDriver;
  } 

function deleteFromDriverByKey(driver, key) {
    const newDriver = { ...driver };
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}