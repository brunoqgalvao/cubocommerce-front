import React, { useState } from "react";
import { goBack } from '../../services/dynamicRouting'
import QuestionItem from './QuestionItem/QuestionItem'
import Logo from '../../components/Utilities/Logo/Logo'
import {
  Typography,
  Paper,
  Container,
  Button
} from "@material-ui/core";
import { styles } from "../../services/styleProvider";
import { withStyles, makeStyles }  from "@material-ui/core/styles";

const Faq = (props) => {
  const { classes } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqQuestions = [
    {
      id:'1',
      question:'O que é a fazenda cubo?',
      answer: 'A fazenda cubo é uma produção local 100% sem agrotóxicos e ultra-frescas: entregamos no máximo a uma distânica de 3km de qualquer unidade e sempre colhemos no mesmo dia!',
    },
    {
      id:'2',
      question:'Como faço para receber em casa?',
      answer: 'A forma de pedir é muito simples. \n 1. Escolha o dia \n 2.escolha os produtos \n 3.indique o endereço \n 4. faça o pagamento. \n Pronto! É só aguardar?.',
    },
    {
      id:'3',
      question:'Preciso estar em casa para receber o pedido?',
      answer: 'Por conta da recente colheita, os produtos se mantém frescos durante um bom período fora da geladeira. Só é necessário que haja algum lugar para o entregador deixar o pacote. \n Quando você chegar, os produtos ainda estarão fresquinhos!',
    },
    {
      id:'4',
      question:'Meu endereço não é atendido, o que faço?',
      answer: 'Para fazer a entrega ultra-fresca, apenas entregamos dentro de um raio de 3km das unidades. \n Entre em contato pelo whatsapp e podemos combinar entregas especiais!',
    },
  ]

  return (
    <>
    <div className={classes.background}>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Logo/>
        <Typography component="h1" variant="h5" style={{paddingBottom:'16px'}}>
        Perguntas Frequentes
        </Typography>
        {faqQuestions.map((item)=>{
          return (
            <QuestionItem 
              expanded={expanded} 
              handleChange={handleChange} 
              id={item.id}
              key={item.id}
              question={item.question}
              answer={item.answer}
              />

          )
        })}
      </Paper>
    </main>
    </div>
    <Container
        style={{ textAlign: "center", position: "fixed", bottom: "16px" }}
      >
        <Button variant="contained" color="primary" onClick={()=>goBack()}>
          Voltar
        </Button>
      </Container>
    </>
  );
}


export default withStyles(styles)(Faq);
