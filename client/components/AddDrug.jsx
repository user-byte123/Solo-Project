




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