class Validaiton{
    validateRegister(data){
        var mail = /.*@.*\..*/;
        if(data.name===""){
            alert("Please Enter a User Name.");
        }
        if(!data.email.match(mail)){
            alert("Please enter a valid email.")
        }
        if(data.password.length<=6){
            alert("Please enter a Alpha numeric Password greater then 6.")
        }
    }
}
 
export default new Validaiton();