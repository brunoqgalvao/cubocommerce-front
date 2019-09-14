

import React, { useState, useContext} from 'react'
import uuid from 'uuid';

const AlertState = (props) => {

  const [alerts, setAlerts] = useState([]);


  // show alert in modal
  const show = (message,options,id) => {
    if(id==null) id=uuid();
    if(options==null) options = {};
    const title = options.title || undefined
    const callback = options.callback || undefined
    const newAlert = { id, message, options, show:true, callback, title };
    setAlerts([...alerts, newAlert]);
    return id;
  }
  const showForSeconds = (message,time,options) => {
    const id=uuid();
    if(options==null) options = {};
    const title = options.title || undefined
    const callback = options.callback || undefined
    const newAlert = { id, message, options, show:true, callback, title };
    setAlerts([...alerts, newAlert]);
    setTimeout(()=> {
      setAlerts(alerts.filter(alert => alert.id !== id));
    },time)
  }

  // hide all alerts
  const hideAll = () => {
    setAlerts([]);
  }
  // hide alert by id
  const hideById = (id) => {
    const thisAlert = alerts.filter(alert => alert.id === id)[0];
    const newAlerts = alerts.filter(alert => alert.id !== id);
    setAlerts(newAlerts);
    if(thisAlert.callback) thisAlert.callback();
  }
  return (
    <alertContext.Provider
      value={{
        alerts,
        show,
        showForSeconds,
        hideAll,
        hideById
      }}>
      {props.children}
    </alertContext.Provider>
  )
}

export default AlertState

export const alertContext = React.createContext();
export const useAlert = () => {
  const state = useContext(alertContext)
  return state;
}