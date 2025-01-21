//forIn=  this works for object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// for in for array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}  

//in for of u get direct value by writing key


//in for in u get keys by just writing key so u have to wright programming[key]
// forin not applicable on map because map is not iterateable