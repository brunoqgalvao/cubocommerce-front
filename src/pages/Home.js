import React from "react";
import { useDict } from '../states/LangState';
import OrderForm from "./OrderForm/OrderForm";

const Home = props => {

  const dictionary = useDict();
  return (
    <OrderForm/>  
  );
};

export default Home;
