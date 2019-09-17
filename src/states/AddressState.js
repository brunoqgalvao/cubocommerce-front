import React, { useState } from 'react'
import firebase from './../services/firebaseUtils'

const AddressState = (props) => {

  const initialState = {
    error:null,
    loading:false,
    address:null,
  }
  const [state, setState] = useState(initialState);




  return (
    <AddressContext.Provider
      value={{
        state,
      }}>
      {props.children}
    </AddressContext.Provider>
  )
}

export default AddressState

export const AddressContext = React.createContext();
export const useAddress = (id) => {


  const initialState = {
    error:null,
    loading:false,
    address:null,
  }
  const [state, setState] = useState(initialState);

  React.useEffect(
    () => {
      getAddress();
    },
    [id]
  )

    const getAddress = async () => {
      if(id){
        setState({...state, loading:true})
        await firebase.db
        .collection('user')
        .doc(id)
        .onSnapshot(handleSnapshot)
      }
    }
    
    const handleSnapshot = (snapshot) => {
      try{
        const address = snapshot.data().address;
        if(address){
          setState({...state,address:address, loading:false})
        } else {
          setState({...state,address:null, loading:false})
        }
      } catch (err) {
        console.log(err);
        setState({...state,address:null, loading:false})
      }

    } 

    
  const addAddress = async (fullAddress) => {
    await firebase.addAddress(fullAddress);
  }

  return { state, addAddress, getAddress }
}