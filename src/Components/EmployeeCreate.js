import React, { useState } from 'react';
import Notification from './Notification';

const EmployeeCreate = ({ onLinkClick }) => {  
    const [formData, setFormData] = useState({
        fulname: '',
        email: '',
        phone: '',
        ApiUser: 'umair',
        token: 'umair@132',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const apiUrl = 'http://localhost:8080/laravel-projects/reactapi/public/api/createEmployee';
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.json())
          .then(data => {
                Notification(data.status,"success",3000);
          })
          .catch(error => {
                Notification("Error sending form data:","error",3000);
          });
      };
    return (
    <div>
        <div className="container w-75 mx-auto border border-2 mt-5 p-5 rounded">
            <form onSubmit={handleSubmit} className='text-start'>
                <div className="mb-3">
                    <h3 className='text-center'>Create Employee</h3>
                </div>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="fullname" className="form-control" onChange={handleChange} value={formData.fullname} placeholder="John Doe" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" onChange={handleChange} value={formData.phone} placeholder="03101234567" />
                </div>
                <div className="mb-3">
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmployeeCreate;