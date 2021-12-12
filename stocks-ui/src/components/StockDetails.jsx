import React from 'react'
import LinkComponent from './LinkComponent'
import ScoreButton from './ScoreButton'
import ProfitTable from './ProfitTable'
import DebtTable from './DebtTable'
import jsonData from '../jsonDB/itcStock.json'
// import styles from '../styles/stockDetails.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: '20px',
      margin: '20px',
    //   height: '90vh',
      textAlign: 'left',
    //   color: 'white',
    },
    paper1: {
        padding: '10px',
        // margin: '10px',
        textAlign: 'left'
    }
  }));

function StockDetails() {
    const classes = useStyles();
    const data = jsonData
    console.log("data", data)
    return (
        
            <div>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{fontSize: '24px', fontWeight: 600}}>{data.stockId}</div>
                            <div>
                                <LinkComponent link={`https://www.screener.in/company/${data.stockId}`}/>
                            </div>
                        </div>
                        <div>
                            <ScoreButton/>
                            {/* <button>Score Button</button> */}
                        </div>
                        <div style={{display: 'flex', marginTop: '20px'}}>

                            <Grid item xs={6} sm={3}>
                                <Paper style={{marginRight: '10px'}} className={classes.paper1}>
                                    
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <p style={{fontWeight: 600}}>Market Cap</p>
                                        <p>{data.MarketCap.value}{data.MarketCap.unit}</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper style={{marginleft: '10px', marginRight: '10px'}} className={classes.paper1}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <p style={{fontWeight: 600}}>PE</p>
                                        <p>{data.PE.value}{data.PE.unit}</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper style={{marginleft: '10px', marginRight: '10px'}} className={classes.paper1}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <p style={{fontWeight: 600}}>Face Value</p>
                                        <p>{data.FaceValue.value}{data.FaceValue.unit}</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper style={{marginleft: '10px'}} className={classes.paper1}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <p style={{fontWeight: 600}}>Dividend</p>
                                        <p>{data.Dividend.value}{data.Dividend.unit}</p>
                                    </div>
                                </Paper>
                            </Grid>
                        </div>
                        <div style={{fontSize: '24px', fontWeight: 600, marginTop: '20px'}}>Profit Table</div>
                        <div style={{marginTop: '20px'}}>
                            <ProfitTable data={data}/>
                        </div>
                        <div style={{fontSize: '24px', fontWeight: 600, marginTop: '20px'}}>Debt Table</div>
                        <div style={{marginTop: '20px'}}>
                            <DebtTable data={data}/>
                        </div>
                        
                    </Paper>
                </Grid>
            </div>
        
    )
}

export default StockDetails
