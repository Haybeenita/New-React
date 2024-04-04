import { useEffect, useState } from "react";
import axios from "axios";

export const AxiosPageApi = () => {
  const [data, setData] = useState([]);
 

  useEffect(() =>{
    
  },[])



  const getData = () => {

    

    axios
      .get("https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=131gfsxKqzyOwrZIMw5cQ0ClhjbywTEx2mJ32Rwo1h_o&sheetName=Sheet1")
      .then((response) => {
        console.log(response.data.status);
        console.log(response.data.data);
        setData(response.data.data);
      })
      
  };


  return (
    <>
      <div>GETTING DATA FROM API DB (GET Request)</div>
      <button onClick={getData} className="btn bg-red-800">
        CLICK ME!
      </button>

      <div>
        {data.map((user)=>(
          <div
          className="flex justify-between m-4 bg-blue-900"
          key={user.idx}
          >
            <span>NAME:  {user.NAME}</span>
            <span>PHONE-NUMBER:  {user['PHONE NUMBER']}</span>
            <span>EMAIL-ADDRESS:  {user['EMAIL ADDRESS']}</span>
          </div>

        ))}
        
        
        
        
        
        
      </div>


    </>
  );
};




