import { useState } from 'react'
import './Form.css'

const Form = () => {
  const [state, setState] = useState({
    empName: " ",
    empDept: " ",
    empAddress:" ",
    empPhone:" ",
    empEmail:" ",
  });

  const handleInputChange = (e)=> {
    const {value} = e.target;
    setState((prev)=> ({
      ...prev, 
      [e.target.name]: value,
    })
    );
  };
    const  handleSubmit = async (e) =>  {
      e.preventDefault();

    try{
      const res = await fetch("http://localhost:8080/add/employee", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(state),
      });

      const data = res.json();
      console.log(data);

      if(res.ok){
       console.log('Api called successsfully..');
      }else{
        console.error('API called Failed..', res.status, res.statusText);
      }
    }catch (error){
      console.error('error adding employee', error);
    }
  };


  return (
    <div className="form-control">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-body">
            <label htmlFor='empName' >Employee Name</label>

            <input type="text" name="empName" value={state.name} onChange={handleInputChange} />

            <label htmlFor='empDept' >Employee Department</label>

            <input type="text" name='empDept'value={state.dept} onChange={handleInputChange}/>

            <label htmlFor='empAddress' >Employee Address</label>

            <input type="text" name='empAddress' value={state.address} onChange={handleInputChange}/>

            <label htmlFor='empPhone' >Phone</label>

            <input type="text" name='empPhone' value={state.phone} onChange={handleInputChange}/>

            <label htmlFor='empEmail' >Email</label>

            <input type="text" name='empEmail' value={state.email} onChange ={handleInputChange} />

        </div>
        <button type='Submit'>Submit</button>
      </form>
      </div>
  );
};

export default Form;
