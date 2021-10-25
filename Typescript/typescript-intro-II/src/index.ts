let nam: string = "Bhanu";
let age: number= 24;
let isFetching: boolean = true;
let numbers: number[] = [5,4,3,2,1];
let strings: Array<string>  = ['h','e','l','l','o'];
let tuple: [string, boolean] = ['bhanu', false];
enum position {
    User, SuperUser, Admin, SuperAdmin
}

function nums(x:number, y:number): number {
    let output:number = (x / y);
    return output;
}

function printHere(name: string): void {
    console.log(name);
}