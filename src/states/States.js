import React from "react";
import ProductState from "./ProductState";
import AuthState from "./AuthState";
import AlertState from "./AlertState";
import LangState from "./LangState";
import ModalState from "./ModalState";
import SnackbarState from "./SnackbarState";
import AddressState from "./AddressState";

const States = props => {
  return (
    <LangState>
      <AlertState>
        <SnackbarState>
          <ModalState>
            <AuthState>
              <AddressState>
                <ProductState>{props.children}</ProductState>
              </AddressState>
            </AuthState>
          </ModalState>
        </SnackbarState>
      </AlertState>
    </LangState>
  );
};

export default States;
