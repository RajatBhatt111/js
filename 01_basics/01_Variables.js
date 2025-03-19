const accountId = 866788
let accountEmail = "rajat111@gmail.com"
var accountPassword = "1234"
accountCity ="Bihar"

// accountId = 2 // not allowed
accountEmail = "rajat1@gmail.com"
accountPassword = "pasme1"
accountCity = "gopalganj"
let pinCode;
console.log(accountId);

/*
Prefer not to use var because of issue in block  scope and functionl  scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,pinCode])
