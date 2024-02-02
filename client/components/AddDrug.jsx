import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function AddDrug() {
  const [formData, setData] = useState({
    name:'',
    strength: '',
    measurement: '',
    route:'',
    tier:'',
    alternatives:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...formData, [name]: value })
  }
  
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Submitted')
    try {
      const response = await fetch('http://localhost:3000/api/drug', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('fetch completed')
      if (response.ok) {
        navigate('/druglist')
      }
    }
    catch (error) {
      console.error('Error adding data: ', error)
    }
  }

  const handleCancel = (e) => {
    navigate('/druglist')
  }

  return(
    <div className='formContainer'>
      <h3 className='addDrugTitle'>Add a Drug</h3>
      <form onSubmit={handleSubmit} className='formItself'>
        <div className='innerForm'>
          <div>
            <label>Drug Name: </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          </div>
          <div>
            <label>Strength: </label>
            <input type="number" name="strength" value={formData.strength} onChange={handleChange}/>
          </div>
          <div>
            <label>Measurement: </label>
            <input type="text" name="measurement" value={formData.measurement} onChange={handleChange}/>
          </div>
          <div>
            <label>Route: </label>
            <input type="text" name="route" value={formData.route} onChange={handleChange}/>
          </div>
          <div>
            <label>Tier: </label>
            <input type="text" name="tier" value={formData.tier} onChange={handleChange}/>
          </div>
          <div>
            <label>Alternatives: </label>
            <input type="text" name="alternatives" value={formData.alternatives} onChange={handleChange}/>
          </div>
          <button type="submit" className="submitDrugBtn">Submit</button>
          <button type="button" className="cancelDrugBtn" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}



export default AddDrug;

// import React, { useState, useEffect } from 'react';
// import { Link, withRouter } from 'react-router-dom';

// const useInput = init => {
//   const [ value, setValue ] = useState(init);
//   const onChange = e => {
//     setValue(e.target.value);
//   }
//   return [ value, onChange ];
// }

// const AddDrug = props => {
//   const [ name, nameOnChange ] = useInput('');
//   const navigate = useNavigate();
//   const handleSubmit = e => {
//     e.preventDefault();
//     navigate('/')
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={nameOnChange} />
//       <button type="submit">Submit</button>
//       <Link to="/">Go back</Link>
//     </form>
//   )
// }

// export default AddDrug;