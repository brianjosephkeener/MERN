import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cpassword, setCPassword] = useState("");
    
    const createUser = (e) => {
            e.preventDefault();
            const newUser = { firstName, lastName, email, password, cpassword };
            handlefirstName(newUser.firstName);
            handlelastName(newUser.lastName);
            handleEmail(newUser.email);
            handlelastName(newUser.lastName);
            handlePassword(newUser.password, newUser.cpassword)
            console.log("test")
        }

            const handlefirstName = (e) => {
                if(e.length < 1){
                    setfirstNameError("First Name is required");
                }
                else if(e.length < 2) {
                    setfirstNameError("First Name must be 2 characters or longer")
                }
                else
                {
                    setfirstNameError('');
                }
            }
        
            const handlelastName = (e) => {
                if(e.length < 1){
                    setlastNameError("Last Name is required");
                }
                else if(e.length < 2) {
                    setlastNameError("Last Name must be 2 characters or longer")
                }
                else 
                {
                    setlastNameError('');
                }
            }
            
            const handleEmail = (e) => {
                if(e.length < 1){
                    setemailError("Email is required");
                }
                else if(e.length < 5) {
                    setemailError("Email must be 5 characters or longer")
                }
                else
                {
                    setemailError('');
                } 
            }

            const handlePassword = (e, y) => {
                if(e.length < 1){
                    setPasswordError("password is required");
                }
                else if(e.length < 2) {
                    setPasswordError("password must be 2 characters or longer")
                }
                else if(e != y)
                {
                    setPasswordError("passwords must match");
                }
                else
                {
                    setPasswordError('');
                }
            }
    
    
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
            </div>
            {
                firstNameError ?
                    <p style={{color:"red"}}>{firstNameError}</p> : ''
            }
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setlastName(e.target.value) } />
            </div>
            {
                lastNameError ?
                    <p style={{color:"red"}}>{lastNameError}</p> : ''
            }
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {
                emailError ?
                    <p style={{color:"red"}}>{emailError}</p> : ''
            }
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {
                passwordError ?
                    <p style={{color:"red"}}>{passwordError}</p> : ''
            }
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setCPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            <h1>Your Form Data</h1>
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
            <h2>Email: {email} </h2>
            <h2>Password: {password} </h2>
            <h2>Confirm Password: {cpassword} </h2>
        </form>
    );
};
    
export default UserForm;
