import React from "react";
import ProductState from "./ProductState";
import AuthState from "./AuthState";
import AlertState from "./AlertState";
import LangState from "./LangState";
import ModalState from "./ModalState";

const States = props => {
  return (
    <LangState>
      <AlertState>
        <ModalState>
        <AuthState>
          <ProductState>
            {props.children}
          </ProductState>
        </AuthState>
        </ModalState>
      </AlertState>
    </LangState>
  );
};

export default States;
