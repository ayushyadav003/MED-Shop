import React, { useContext } from 'react';
import './SideHeader.css';
import { Box, makeStyles } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { openContext } from '../context/Provider';

const useStyle = makeStyles({
    crossbox:{
        height:"fitContent",
        width:"fitContent",
        display:"flex",
        justifyContent:"flex-end",
        padding:17,
    },
    cross:{
        cursor:"pointer",
        height:20,
    }
})

export default function SideHeader() {
    const classes = useStyle()

    const{ onOpenClick } = useContext(openContext)
    return (
        <Box className="allslider">
            <Box className={classes.crossbox}>
                {<Clear onClick={onOpenClick} className={classes.cross} />}
            </Box>   
            <Box className="slider">
                <Box className="item1">
                    <p>Shipping fees and delivery times</p>
                    <hr style={{margin:"40px 150px 0 0"}}></hr>
                </Box>

                <Box className="item2">   
                    <p>Crown Logistics(Hong Kong)</p>
                </Box>
                <Box className="item3">
                    <span>All orders</span>
                    <span>Complimentary</span>
                </Box>
                <Box className="item4">
                    <span>Urban areas</span>
                    <span>2-3 business days</span>
                    <span>Outlying Islands</span>
                    <span>3-4 business days</span>
                </Box>
                <Box className="item5">
                    <span style={{fontWeight:"550"}}>Carbon nuetral shipping</span>
                    <span>We offset operations emissions to ensure the delivery of every order is carbon  nuetral</span>
                </Box>
            </Box>
        </Box>    
    
    )
}
