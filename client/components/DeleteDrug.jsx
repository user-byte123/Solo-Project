import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

function DeleteDrug(props){
    const { id } = useParams();
    const navigate = useNavigate();
    const handleConfirm = async (e) => {
        await fetch(`http://localhost:3000/api/drug/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        })
        navigate('/druglist');
    } 

    const handleCancel = (e) => {
        navigate('/druglist')
    }
    return (
        <div className='deletePage'>
            <h1>Are you sure you want to delete?</h1>
            <button className="confirmBtn" onClick={handleConfirm}>Confirm</button>
            <button className="cancelBtn" onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default DeleteDrug;