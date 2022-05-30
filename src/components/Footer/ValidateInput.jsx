export default function ValidateInput(values){
    let errors = {}
    if(!values.user_name.trim()){
        errors.user_name = "Username is required"
    }
    if(!values.user_email){
        errors.user_email = "Email is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)){
        errors.user_email = "Email address is invalid"

    }
    if(!values.message){
        errors.user_email = "Message  is required"
    }else if(errors.message.length < 5){
        errors.message = "Message should be between 5 to 100 characters"

    }
    return errors;


}