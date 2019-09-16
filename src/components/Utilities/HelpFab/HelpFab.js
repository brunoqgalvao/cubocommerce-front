import React from 'react'
import { Fab, Typography, Modal} from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { styles } from '../../../services/styleProvider'
import { withStyles } from '@material-ui/core/styles'
import { useModal } from '../../../states/ModalState'
import HelpModal from '../../../pages/OrderForm/FormHeader/HelpModal/HelpModal'

const HelpFab = (props) => {  
  const  modal  = useModal();

  const {classes } = props
  return (
    <>
  <Fab color="primary" variant="outlined" aria-label="add" className={classes.helpFab} onClick={() => modal.open("helpModal")}>
    <Typography variant='h5'>?</Typography>
</Fab>
    <Modal
    open={modal.isOpen(`helpModal`)}
    onClose={() => modal.close(`helpModal`)}
  >
<HelpModal/>
</Modal>
</>
)
}
export default withStyles(styles)(HelpFab)