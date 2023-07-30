let users = [];
    let attempts = 0;
    let isDisabled = false;

    function showSigninForm() {
      document.getElementById("signup-form").style.display = "none";
      document.getElementById("signin-form").style.display = "block";
      return false;
    }

    function showSignupForm() {
      document.getElementById("signup-form").style.display = "block";
      document.getElementById("signin-form").style.display = "none";
      return false;
    }

    function signup() {
      if (isDisabled) {
        console.log("Password field is disabled due to 5 incorrect attempts. Please wait for 10 minute.");
        return;
      }

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      
      if (email && password) {
        // Store the user data (email and password) in the users array
        users.push({ email, password });
        alert("Sign Up successful! Please proceed to Sign In.");
        showSigninForm(); 
      } else {
        alert("Please provide both email and password.");
      }
    }

    function signin() {
      if (isDisabled) {
        console.log("Password field is disabled due to 5 incorrect attempts. Please wait for 10 minute.");
        return;
      }

      const email = document.getElementById("signin-email").value;
      const password = document.getElementById("signin-password").value;

      const user = users.find((user) => user.email === email);

      if (user && user.password === password) {
        alert("Login successful!");
      } else {
        attempts++;
        if (attempts === 5) {
          isDisabled = true;
          setTimeout(() => {
            isDisabled = false;
            attempts = 0;
          }, 600000); 
          console.log("5 incorrect attempts. Password field is disabled for 10 minute.");
          alert("5 incorrect attempts. Password field is disabled for 10 minute.")
        } else if (attempts >= 3) {
          alert("You have made 3 incorrect attempts. Please try after some time.");
        } else {
          alert("Invalid email or password. Please try again.");
        }
      }
    }