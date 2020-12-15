import React from 'react';
import AccordionDetails from '@material-ui/core/AccordionActions';
import Grid from '@material-ui/core/Grid';

import DepositSection from './DepositSection/DepositSection';
import WithdrawSection from './WithdrawSection/WithdrawSection';
import HarvestSection from './HarvestSection/HarvestSection';

const PoolDetails = ({ pool, balanceSingle, index, sharesBalance }) => {
  return (
    <AccordionDetails style={{ justifyContent: 'space-between' }}>
      <Grid container>
        <DepositSection index={index} pool={pool} balanceSingle={balanceSingle} />
        <WithdrawSection index={index} pool={pool} sharesBalance={sharesBalance} />
        <HarvestSection index={index} pool={pool} />
      </Grid>
    </AccordionDetails>
  );
};

export default PoolDetails;
