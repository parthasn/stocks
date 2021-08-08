import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {serverUrl} from '../constants/resource.js'

export const AddStock = () => {
	let [message, setMessage] = useState('')
	
	const addStock = async () => {
	  const response = await fetch(serverUrl + '/stock', {
	    method: 'POST',
	    mode: 'cors',
	    cache: 'no-cache',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    redirect: 'follow',
	    referrerPolicy: 'no-referrer',
	    body: JSON.stringify({ stockId: message })
	  });
	  return response.json();
	}


	return (
		<> 
			Enter stock id: 
			<TextField id="message"  
				onChange={e => setMessage(e.target.value)}
			 	label="Standard" 
			/>
			<Button onClick={addStock} variant="contained">Default</Button>
		</>
	)
}