import React from 'react'
import Fab from '@material-ui/core/Fab';

function LinkComponent({link}) {
    return (
        <div>
            <a style={{textDecoration: 'none'}} href={link}>
                <Fab style = {{borderRadius: '5px', padding: '15px'}} variant="extended">
                    Screener
                </Fab>
            </a>
        </div>
    )
}

export default LinkComponent
