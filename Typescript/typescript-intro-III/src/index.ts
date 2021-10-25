interface obj {
    title: string,
    status: boolean,
    id: number
}
interface name { firstname: string, lastname? : string }


function getName({ firstname,lastname}: name): string {
    return lastname ? firstname + " " + lastname : firstname;
}
getName({ firstname: 'Bhanu'})

interface address {
    houseNumber:string,
    street:string,
    city:string,
    state:string,
    postalCode:number,
    country:string,
}

interface PersonDetails {
    Prefix? : string,
    phones: number[],
    addresses : string[],
    email? : string,
    firstname: string,
    lastname: string,
    middlename? : string,
}

function PhoneBook(PersonDetails: PersonDetails) {
    let persons = [];
    let detail: Record<string, string | number | Array<string> | number[] > = {
    Prefix : PersonDetails.Prefix,
    phones: PersonDetails.phones,
    addresses : PersonDetails.addresses,
    email : PersonDetails.email,
    firstname: PersonDetails.firstname,
    lastname: PersonDetails.lastname,
    middlename : PersonDetails.middlename,
    }
    persons.push(detail)
}