import { useEffect, useState } from "react";
import { Table } from "./Table";
import getCustomers from "../services/getCustomers";

var clientList =[
    {
      id: 1,
      name:'Alberto',
      age: '21',
      location: 'Cali',
      gender: 'Male',
      income: '$102,000'
    },
    {
      id: 2,
      name:'Alberta',
      age: '35',
      location: 'Cali',
      gender: 'Female',
      income: '$150,000'
    },
    {
      id: 3,
      name:'Armando',
      age: '42',
      location: 'Los Angeles',
      gender: 'Male',
      income: '$300,000'
    },
    {
      id: 4,
      name:'Talia',
      age: '25',
      location: 'Florida',
      gender: 'Female',
      income: '$102,000'
    }
  ]

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
      client.age.includes(searchIt)||
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