"use client";
import React from 'react';

function PaymentMethodCard({ method = 'visa' }) {
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

  return (
    <section className="px-4" style={{padding:'0px 50px'}}>
<h2 className="text-6xl font-bold mb-8 sm:text-4xl" style={{ paddingLeft: '30px', fontSize: '60px' }}>
  طرق الدفع المتكاملة
</h2>

      <p className="text-xl pr-8">سهّل على عملائك سداد أتعابهم بطرق دفع متنوعة وآمنة</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <PaymentMethodCard method="watheeq/assets/img/visa" />
        <PaymentMethodCard method="watheeq/assets/img/tabby" />
        <PaymentMethodCard method="watheeq/assets/img/mada" />
        <PaymentMethodCard method="watheeq/assets/img/mastercard" />
      </div>
    </section>
  );
}

export default PaymentMethods;
