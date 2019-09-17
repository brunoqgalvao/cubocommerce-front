import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core/";
import { useProduct } from "../../../../states/ProductState";
import { useModal } from "../../../../states/ModalState";
import { useSnackbar } from "../../../../states/SnackbarState";
import FormCard from "../FormCard/FormCard";
import ListItem from "@material-ui/core/ListItem";
import { Modal } from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    borderRadius: "50%",
    margin: theme.spacing(0)
  },
  avatar: {
    height: "60px",
    width: "60px"
  },
  card: {
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
    marginBottom: theme.spacing(1)
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  }
}));

const FormItem = props => {
  const { product } = props;
  const { placeOrder, removeOrder } = useProduct();
  const classes = useStyles();
  const modal = useModal();
  const { showForSeconds } = useSnackbar();
  const handleAdd = () => {
    placeOrder(product.id);
    showForSeconds(`${product.name} adicionado!`, 1000, {
      vertical: "bottom",
      horizontal: "center",
      variant: "primary"
    });
  };
  const handleRemove = () => {
    removeOrder(product.id);
    showForSeconds(`Item Removido!`, 1000, {
      vertical: "bottom",
      horizontal: "center",
      variant: "primary"
    });
  };

  return (
    <>
      <Container>
        <ListItem
          className={classes.card}
          onClick={() => modal.open(`product-${product.id}`)}
        >
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              alt={product.name}
              src={product.imageUrl}
            />
          </ListItemAvatar>
          <ListItemText
            id={product.id}
            primary={product.name}
            secondary={
              <>
                <span>R${product.price},00</span>/<span>{product.unit}</span>
              </>
            }
            style={{ paddingLeft: "16px", paddingRight: "86px" }}
          />
          <ListItemSecondaryAction style={{ minWidth: "50px" }}>
            <div>
              {product.orderQty === 0 ? (
                ""
              ) : (
                <IconButton
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  onClick={handleRemove}
                >
                  <span style={{ fontSize: "22pt" }}>-</span>
                </IconButton>
              )}
              {product.orderQty === 0 ? (
                ""
              ) : (
                <span style={{ fontWeight: "bold" }}>{product.orderQty}</span>
              )}
              <Tooltip title="Add" aria-label="add" placement="top">
                <IconButton
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handleAdd}
                >
                  <AddCircleIcon />
                </IconButton>
              </Tooltip>
            </div>
          </ListItemSecondaryAction>
        </ListItem>
      </Container>
      <Modal
        className={classes.main}
        open={modal.isOpen(`product-${product.id}`)}
        onClose={() => modal.close(`product-${product.id}`)}
      >
        <FormCard
          product={product}
          handleClose={() => modal.close(`product-${product.id}`)}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      </Modal>
    </>
  );
};
export default FormItem;
