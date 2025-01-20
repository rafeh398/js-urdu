//********* Java Script execution context*/
// when code is given then
//firstly: global Ec  (eval EC for mongoose) = THIS
// secondly : function EC



//*****phases to run code in js */
//1st phase : Memory creation phase : variable ko memory allocate ki jati..
// un mein value undefined rkhi jati
// function ki definition load hoti

//2nd phase: Execution phase : operation perform hoty

// during execution ap k code mein koi function a jata 
// ik box bnta function ka us mein memory phase b bnta or execution phase b ye nesting system huh jata


//********call stack in jS*/ 
// definition :  It is a mechanism that keeps track of the execution context of functions in a program.
// if one function one() mein functiontwo() ko call kiya jaye to
//  2 pele nikala jayega stack se or phr one ko nikala jayega
// LIFO = last in first out