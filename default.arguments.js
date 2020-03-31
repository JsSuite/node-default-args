/**
 * 
 * @param {Function} func A function
 * @param {Object} obj An object which consists argument of the function
 * @returns {Function} new function which defaults object into the function
 */
function defaultArguments(func, obj) {
  if (typeof func != 'function') {
    console.error(`First argument is not a function`)
    return;
  }

  let funcString = func.toString();
  funcString = funcString.replace(/[/][/].*$/mg, '') // strip single-line comments
    .replace(/\s+/g, '') // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments

  if (funcString.includes('function')) { //normal function
    funcString = funcString.split('){')[0].replace(/^[^(]*[(]/, '')
  } else if (funcString.includes('=>{')) { //arrow function
    funcString = funcString.split(')=>{')[0].replace(/^[^(]*[(]/, '')
  }

  let args = funcString.split(',');
  var newFunc = Function(...args, `
  var args = ${JSON.stringify(args)};
  var thisFunc = ${func};
  var obj = ${JSON.stringify(obj)};
  var argList = [];
  for (var i=0;i < args.length;i++) {
    if (arguments[i]) {
      argList.push(arguments[i]);
    } else if (obj.hasOwnProperty(args[i])) {
      argList.push(obj[args[i]]);
    }
  }
  return thisFunc(...argList);`);

  return newFunc;
}

module.exports = defaultArguments;