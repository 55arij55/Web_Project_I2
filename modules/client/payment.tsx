import { Header } from '../../components/ui/header.tsx';
import PaymentFormComponent from '../../components/ui/client/paymentForm.tsx';
import React from 'react';


export default function PaymentFormPage() {
    return (
      <>
        <Header />
        <PaymentFormComponent />
      </>
    );
  }