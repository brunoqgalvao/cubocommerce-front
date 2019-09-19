import React from "react";
import { useModal } from "../../../../states/ModalState";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography, ClickAwayListener, IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 100,
    backgroundSize: "contain"
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
});
const HelpModal = () => {
  const modal = useModal();
  const classes = useStyles();
  const handleWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=5511991625959");
  };

  return (
    <div className={classes.main}>
      <ClickAwayListener onClickAway={() => modal.close("helpModal")}>
        <Card className={classes.card}>
            <CardContent style={{position:'relative'}}>
            <IconButton
            onClick={() => modal.close("helpModal")}
            style={{
              position: "absolute",
              top: "2%",
              right: "3%",
              zIndex: 2000
            }}
          >
            <i
              class="fa fa-times"
              style={{ color: "rgba(0,0,0,0.5)" }}
              aria-hidden="true"
            ></i>
          </IconButton>
              <Typography gutterBottom variant="h5" component="h2">
                Precisando de Ajuda?
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Envie uma mensagem ou entre em contato pelo whatsapp e
                responderemos em seguida!
              </Typography>
            </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={handleWhatsapp}>
              Whatsapp
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={e => {
                e.stopPropagation();
                modal.closeAndOpen("feedbackModal");
              }}
            >
              Mensagem
            </Button>
          </CardActions>
        </Card>
      </ClickAwayListener>
    </div>
  );
};
export default HelpModal;
