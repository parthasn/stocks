import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { Factor } from './Factor';

// v2.0
// const generalStockFactors = ['peRatio', 'institutionalOwnership', 'insiderBuying', 'earnings', 'debtToEquityRatio', 'cashPosition'];
export const CheckList = function(props){
	const factors = getFactors(props.factors);
	return <>
			<h3>Stock Analysis for: </h3>
			<Grid container>
				<Grid item xs={4}>
					<TextField id="standard-basic" label="Enter Stock Name" />
				</Grid>	
				<Grid item xs={4}>
					<Select label="Stock Type">
						<MenuItem value={1}>Slow Grower</MenuItem>
		  				<MenuItem value={2}>Stalwart</MenuItem>
		  				<MenuItem value={3}>Cyclical</MenuItem>
		  				<MenuItem value={4}>Fast Grower</MenuItem>
		  				<MenuItem value={5}>Turnaround</MenuItem>
		  				<MenuItem value={6}>Assetplay</MenuItem>
					</Select>
				</Grid>	
				<Grid item xs={4}>
					<Select helpertext="Industry">
						{props.industry.map(i => <MenuItem value={i}>{i}</MenuItem>)}
					</Select>
				</Grid>	
			</Grid>
			{factors}
			</>;

}

function getFactors(factors) {
	return <List>
			{factors.map((f) => 
				<ListItem>
					<Factor factor={f} />
					<Grid item xs={1}>
						<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> 
					</Grid>
					<Grid item xs={3}>
						<Select value={10}>
							<MenuItem value={10}>Negative</MenuItem>
	          				<MenuItem value={20}>Positive</MenuItem>
						</Select>
					</Grid>
					<Grid item xs={4}>
						<TextareaAutosize aria-label="empty textarea" placeholder="Comments" />
					</Grid>
				</ListItem>
			)}
		</List>
}