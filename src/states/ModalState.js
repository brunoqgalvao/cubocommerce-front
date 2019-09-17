

import React, { useState, useContext} from 'react'

const ModalState = (props) => {

  const [modals, setModals] = useState([]);


  // show modal
  const open = (id) => {
    const newModal = { id };
    const newModals = [...modals,newModal];
    setModals(newModals);
    return id;
  }
  const isOpen = (id) => {
    const check = modals.filter(modal => modal.id === id).length > 0;
    return check;
  }

  // hide all modals
  const closeAll = () => {
    setModals([]);
  }
  // hide alert by id
  const close = (id) => {
    console.log('close',id);
    const newModal = modals.filter(modal => modal.id !== id);
    console.log('close',newModal);
    setModals(newModal);
  }
  const closeAndOpen = (id) => {
    const newModal = { id };
    setModals([newModal]);
    return id;
  }
  return (
    <modalContext.Provider
      value={{
        modals,
        open,
        close,
        isOpen,
        closeAll,
        closeAndOpen
      }}>
      {props.children}
    </modalContext.Provider>
  )
}

export default ModalState

export const modalContext = React.createContext();
export const useModal = () => {
  const state = useContext(modalContext)
  return state;
}