"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';

function PaymentMethod({ method = 'visa' }) {
  return (
    <div className="shadow-custom-blue mx-auto flex items-center justify-center rounded-2xl w-[230px] h-[230px] sm:w-[180px] sm:h-[180px]">
      <img
        src={`/${method}.png`}
        alt={method}
        className="max-w-full max-h-full"
      />
    </div>
  );
}

function PaymentMethods() {
  const { t } = useTranslation();

  return (
    <section className="px-4" style={{padding:'0px 50px'}}>
      <h2 className="text-6xl font-bold mb-8 sm:text-4xl" style={{paddingRight:'30px'}}>
        {t('payment-methods-header')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <PaymentMethod method="/watheeq/assets/img/visa" />
        <PaymentMethod method="/watheeq/assets/img/tabby" />
        {/* <PaymentMethod method="tmara" /> */}
        <PaymentMethod method="/watheeq/assets/img/mada" />
        <PaymentMethod method="/watheeq/assets/img/mastercard" />
      </div>
    </section>
  );
}

export default PaymentMethods;
