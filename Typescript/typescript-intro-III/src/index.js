function getName(_a) {
    var firstname = _a.firstname, lastname = _a.lastname;
    return lastname ? firstname + " " + lastname : firstname;
}
getName({ firstname: 'Bhanu' });
function PhoneBook(PersonDetails) {
    var persons = [];
    var detail = {
        Prefix: PersonDetails.Prefix,
        phones: PersonDetails.phones,
        addresses: PersonDetails.addresses,
        email: PersonDetails.email,
        firstname: PersonDetails.firstname,
        lastname: PersonDetails.lastname,
        middlename: PersonDetails.middlename
    };
    persons.push(detail);
}
