export const styles = theme => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
    minHeight:'100vh',
    width:'100vw',
    top:0,
    position:"absolute",
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    border: "none",
    height: "50px",
    width: "50px"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(3)
  },
  alertTitle: {
    paddingBottom: theme.spacing(0),
    textAlign: "center"
  },
  modalStyle: {
    width: "80%"
  },
  helpFab: {
    position:'fixed',
    zIndex:'10000',
    bottom:theme.spacing(2),
    left:theme.spacing(1),
  }
});
