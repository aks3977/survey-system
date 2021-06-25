import React from 'react';
import '../styling/FormDataList.css';

function FormDataList({name,email,subject,message}) {
    return (
        <div className="formdata_list">
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Email:  </strong>{email}</p>
            <p><strong>Subject: </strong>{subject}</p>
            <p><strong>Message: </strong>{message}</p>

        </div>
    )
}

export default FormDataList
