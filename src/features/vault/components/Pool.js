import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import { byDecimals } from 'features/helpers/bignumber';
import PoolSummary from './PoolSummary';
import PoolDetails from './PoolDetails';

const Pool = ({ pool, index, openedCardList, classes, openCard, tokens, contractApy }) => {
  let balanceSingle = byDecimals(tokens[pool.token].tokenBalance, pool.tokenDecimals);
  let singleDepositedBalance = byDecimals(
    tokens[pool.earnedToken].tokenBalance,
    pool.tokenDecimals
  );
  let depositedApy = contractApy[pool.id] || 0;

  return (
    <Grid
      item
      xs={12}
      container
      key={index}
      style={{ marginBottom: '24px', border: '1px solid #DED9D5' }}
      spacing={0}
    >
      <div style={{ width: '100%' }}>
        <Accordion
          expanded={Boolean(openedCardList.includes(index))}
          className={classes.accordion}
          TransitionProps={{ unmountOnExit: true }}
        >
          <PoolSummary
            pool={pool}
            index={index}
            classes={classes}
            onClick={openCard}
            balanceSingle={balanceSingle}
            openedCardList={openedCardList}
            singleDepositedBalance={singleDepositedBalance}
            depositedApy={depositedApy}
          />
          <PoolDetails
            classes={classes}
            pool={pool}
            balanceSingle={balanceSingle}
            singleDepositedBalance={singleDepositedBalance}
          />
          <Divider variant="middle" className={classes.accordionDivider} />
        </Accordion>
      </div>
    </Grid>
  );
};

export default Pool;
