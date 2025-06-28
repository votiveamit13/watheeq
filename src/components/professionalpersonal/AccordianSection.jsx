"use client";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPlus, FaMinus } from "react-icons/fa";


export default function AboutSection() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow rounded-lg p-6 text-right" dir="rtl">


      <p className="text-sm text-gray-700 leading-loose mb-6">
        يسعدني ويشرفني أن أكون جزءًا من هذا المجتمع التعليمي المتميز، حيث أشارك معرفتي وخبرتي للمساهمة في تطوير المهارات وتحقيق النجاحات.
        أؤمن بأهمية التعليم المستمر، وأسعى دائمًا لتقديم أفضل ما لدي من خلال بيئة تعليمية محفزة وملهمة.
      </p>



      <div className="mb-6">
        <h3 className="text-base font-semibold text-blue-800 border-r-4 border-orange-400 pr-2 mb-3">
          المهارات والاهتمامات
        </h3>
        <div className="flex flex-wrap gap-2">
          {["الرياضيات", "الإدارة", "التحليل", "القيادة", "الإبداع", "التكنولوجيا", "التدريس"].map((skill, i) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Social Section */}
      <div>
        <p className="text-sm text-gray-700 mb-2">تواصل معي عبر وسائل التواصل الاجتماعي</p>
        <div className="flex gap-4 text-blue-700 text-base">
          <FaFacebookF className="cursor-pointer hover:text-blue-900" />
          <FaTwitter className="cursor-pointer hover:text-blue-900" />
          <FaInstagram className="cursor-pointer hover:text-blue-900" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-900" />
        </div>
      </div>
    </div>
  );
}
