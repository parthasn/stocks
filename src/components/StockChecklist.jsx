import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';


// v2.0
// const generalStockFactors = ['peRatio', 'institutionalOwnership', 'insiderBuying', 'earnings', 'debtToEquityRatio', 'cashPosition'];
export const CheckList = function(props){
	const factors = getFactors(props.factors);
	return <>
			<h3>Stock Analysis for: </h3>
			<TextField id="standard-basic" label="Enter Stock Name" />
			{factors}
			</>;

}

function getFactors(factors) {
	return <List>
			{factors.map((f) => 
				<ListItem>
					<Tooltip title={f.description}>
						<Grid item xs={4}>{f.factor}</Grid>
					</Tooltip>
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