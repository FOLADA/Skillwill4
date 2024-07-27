const people = [
    {name: 'Lasha', age: 30}, 
    {name: 'Saba', age: 20}
]

function sort(people) {
    return people.slice().sort((a, b) => a.age - b.age)
}

console.log(sort(people))