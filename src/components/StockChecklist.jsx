import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// v2.0
// const generalStockFactors = ['peRatio', 'institutionalOwnership', 'insiderBuying', 'earnings', 'debtToEquityRatio', 'cashPosition'];
export const CheckList = function(props){
	const factors = getFactors(props.factors);
	return <>
			<h1>Checklist</h1>
			{factors}
			</>;

}

function getFactors(factors) {
	return <List>
			{factors.map((f) => 
				<ListItem>
					<Grid item xs={5}>{f}</Grid>
					<Grid item xs={2}>
						<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> 
					</Grid>
					<Grid item xs={5}>
						<Select value={10}>
							<MenuItem value={10}>Negative</MenuItem>
	          				<MenuItem value={20}>Positive</MenuItem>
						</Select>
					</Grid>
				</ListItem>
			)}
		</List>
}