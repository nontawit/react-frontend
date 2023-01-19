import axios from 'axios';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import "./App.css";
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
    <div className='container'>
        {data.map((order, idx) => (
          <Card key={idx} className='card'>
            <CardContent className='cardContent'>
              <h2>{order.cus_name}</h2>
              ที่อยู่: {order.cus_address} <br/>
              เบอร์โทร: {order.cus_tel} <br/>
              จำนวน: {order.cus_unit} <br/>
            </CardContent>
            <Button variant="outlined">เสร็จสิ้น</Button>
          </Card>
        ))}
        
    </div>
  )
}

export default App;

