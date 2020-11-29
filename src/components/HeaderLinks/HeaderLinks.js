import React, { useEffect, useRef, useState, memo } from 'react';
import { renderIcon } from '@download/blockies';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';
import { useTranslation } from 'react-i18next';

import styles from './styles';

const useStyles = makeStyles(styles);

const HeaderLinks = ({ connected, address, connectWallet, disconnectWallet }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [lng, setLanguage] = useState('en');
  const [shortAddress, setShortAddress] = useState('');
  const [dataUrl, setDataUrl] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!connected) {
      return;
    }

    const canvas = canvasRef.current;
    renderIcon({ seed: address.toLowerCase() }, canvas);
    const updatedDataUrl = canvas.toDataURL();
    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl);
    }
    if (address.length < 11) {
      setShortAddress(address);
    } else {
      setShortAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
    }
  }, [dataUrl, address, connected]);

  const handleClick = event => {
    switch (event) {
      case 'Deutsch':
        return i18n.changeLanguage('de').then(() => setLanguage(event));
      case 'English':
        return i18n.changeLanguage('en').then(() => setLanguage(event));
      case 'Español':
        return i18n.changeLanguage('es').then(() => setLanguage(event));
      case 'Français':
        return i18n.changeLanguage('fr').then(() => setLanguage(event));
      case 'हिन्दी':
        return i18n.changeLanguage('hi').then(() => setLanguage(event));
      case 'Bahasa Indonesia':
        return i18n.changeLanguage('id').then(() => setLanguage(event));
      case '한글':
        return i18n.changeLanguage('ko').then(() => setLanguage(event));
      case 'Svenska':
        return i18n.changeLanguage('se').then(() => setLanguage(event));
      case '中文':
        return i18n.changeLanguage('zh').then(() => setLanguage(event));
      case 'Українська':
        return i18n.changeLanguage('uk').then(() => setLanguage(event));
      case 'Português':
        return i18n.changeLanguage('pt').then(() => setLanguage(event));
      // TODO: more translations
      default:
        return;
    }
  };

  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          navDropdown
          hoverColor="dark"
          buttonText={lng}
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          onClick={handleClick}
          dropdownList={[
            'Deutsch',
            'English',
            'Español',
            'Français',
            'हिन्दी',
            'Bahasa Indonesia',
            '한글',
            'Svenska',
            'Українська',
            '中文',
            'Português',
            // TODO: more translations
            { divider: true },
            <a
              href="https://github.com/beefyfinance/beefy-app/tree/master/src/locales"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.cta}
            >
              Help to translate
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          disableElevation
          className={classes.walletDisplay}
          onClick={connected ? disconnectWallet : connectWallet}
        >
          {connected ? (
            <>
              <canvas ref={canvasRef} style={{ display: 'none' }} />
              <Avatar
                alt="address"
                src={dataUrl}
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: '4px',
                }}
              />
              {shortAddress}
            </>
          ) : (
            <>
              <i
                className={'far fa-question-circle'}
                style={{
                  width: '24px',
                  marginRight: '4px',
                }}
              />
              {t('Vault-Wallet')}
            </>
          )}
        </Button>
      </ListItem>
    </List>
  );
};

export default HeaderLinks;
