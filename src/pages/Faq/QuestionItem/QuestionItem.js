import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const QuestionItem = (props) => {  
  
  const { handleChange, expanded, id, question, answer } = props;
  
  return (
  <ExpansionPanel expanded={expanded === id} onChange={handleChange(id)}>
  <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1bh-content"
    id="panel1bh-header"
  >
    <Typography>{question}</Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
    <Typography variant="p" style={{fontSize:'0.9rem'}}>
    {answer.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}
    </Typography>
  </ExpansionPanelDetails>
</ExpansionPanel>
)
}
export default QuestionItem