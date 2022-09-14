"use strict";

var foo = 5;

switch (foo) {
  case 2:
    console.log(2);
    break;
  // it encounters this break so will not continue into 'default:'

  default:
    console.log('default');
  // fall-through

  case 1:
    console.log('1');
}
//# sourceMappingURL=const foo 03.dev.js.map
