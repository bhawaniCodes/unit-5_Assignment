interface User{
    type:  string | "user",
    name: string,
    age: number,
    occupation: string,
}

function admin(user: User) {
    console.log('hello')
    console.log(typeof(user.type));
}

admin({name:"abhay", age:22, occupation:"learning", type:'hello'})