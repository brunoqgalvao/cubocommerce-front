import React from "react";
import { useSession, useAuth } from "../../../states/AuthState";
import { useAddress } from "../../../states/AddressState";
import { useDict } from "../../../states/LangState";
import { useModal } from "../../../states/ModalState";
import { goToNewAddress, goToLogin } from "../../../services/dynamicRouting";
import { Typography, Paper, Button, Modal, Divider } from "@material-ui/core";
import { styles } from "../../../services/styleProvider";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  headerIcon: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
  }
}));

const CheckoutAddress = props => {
  const { classes } = props;
  const innerClasses = useStyles();
  const dictionary = useDict();
  const { user } = useSession();
  const firstName = user.firstName();
  const { logout } = useAuth();
  const modal = useModal();
  const { state } = useAddress(user.id);

  const changeUser = async () => {
    modal.close("changeUser");
    await logout();
    goToLogin();
  };

  const addressText = state.address;
  return (
    <>
          <main className={classes.main}>
        <Paper className={classes.paper} style={{ marginBottom:'8px'}}>
      <Typography variant="h5" style={{ marginTop: "8px" }}>
        Bem vindo {firstName}!
      </Typography>
      <Typography variant="p">
        <a
          onClick={() => modal.open("changeUser")}
          style={{ color: "green" }}
        >
          Não é você?
        </a>
      </Typography>
      </Paper>
      </main>
      <main className={classes.main}>
        <Paper className={classes.paper} style={{marginTop:'8px', marginBottom:'8px'}}>
          <div className={innerClasses.headerIcon}>
            <Typography component="h1" variant="h6" style={{padding:'0'}}>
              Endereço de Entrega
            </Typography>
          </div>
          <Divider />
          {addressText === null ? (
            ""
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "left"
              }}
            >
              <Typography variant="h6">{addressText.name}</Typography>
              <Typography variant="p">{addressText.address}</Typography>
              <Typography variant="p">{addressText.complement}</Typography>
              <Typography variant="p">{addressText.observation}</Typography>
            </div>
          )}
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.submit}
            onClick={goToNewAddress}
          >
            {addressText === null
              ? dictionary.get("address.newAddress")
              : "Alterar Endereço"}
          </Button>
        </Paper>
      </main>
      <Modal
        className={classes.main}
        open={modal.isOpen(`changeUser`)}
        onClose={() => modal.close(`changeUser`)}
      >
        <Paper className={classes.paper}>
          <Typography variant="h5" style={{ padding: "16px" }}>
            Não é você?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => changeUser()}
          >
            Trocar Usuário
          </Button>
          <Button color="secondary" onClick={() => modal.close("changeUser")}>
            Voltar
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default withStyles(styles)(CheckoutAddress);
