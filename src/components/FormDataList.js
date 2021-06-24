import React from 'react';
import '../styling/FormDataList.css';

function FormDataList({name,email,subject,message}) {
    return (
        <div className="formdata_list">
            <p>{name}</p>
            <p>{email}</p>
            <p>{subject}</p>
            <p>{message}</p>

        </div>
    )
}

export default FormDataList
