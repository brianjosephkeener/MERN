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

            const handlePassword = (e) => {
                if(e.length < 1){
                    setPasswordError("password is required");
                }
                else if(e.length < 2) {
                    setPasswordError("password must be 2 characters or longer")
                }
                else if(e != cpassword)
                {
                    setPasswordError("passwords must match");
                }
                else
                {
                    setPasswordError('');
                }
            }

            const twofFN = (e) => {
                setfirstName(e);
                handlefirstName(e);
            }
            const twofLN = (e) => {
                setlastName(e);
                handlelastName(e);
            }
            const twofE = (e) => {
                setEmail(e);
                handleEmail(e);
            }
            const twofP = (e, y) => {
                setPassword(e);
                handlePassword(e);
            }
    
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => twofFN(e.target.value) } />
            </div>
            {
                firstNameError ?
                    <p style={{color:"red"}}>{firstNameError}</p> : ''
            }
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => twofLN(e.target.value) } />
            </div>
            {
                lastNameError ?
                    <p style={{color:"red"}}>{lastNameError}</p> : ''
            }
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => twofE(e.target.value) } />
            </div>
            {
                emailError ?
                    <p style={{color:"red"}}>{emailError}</p> : ''
            }
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setCPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => twofP(e.target.value) } />
            </div>
            {
                passwordError ?
                    <p style={{color:"red"}}>{passwordError}</p> : ''
            }
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
