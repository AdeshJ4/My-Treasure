const user = {
    id: 101,
    fullName: 'Adesh',
    dob: '2001-06-22'
}
const propertyDescriptor = {
    value: user.dob,
    writable: false
}
Object.defineProperty(user, "dob", propertyDescriptor);
user.dob = '2001-07-23';
console.log(user);
