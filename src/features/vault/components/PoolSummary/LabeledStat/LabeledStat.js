import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

import { formatApy } from 'features/helpers/format';
import ValueLoader from '../ValueLoader/ValueLoader';
import styles from './styles';

const useStyles = makeStyles(styles);

const LabeledStat = ({ value, label, xs, md, isApyInfo = false, apyBreakdown, isSingleAsset = false, boosted, isLoading = false, subvalue, tooltip }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    isApyInfo ? 
    (
      <Grid item xs={xs} md={md} className={classes.container2}>
        { isLoading ? <ValueLoader /> : (
          <Typography className={classes.label}>
            <div className={classes.feestat}>
              <span>{t('Farming')}</span>
              <span>
                { apyBreakdown && apyBreakdown[0] ? formatApy(apyBreakdown[0]) : 'n/a' }
              </span>
            </div>
            <div className={classes.feestat}>
              <span>{t('Trading Fee')}</span>
              <span>
                { !isSingleAsset && apyBreakdown && apyBreakdown[0] ? formatApy(apyBreakdown[1]) : 'n/a' }
              </span>
            </div>
            { !!boosted && (
              <div className={classes.feestat}>
                <span style={{display: 'flex', alignItems: 'center'}}>
                  {t('Boost')}{'🔥'}
                </span>
                <span>{boosted}</span>
              </div>
            )}
          </Typography>
        )}
      </Grid>
    ) : (
      <Grid item xs={xs} md={md} className={classes.container}>
        <Typography className={classes.stat} variant="body2" gutterBottom>
          {subvalue && !isLoading ? <span className={classes.substat}>{subvalue}</span> : ''}
          {boosted ? (
              isLoading ? <ValueLoader /> :
                  <span className={classes.boosted}>{boosted}</span>
          ) : ''}
          {isLoading ? <ValueLoader /> : <span className={boosted ? classes.crossed : ''}>{value}</span>}
          { !!tooltip && 
            (
              <div className={classes.toolTip}>
                {' '}
                <Tooltip title={tooltip}>
                  <InfoIcon className={classes.infoIcon} />
                </Tooltip>
              </div>
            )
          }
        </Typography>
        <Typography className={classes.label} variant="body2">
          {label}
        </Typography>
      </Grid>
    )
  );
};

export default memo(LabeledStat);
