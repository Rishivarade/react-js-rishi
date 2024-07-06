
import React, { useState } from 'react';
const initialstate = {
    name: "",
    email: "",
    pass: "",
    grade:""
}

const StudentForm = () => {
    const [formdata, setformdata] = useState(initialstate)
    const { name, email, pass, grade } = formdata
    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formdata)
         setformdata(initialstate);
    }
    return (

        <div className="div" style={{border:"2px solid black",padding:"10px",backgroundColor:"lightblue"}}>
            <h1 style={{color:"white"}}>Student Data</h1>
            <form onSubmit={(e) => handlesubmit(e)} style={{margin: "auto"}}>
                <input type="text" name='name' value={name} onChange={(e) => handlechange(e)} placeholder='Enter Full Name' /><br />
                <input type="email" name='email' value={email} onChange={(e) => handlechange(e)} placeholder='Enter Email Address' /><br />
                <input type="password" name='pass' value={pass} onChange={(e) => handlechange(e)} placeholder='Enter Password' /><br />
                <select name="grade" value={grade} onChange={(e) => handlechange(e)} id="">
                    <option value="">Select Your Grade</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select><br />
               Male:<input type="radio" name='gender'  value={"male"} onChange={(e) => handlechange(e)} />
               Female:<input type="radio" name='gender'  value={"female"} onChange={(e) => handlechange(e)} />
               Other:<input type="radio" name='gender'  value={"other"} onChange={(e) => handlechange(e)} /><br/>
                <input type="submit" />
            </form>
        </div>
            
        

    )
}

export default StudentForm;
