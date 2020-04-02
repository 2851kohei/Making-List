// jshint esversion6:
// Javascript data format

// console.log(module);

// module.exports.getDate = getDate;
//
// // function getDate() {
//
// var getDate = function(){

// module.exports = exports

exports.getDate = function(){

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);


};
