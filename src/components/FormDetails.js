import React,{useState} from 'react';
import FormDataList from './FormDataList';
import { selectFormData} from '../features/userSlice';
import { useSelector } from 'react-redux';


function FormDetails() {
    const formData = useSelector(selectFormData);
    const [searchData,setSearchData] = useState("");

    const handleInput=(e)=>{
        setSearchData(e.target.value);
      }

    return (
        <div className="form_details">
            <input type="search" placeholder="search" onChange={handleInput}/>
            {
              formData.filter((item)=>{
                if(searchData===""){
                  return item;
                }else if(item.item1.toLowerCase().includes(searchData.toLowerCase())){
                  return item;
                }
              })
              .map(item =>(
                <FormDataList
                name ={item.item1}
                email ={item.item2}
                subject = {item.item3}
                message = {item.item4}/>
              ))
            }

        </div>
    )
}

export default FormDetails
