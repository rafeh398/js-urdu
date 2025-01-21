
coding=["js","css","python"]

 const values=coding.forEach(function(item) {        
    return item
    
    
});
console.log(values);  //output is undefined
//foreach does not return anything

 const mynum=[1,2,3,4,5,6,7,8,9,10]
const filtered= mynum.filter((num)=> num>5)  //filter    //num in arrow indicates each object in array
console.log(filtered);  //output is 6,7,8,9,10


const mynum2=[1,2,3,4,5,6,7,8,9,10]
const filtered2= mynum.filter((num)=> {
  return  num>5
 })  // use curly braces then write return in arrow
console.log(filtered2);  // output is 6,7,8,9,10


//************exercise for filter*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbook=books.filter((bk)=>bk.genre==="History")  //bk indicates each object and
  //  we are writing it without curlybraces
console.log(userbook);  //output is histroy books





