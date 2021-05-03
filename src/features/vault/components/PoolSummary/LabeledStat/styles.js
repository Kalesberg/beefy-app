const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: props => (props.align ? props.align : 'center'),
    justifyContent: 'center',
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  stat: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    lineHeight: '18px',
    letterSpacing: 0,
    position: 'relative',
  },
  substat: {
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.text.secondary,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: '-20px',
  },
  feestat: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px 0px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.palette.text.secondary,
    lineHeight: '14px',
    letterSpacing: 0,
  },
  boosted: {
    color: '#2a9e46',
    position: 'absolute',
    top: '-20px',
  },
  crossed: {
    textDecoration: 'line-through',
  },
  toolTip: {
    position: 'absolute',
    top: '0px',
    right: '-25px',
  },
  infoIcon: {
    color: '#3c4858',
    fontSize: '20px',
  },
});

export default styles;
