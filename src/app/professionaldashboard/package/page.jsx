"use client";
import PackageInfotmation from "@/components/clientdashboard/packageinfo/PackageInformation";
import SubscriptionDialog from "@/components/clientdashboard/packageinfo/SubscriptionDialog";
import Packages from "@/components/Packages";
import { useState } from "react";

export default function Package() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const handleSubscribe = (type, plan) => {
    const price =
      type === "basic"
        ? plan === "monthly"
          ? 89
          : 890
        : plan === "monthly"
        ? 59
        : 590;
    const vat = Math.round(price * 0.13);
    const total = price + vat;

    setModalData({
      name: type === "basic" ? "باقة وثيق 1" : "باقة وثيق 2",
      duration: plan === "monthly" ? "1 شهر" : "12 شهر",
      remaining: "3 أيام",
      price,
      vat,
      total,
    });

    setModalOpen(true);
  };

  return (
    <div>
      <div className="bg-white p-5 mt-5 rounded-lg mb-5">
        <PackageInfotmation
          name={"باقة وثيق 1"}
          duration={"1 شهر"}
          price={99}
          type={"شهري"}
          date={"12-04-2025"}
        />
      </div>
      <div className="mx-auto bg-white p-5 rounded-lg mb-30">
        <div className="[&>section]:mx-0 [&>section]:sm:mx-0 mx-auto overflow-x-hidden">
          <Packages
            heading={null}
            subheading={"باقات وثيق"}
            onSubscribeClick={handleSubscribe}
          />
        </div>
      </div>
      <SubscriptionDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        data={modalData}
      />
    </div>
  );
}
