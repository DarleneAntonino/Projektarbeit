function check(){
    var inp_email = document.getElementById('email')
    var inp_content = document.getElementById('content')

    var div_error = document.getElementById("error_div")
    var p_error = document.getElementById("error_msg")
    
    reset(inp_email, inp_content, div_error, p_error)
    
    var empty_email = isEmpty(inp_email)
    var empty_content = isEmpty(inp_content)

    if(empty_email){
        div_error.classList.add("error")
        inp_email.classList.add("error")

        inp_email.focus()

        p_error.innerHTML = "The Email is required\n\n"
    }
    if(empty_content){
        div_error.classList.add("error")
        inp_content.classList.add("error")

        div_error.focus()

        p_error.innerHTML = "The content is required"
    }

    if(empty_email && empty_content){
        p_error.innerHTML = "The Email is required<br>The content is required"
    }
}

function isEmpty(field){
    if(field.value.length == 0){
        return true
    }
    return false
}

function reset(in1, in2, div, p){
    in1.classList.remove("error")
    in2.classList.remove("error")
    div.classList.remove("error")

    p.innerHTML = ""
}