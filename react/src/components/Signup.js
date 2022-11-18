import React from 'react';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
const Signup=()=>{
   const inputs = document.querySelectorAll(".form-control");

 function AddClass(){
	 let parent = this.parentNode.parentNode;
	 parent.classList.add("focus");
 }

 function RemoveClass(){
	let parent = this.parentNode.parentNode;
	if(this.value === ''){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", AddClass);
	input.addEventListener("blur", RemoveClass);
});

  const [input, setInput] = useState({
    name:"",email:"",phone:"",profession:"",password:"",cpassword:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({...input, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, phone, profession, password, cpassword} = input;
    try {
        // alert("running")
        let res = await fetch("localhost:3000/register", {
          method: "POST",
		  headers:{
			"Content-Type" : "application/json"
		  },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            work:profession,
            password:password,
            cpassword:cpassword
          }),
        });
        let resJson = await res.json();
        // alert(resJson)
        if (res.status === 201) {
          setInput({
            name:"",email:"",phone:"",profession:"",password:"",cpassword:""
          })
          window.alert("user saved successfully");
          // setMessage("User created successfully");
        } else {
          // setMessage("Some error occured");
        }
    } catch (err) {
      console.log(err);
    }
    // alert(input);
  }

  return (
  <>
	 <img className="wave" src="img/wave.jpg" alt="imge"/>
	 <div className="container">
		 <div className="img">
			 <img src="img/login.svg" alt="imge"/>
		 </div>
		 <div className="login-content">
			 <form onSubmit={handleSubmit}>
				 <img src="img/user.svg" alt="imae"/>
				 <h2 className="title">Welcome</h2>
				 <div class="input-div one">
					 <div class="i">
						 <i class="fas fa-user"></i>
					 </div>
					 <div className="div">
						 <h5>Name</h5>
						 <input type="text" name="name" id="name" value={input.name || ""} onChange={handleChange} className="form-control"/>
					 </div>
				 </div>
         <div class="input-div one">
					 <div class="i">
						 <i class="fas fa-email"></i>
					 </div>
					 <div class="div">
						 <h5>Email</h5>
						 <input type="text" name="email" id="email" value={input.email || ""} onChange={handleChange} class="form-control"/>
					 </div>
				 </div>
         <div class="input-div one">
					 <div class="i">
						 <i class="fas fa-phone"></i>
					 </div>
					 <div class="div">
						 <h5>Phone No.</h5>
						 <input type="number" name="phone" id="phone" value={input.phone || ""} onChange={handleChange} class="form-control"/>
					 </div>
				 </div>
         <div class="input-div one">
					 <div class="i">
						 <i class="fas fa-"></i>
					 </div>
					 <div class="div">
						 <h5>Profession</h5>
						 <input type="text" name="profession" id="profession" value={input.profession || ""} onChange={handleChange} class="form-control"/>
					 </div>
				 </div>
         <div class="input-div one">
					 <div class="i">
						 <i class="fas fa-lock"></i>
					 </div>
					 <div class="div">
						 <h5>Password</h5>
						 <input type="password" name="password" id="password" value={input.password || ""} onChange={handleChange} class="form-control"/>
					 </div>
				 </div>
				 <div class="input-div pass">
					<div class="i">
						<i class="fas fa-lock"></i>
					</div>
					<div class="div">
						<h5>Confirm password</h5>
						<input type="password" name="cpassword" id="cpassword" value={input.cpassword || ""} onChange={handleChange} class="form-control"/>
					</div>
				</div>
				<NavLink to="/signup">Don't have account, Register Now</NavLink>
				<input type="submit" id="regbtn" class="btn" value="Login"/>
			 </form>
		 </div>
	 </div>
  </>
   )};
export default Signup;
