import React,{useEffect,useState} from "react"
import Spinner from "../spinner/spinner"
import "./userTable.css";



const UserTable = ()=>{

   
    const[search,setSearch]=useState("");    
    const[data,setData]=useState([]);
    const[filteredData,setFilteredData]=useState(null);
    
    
        useEffect(()=>{
            fetch("http://localhost:9002/getAllUser",{
                method: "GET",
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data,"userData");
                setData(data.data);
                setFilteredData(data.data);
            });
        },[]);
    
       
    
    
    
        
    
    
        useEffect(()=>{
            const result = data.filter(searchedData=>{
                return searchedData.company.toLowerCase().match(search.toLowerCase());
            });
            setFilteredData(result);
    
        },[search]);
    




    return(


<div>
    {filteredData?
        <div className="fulltable">
     <div className="p-input-icon-right">


<div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              <i className="fa fa-search" />
              <input type="text" className="form-control form-input" placeholder="Search company..." value={search} onChange={(e)=> setSearch(e.target.value)} />
              <span className="left-pan"><i className="fa fa-microphone" /></span>
            </div>
          </div>
        </div>
      </div>




</div>
        <table>
<th>Name</th>
<th>Email</th>
<th>Company</th>
<th>Experience</th>
{
filteredData.map(item=>{
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.company}</td>
            <td>{item.experience}</td>
        </tr>
    )
})



}

        </table>
     </div> :
     <Spinner/>

    }
</div>
    
    )

}

export default UserTable