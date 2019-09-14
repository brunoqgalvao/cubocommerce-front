import React, { useState, useEffect } from "react";
import { history } from "../routes/AppRouter.js";
import { useAlert } from "./../states/AlertState";
import { useProduct } from "./../states/ProductState";

export const useDynamicRouting = () => {
  const alert = useAlert();
  const product = useProduct();

  const goToCheckout = () => {
    const amount = product.numberOfItemsInBasket();
    if (amount === 0) {
      alert.show("Seu pedido está vazio!");
    } else {
      console.log("going to checkout");
      history.push(`/checkout`);
    }
  }

    const goToLogin = async () => {
      history.push(`/login`);
    };

    const goToRegister = async () => {
      history.push(`/register`);
    };

    const goToHome = () => {
      console.log("going to home");
      history.push(`/`);
    };
    const goToDashboard = () => {
      history.push(`/dashboard`);
    };

    const goToLogout = () => {
      history.push(`/logout`);
    };
    const goToLoginWithLogout = () => {
      history.push(`/login`);
    };
    const goToForm = () => {
      history.push(`/`);
    };
    const goToNewAddress = () => {
      history.push(`/newaddress`);
    };
    const goToAuth = replace => {
      if (replace) {
        history.replace("/auth");
      } else {
        history.push(`/auth`);
      }
    };
    const goToConfirmPayment = () => {
      history.push("/payment");
    };
  return {
    goToCheckout,
    goToLogin,
    goToHome,
    goToRegister,
    goToDashboard,
    goToNewAddress,
    goToAuth,
    goToForm,
    goToConfirmPayment,
    goToLoginWithLogout,
    goToLogout,
  };
};
