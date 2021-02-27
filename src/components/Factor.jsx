import React from 'react';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	popover: {
		pointerEvents: 'none',
	},
	paper: {
		padding: theme.spacing(1),
	},
}));

export const Factor = (props) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
		<Grid item xs={4}
		 	aria-owns={open ? 'mouse-over-popover' : undefined} 
		 	aria-haspopup="true"
		 	onMouseEnter={handlePopoverOpen} 
		 	onMouseLeave={handlePopoverClose}>
		 	{props.factor.factor}
		</Grid>
		<Popover
			id="mouse-over-popover"
			open={open}
			className={classes.popover}
	        classes={{
	          paper: classes.paper,
	        }}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			onClose={handlePopoverClose}
			disableRestoreFocus
		>
			{props.factor.description}
		</Popover>	
		</>
	)
}