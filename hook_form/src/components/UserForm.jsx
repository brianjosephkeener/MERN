import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    
    const createUser = (e) => {
        if(e.password != e.cpassword)
        {
            e.preventDefault();
            const newUser = { firstName, lastName, email, password, cpassword };
            console.log("Welcome", newUser);
        }
        else
        {
            console.log("passwords do not match try again")
        }
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setfirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setlastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
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
