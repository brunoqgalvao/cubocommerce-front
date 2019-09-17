import React from "react";
import { Snackbar as MUISnackbar} from '@material-ui/core'
import { useSnackbar } from "../../states/SnackbarState";



const Snackbar = props => {
  const snackbar = useSnackbar();

  const handleClose = id => {
    snackbar.hideById(id);
  };

  return snackbar.snackbars.map(snackbar => {
    const {vertical,horizontal, variant} = snackbar.options
    return <MUISnackbar
      color={variant}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={snackbar.autoHideDuration}
      key={`${vertical},${horizontal}`}
      open={snackbar.show}
      onClose={() => handleClose(snackbar.id)}
      ContentProps={{
        "aria-describedby": snackbar.id
      }}
      onClick={()=> handleClose(snackbar.id)}
      message={<span id={snackbar.id}>{snackbar.message}</span>}
    />
  });
};
export default Snackbar;
