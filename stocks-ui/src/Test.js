import {React, useState} from "react";
import {serverUrl} from './constants/resource.js'



function Test() {
  let [message, setMessage] = useState('Connection Not established')

  const test = () => {
    console.log(serverUrl)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    fetch(serverUrl + "/health", requestOptions)
    .then(response => response.text())
    .then(result => setMessage(result))
    .catch((error) => console.log("error", error));
}

  return (
    <div>
      <button onClick={() => test()}>Test Connection</button>
      <p>{message}</p>
    </div>
  );
}

export default Test;
