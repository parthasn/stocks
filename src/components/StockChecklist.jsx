import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const generalStockFactors = ['peRatio', 'institutionalOwnership', 'insiderBuying', 'earnings', 'debtToEquityRatio', 'cashPosition'];
export const CheckList = function(props){
	const factors = getFactors(generalStockFactors);
	return <>
			<h1>Checklist</h1>
			{factors}
			</>;

}

function getFactors(factors) {
	return <List>
		{factors.map((f) => <ListItem>{f}</ListItem>)}
	</List>
}