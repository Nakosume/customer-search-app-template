export function Table(props) {
  const {client} = props  

  return (
    <div className='layout-column align-items-center justify-content-start'>
      <div className='card pt-30 pb-8 mt-20'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Gender</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody >
            {client.map((client)=>(
                <tr key={client.id}>
                <td scope="row">{client.name}</td>
                <td>{client.age}</td>
                <td>{client.location}</td>
                <td>{client.gender}</td>
                <td>{client.income}</td>
                </tr>              
            ))

            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table