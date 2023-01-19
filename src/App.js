import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get('https://api-vdnk.onrender.com/api')
      .then((data) => setData(data.data));
  }, []);

  console.log(data);

  if(!data){
    return <p>Loading...</p>
  }

  return (
    <div>
      <ul>
        {data.map((val, idx) => (
          <li key={idx}>
            ชื่อลูกค้า: {val.cus_name} <br/>
            ที่อยู่: {val.cus_address} <br/>
            เบอร์โทร: {val.cus_tel} <br/>
            จำนวน: {val.cus_unit} <br/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;

