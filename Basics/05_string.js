const name="mohit"
const repocount=50
//console.log(name + repocount +" Value")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String('Mohit-ch-com')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,6)
console.log(anotherString);
const newstringone="   Mohit  "
console.log(newstringone);
console.log(newstringone.trim());

const url="https://mohit.com/mohit@3singh"
console.log(url.replace('@3','-'))
console.log(url.includes('.com'))
console.log(url.split('s'))


