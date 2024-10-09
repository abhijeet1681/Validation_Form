function validation(){

    document.getElementById("fname_error").textContent= "";
    document.getElementById("lname_error").textContent= "";
    document.getElementById("contact_error").textContent= "";
    document.getElementById("gender_error").textContent= "";
    document.getElementById("email_error").textContent= "";
    document.getElementById("pass_error").textContent= "";
    document.getElementById("confirm_pass_error").textContent= "";

    let valid = true;

    let fname = document.getElementById("fname").value.trim();
    const fnamePattern = /^[a-zA-Z\s]+$/;
    if (fname == "" || !fnamePattern.test(fname))
    {
        document.getElementById("fname_error").textContent="Please Enter a Valid Name";
        valid = false;
    }

    let lname = document.getElementById("lname").value.trim();
    const lnamePattern = /^[a-zA-Z\s]+$/;
    if (lname == "" || !lnamePattern.test(lname))
    {
        document.getElementById("lname_error").textContent="Please Enter a Valid Name";
        valid = false;
    }

    let contact = document.getElementById('contact').value.trim();
    const contactPattern =/^\d{10}$/;
    
    if (contact == "" || !contactPattern.test(contact))
    {
        document.getElementById("contact_error").textContent="Please Enter a Valid Contact";
        valid = false;
    }  

    let gender = document.getElementById('gender').value.trim();
    if (gender == "")
    {
        document.getElementById("gender_error").textContent="Please Select a gender";
        valid = false;
    }  

    let email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "" || !emailPattern.test(email))
    {
        document.getElementById("email_error").textContent="Please Enter a Valid email";
        valid = false;
    }  

    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    const passwordPattern =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&*?])[a-zA-Z\d!@#$%&*?]{8,}$/;
    if (password == "" || !passwordPattern.test(password))
    {
        document.getElementById("pass_error").textContent="Password must be at least 8 characters, include an uppercase letter, a number, and a special character.";
        valid = false;
    }  
    if (password !== confirmPassword) 
    {
        document.getElementById("confirm_pass_error").textContent="Password doesn't match";
        valid = false;
    }

    if (valid == true)
    {
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("contact", contact);
        localStorage.setItem("email", email);
        localStorage.setItem("gender", gender);

        window.location.href="submit.html";

        return true;
    }
    else 
    {
        return false;
    }
    }