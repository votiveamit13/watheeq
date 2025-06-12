"use client";
import React from 'react';

function PaymentMethodCard({ method = 'visa' }) {
  return (
    <div className="shadow-custom-blue hover:bg-[#e2ffff] cursor-pointer mx-auto flex items-center justify-center rounded-2xl w-[335px] h-[230px] sm:w-[180px] sm:h-[180px]" style={{textShadow:'#0 20px 20px var(--tw-shadow-color, #13498b0d)'}}>
      <img
        src={`/${method}.png`}
        alt={method}
        className="w-[60%] sm:w-auto max-w-full max-h-full"
      />  
    </div>
  );
}

function PaymentMethods() {

  return (
<section className="px-[10px] sm:px-[50px]">
<h2
className="text-[30px] sm:text-[60px] font-bold mb-2 sm:mb-8 pr-[18px] sm:pr-0"
style={{ paddingLeft: '30px' }}
>

  طرق الدفع المتكاملة
</h2>


<p className="text-xl pr-[18px] sm:pr-8">
  سهّل على عملائك سداد أتعابهم بطرق دفع متنوعة وآمنة
</p>

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
