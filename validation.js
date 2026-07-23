const namePattern =
/^(?=.{2,50}$)[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;


const passwordPattern = /^[A-Za-z0-9]{6,}$/;

function validateUsername(username){

    return namePattern.test(username);

}


function validatePassword(password){

    return passwordPattern.test(password);

}



module.exports = {

    validateUsername,
    validatePassword

};