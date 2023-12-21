import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
function UpdateDrug() {
    const { id } = useParams();
    const navigate = useNavigate();
    //the initialState of updateData is an object b/c the fetch response returns an object
    const [updatedData, setData] = useState({});
    //want the data to already be loaded when we clicked the update button
    useEffect(()=> {
        fetch(`http://localhost:3000/api/drug/${id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(console.error)
        // async() => {
        //  try {
        //     const data = await fetch(`http://localhost:3000/api/drug/${id}`);
        //     data = await response.json();
        //     setData(data);
        //  }catch(error) {
        //     console.error('Error in useEffect in UpdateDrug component')
        //  }      
        // }
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setData({...updatedData, [name]:value})
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:3000/api/drug/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
            navigate('/druglist')
        } catch(error){
            console.log('Error occurred in handleUpdate event listener')
        }
    }

    const handleCancel = () => {
        navigate('/druglist')
    }
    return(
         <div className='UpdateDrug'>
            <h1>Update Info About {updatedData.name}</h1>
            <div className="info">
                <form className='updateForm'>
                        <div>
                            <input type="text" name="name" value={updatedData.name} onChange={handleChange}/>
                            <input type="text" name="strength" value={updatedData.strength} onChange={handleChange}/>
                            <input type="text" name="measurement" value={updatedData.measurement} onChange={handleChange}/>
                            <input type="text" name="route" value={updatedData.route} onChange={handleChange}/>
                            <input type="text" name="tier" value={updatedData.tier} onChange={handleChange}/>
                            <input type="text" name="alternatives" value={updatedData.alternatives} onChange={handleChange}/>
                        </div>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleCancel}>Cancel</button>
                </form>
            </div>
         </div>
    )
}

export default UpdateDrug