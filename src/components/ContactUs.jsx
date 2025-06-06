"use client";
import { Instagram, Phone, } from 'lucide-react';
import { Button } from './ui/Button';

export default function ContactUs() {
  return (
    <div className="bg-primary flex items-center justify-between font-omnes text-white px-10 py-20 rounded-md" style={{backgroundColor: '#13498B', margin:'35px'}}>
      <h2 className="text-[40px]">تواصل معنا لأي استفسارات</h2>
      <div className="flex items-center gap-5">
        <div className="flex gap-5 items-center">
          <Instagram />
          <Instagram />
          <Instagram />
          <Instagram />
        </div>
        <Button
          variant={'default'}
          className="bg-white text-primary font-bold text-3xl py-10 w-[200px] px-16 hover:text-white hover:bg-secondary" style={{color: '#13498B'}}
        >
          تواصل معنا
          <Phone size={40} />
        </Button>
      </div>
    </div>
  );
}
