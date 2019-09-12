

import React, { useState, useContext} from 'react'
import uuid from 'uuid';

const SnackbarState = (props) => {

  const [snackbars, setSnackbars] = useState([]);


  // show Snackbar in modal
  const show = (message,id,options) => {
    if(id==null) id=uuid();
    if(options==null) options = {vertical:'bottom',horizontal:'up'};
    const newSnackbar = { id, message, options, show:true };
    setSnackbars([...snackbars, newSnackbar]);
    return id;
  }
  const showForSeconds = (message,time, options) => {
    const id=uuid();
    if(options==null) options = {vertical:'bottom',horizontal:'center'};
    const newSnackbar = { id, message, options, show:true, autoHideDuration:time };
    setSnackbars([...snackbars, newSnackbar]);
  }

  // hide all Snackbars
  const hideAll = () => {
    setSnackbars([]);
  }
  // hide Snackbar by id
  const hideById = (id) => {
    const newSnackbars = snackbars.filter(Snackbar => Snackbar.id !== id);
    setSnackbars(newSnackbars);
  }
  return (
    <SnackbarContext.Provider
      value={{
        snackbars,
        show,
        showForSeconds,
        hideAll,
        hideById
      }}>
      {props.children}
    </SnackbarContext.Provider>
  )
}

export default SnackbarState

export const SnackbarContext = React.createContext();
export const useSnackbar = () => {
  const state = useContext(SnackbarContext)
  return state;
}