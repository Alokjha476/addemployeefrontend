import { useState } from 'react'
import './Form.css'

const Form = () => {

  const [employeeData , setEmployeeData] =useState({
    empName: '',
    empDept:'',
    empAddress: '',
    empPhone:'',
    empEmail:'',

  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setEmployeeData(
      {
      ...employeeData, 
        [name]: value,
    }
    );
  };

  async function handleAddEmployee (){
    try {
      const response = await fetch("http://localhost:8080/add/employee", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        // 'Content-type': "Accept",
      },

      body: JSON.stringify(employeeData),
      
      });
      const data = response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      } else{
        console.log('Employee Added Successfully');
      } 
    } catch (error) {
      console.error('error adding employee: ', error);
    }
  };

  return (
    <div className="form-control">
      <h2>Add Employee</h2>
      <form>
        <div className="form-body">
            <label >Employee Name</label>

            <input type="text" name="empName" value={employeeData.empName} onChange={handleInputChange} />

            <label >Employee Department</label>

            <input type="text" name='empDept'value={employeeData.empDept} onChange={handleInputChange}/>

            <label >Employee Address</label>

            <input type="text" name='empAddress' value={employeeData.empAddress} onChange={handleInputChange}/>

            <label >Phone</label>

            <input type="text" name='empPhone' value={employeeData.empPhone} onChange={handleInputChange}/>

            <label >Email</label>

            <input type="text" name='empEmail' value={employeeData.empEmail} onChange ={handleInputChange} />

        </div>
        <button type='Submit' onClick={handleAddEmployee}>Submit</button>
      </form>
      </div>
  );
};

export default Form;
