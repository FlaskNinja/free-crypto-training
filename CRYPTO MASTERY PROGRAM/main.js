let id = [
    {
        name: 'Jane',
        age: 24,
        hubbies: ['sleeping', 'eating', 'coding']
    },
    {
        name: 'Peter',
        age: 34,
        hubbies: ['reading', 'sport', 'play']
    },
    {
        name: 'Triumph',
        age: 14, 
        hubbies: ['coding', 'solving maths', 'playing games']
    }
]

for (let i = 0; i < 3; i++) {
    const name =  id[i].name + " is " + id[i].age + " years old";
    const loveDoing = id[i].name + " loves " + id[i].hubbies + " "
    console.log(name)
    console.log(loveDoing)
}

function login(){
    alert("Proceeding to login")
}