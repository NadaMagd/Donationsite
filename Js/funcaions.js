function IsUserName(value){
    let pattern=/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    return pattern.test(value);
}
function IsPassword(value){
    let pattern=/^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return pattern.test(value);
}
function IsEmail(value){
    let pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
}