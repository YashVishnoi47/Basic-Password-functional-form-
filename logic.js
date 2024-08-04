let eye = document.querySelector(".eye");
let pass = document.querySelector("#password");
let eyet = document.querySelector(".eyeee");
let lock = document.querySelector(".lock");
let done = document.querySelector(".done");
let entpass = document.querySelector(".ent-pass");
let donepass = document.querySelector(".done-pass");




console.log(eye)

pass.type == "password"




eye.addEventListener("click", ()=>{
    if(pass.type  == "password"){
        pass.type = "text"
        
        eyet.src  = "eye-close.svg"
    }

    else{
        pass.type = "password"
        
        eyet.src  = "eye-open.svg"
    }
});



pass.style.width == "0px"

lock.addEventListener("click",()=>{

    if(pass.style.width == "0px"){
        pass.style.width = "600px"  
    }

    else {
        pass.style.width = "0px"
    }
});


done.addEventListener("click", ()=>{


    if (pass.value != ""){
        pass.style.width = "0px"  
        pass.value = ""
        // alert("Done")
        donepass.style.color = "Green"
        entpass.style.color = "white"
        
    }


    else{
        pass.style.width = "600px"
        // alert("Enter Password!")
        entpass.style.color = "red"
        donepass.style.color = "white"

    }
});






