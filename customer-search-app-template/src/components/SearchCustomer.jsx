import { useEffect, useState } from "react";
import { Table } from "./Table";
import getCustomers from "../services/getCustomers";

function SearchCustomer() {
    const [item, setItem] = useState ('')
    const [clients,setClients] = useState([])

    useEffect(()=>{
        getCustomers()
        .then(data => {
            console.log(data)
            setClients(data)})
    },[])
  
    const handleInputChange = (e) => { 
      const searchIt = e.target.value;
      setItem(searchIt)
      filterClients
    }

    const filterClients = (clientL,searchIt) => (clientL.filter((client) =>
      client.name.includes(searchIt)||
      client.age.toString().includes(searchIt)||
      client.location.includes(searchIt)||
      client.gender.includes(searchIt)||
      client.income.includes(searchIt)
))
  
    return (
      <>
        <div className='layout-row align-items-center justify-content-center mt-30'>
          <input type="text"
            className='large mx-20 w-20'
            placeholder='Enter search term (Eg: Phil)'
            value={item}
            onChange={handleInputChange}
             />
        </div>
        <Table client={filterClients(clients,item)}/>
      </>
    )
  }
  
  export default SearchCustomer