let userArray = process.argv.slice(2);
let userObj = {};
[, userObj.username, userObj.email] = userArray //destruttura userArray e salva nell'array


console.log(userObj);