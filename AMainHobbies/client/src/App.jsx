import { useState } from 'react'

import Header from './assets/components/Header'

function App() {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "__cflb=0H28vgQRvpXTQ5165MqoGvinbugRAirw64J6Dy9Tj1E");
  
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
  };

    fetch(`https://www.amainhobbies.com/be/admin/Marketing/ProductData?apiKey=cceffceeb8d6ebd360673090535103d4&model=KYO34701T2`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('error', error));


  return (
    <>
      <Header />
    </>
  )
}

export default App
