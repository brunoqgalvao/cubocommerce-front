import React from 'react'
import { Fab, Typography, Modal} from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { styles } from '../../../services/styleProvider'
import { withStyles } from '@material-ui/core/styles'
import { useModal } from '../../../states/ModalState'
import HelpModal from '../../../pages/OrderForm/FormHeader/HelpModal/HelpModal'
import FeedbackModal from '../FeedbackModal/FeedbackModal'
const HelpFab = (props) => {  
  const  modal  = useModal();

  const {classes } = props
  const { hide } = props
  return (
    <>
  <Fab color="primary" variant="outlined" aria-label="add" className={classes.helpFab} onClick={() => modal.open("helpModal")} style={hide?{display:'none'}:null}>
    <Typography variant='h5'>?</Typography>
  </Fab>
  <Modal
  open={modal.isOpen(`helpModal`)}
  onClose={() => modal.close(`helpModal`)}
  >
    <HelpModal/>
  </Modal>
  <Modal
    open={modal.isOpen(`feedbackModal`)}
    onClose={() => modal.close(`feedbackModal`)}
    >
    <FeedbackModal/>
  </Modal>
</>
)
}
export default withStyles(styles)(HelpFab)