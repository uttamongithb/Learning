let person = {
    Name : "Uttam",
    Age : 25,
    City : "Dharamshala"
}

person.isStudent = true;

delete person.City;

for(let key in person){
    console.log(person[key])
}