import React, { useEffect } from 'react';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import { makeStyles } from "@material-ui/core/styles";
import CustomSlider from 'components/CustomSlider/CustomSlider';
import FormControl from '@material-ui/core/FormControl';
import CustomOutlinedInput from 'components/CustomOutlinedInput/CustomOutlinedInput';

import zapCommandStyle from "../jss/sections/zapCommandStyle";
const useStyles = makeStyles(zapCommandStyle);

export default function ZapCommand() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.zapContainer}>
                <div className={classes.mainTitle}>Zap</div>
                <h3 className={classes.secondTitle}>Exchange your assets</h3>
                <div className={classes.boxContainer}>
                    <div className={classes.boxHeader}>
                        <div className={classes.boxHeaderMain}>Send</div>
                        <div className={classes.boxHeaderSub}>Balance: 8888.0000 USDT</div>
                    </div>
                    <FormControl fullWidth variant="outlined">
                        <CustomOutlinedInput 
                            // value={withdrawAmount[index]!=undefined ? withdrawAmount[index] : '0'}
                            // onChange={changeDetailInputValue.bind(this,'withdrawAmount',index,singleDepositedBalance.toNumber(),pool.tokenDecimals)}
                            endAdornment={
                                <div>1231</div>
                            }
                            />
                    </FormControl>
                    <GridItem>
                        <CustomSlider 
                            aria-labelledby="continuous-slider" 
                            // value={}
                            // onChange={}
                            />
                    </GridItem>
                    
                </div>
                <div className={classes.boxContainer}>

                </div>
            </div>
        </div>
    )
}