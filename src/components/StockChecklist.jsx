import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

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
	return <Grid container>
	      <List>
			{factors.map((f) => 
				<ListItem>
					<Grid item xs={10}>{f}</Grid>
					<Grid item xs={2}>
						<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> 
					</Grid>
				</ListItem>
			)}
		</List>
		</Grid>
}