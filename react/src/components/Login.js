import React from 'react';
import {NavLink} from 'react-router-dom';
const login=()=>{
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


  return (
  <>
	 <img class="wave" src="img/wave.jpg" alt="img"/>
	 <div class="container">
		 <div class="img">
			 <img src="img/login.svg" alt="image"/>
		 </div>
		 <div class="login-content">
			 <form action="index.html">
				 <img src="img/user.svg"/>
				 <h2 class="title">Welcome</h2>
				 <div class="input-div one">
					 <div class="i">
						 <i class="fas fa-user"></i>
					 </div>
					 <div class="div">
						 <h5>Username</h5>
						 <input type="text" class="form-control"/>
					 </div>
				 </div>
				 <div class="input-div pass">
					<div class="i">
						<i class="fas fa-lock"></i>
					</div>
					<div class="div">
						<h5>Password</h5>
						<input type="password" class="form-control"/>
					</div>
				</div>
				<NavLink to="/signup">Don't have account, Register Now</NavLink>
				<input type="submit" class="btn" value="Login"/>
			 </form>
		 </div>
	 </div>
  </>
   )}
export default login

