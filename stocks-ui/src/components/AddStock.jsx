// import { React } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const AddStock = () => {
	return (
		<> 
			Enter stock id: <TextField id="standard-basic" label="Standard" />
			<Button variant="contained">Default</Button>
		</>
	)
}