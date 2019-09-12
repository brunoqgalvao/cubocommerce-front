import React from "react";
import ProductState from "./ProductState";
import AuthState from "./AuthState";
import AlertState from "./AlertState";
import LangState from "./LangState";
import ModalState from "./ModalState";
import SnackbarState from "./SnackbarState";

const States = props => {
  return (
    <LangState>
      <AlertState>
        <SnackbarState>
          <ModalState>
            <AuthState>
              <ProductState>
                {props.children}
              </ProductState>
            </AuthState>
          </ModalState>
        </SnackbarState>
      </AlertState>
    </LangState>
  );
};

export default States;
