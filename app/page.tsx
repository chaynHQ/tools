"use client";

import { useFormContext } from '@/lib/context/FormContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const { resetForm } = useFormContext();

  // Reset form state when landing on home page
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <>
      <div className="bg-neutral rounded-2xl p-4 sm:p-8 md:p-12 md:pb-0">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-4xl mb-5">Welcome to Advokit</h1>
            <p className="text-lg mb-4 text-muted-foreground">
              Discovering your content shared without consent can feel overwhelming. We're here to guide you through creating an effective image takedown request letter.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              You're not alone in this journey. Advokit helps you take back control with clear, actionable steps.
            </p>
            <Link 
              href="/letter-generator" 
              className="inline-flex items-center pill bg-primary text-white px-6 py-2.5 text-base hover:opacity-90 transition-opacity"
            >
              Start your request
            </Link>
          </div>
          <div className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[300px] lg:w-[400px] mx-auto md:mx-0">
            <Image
              src="/header_image.png"
              alt="Illustration of a person using a digital device"
              width={800}
              height={600}
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mb-12 sm:m-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg mb-2 border-b-2 border-accent-blue pb-2">Supportive guidance</h3>
          <p className="text-muted-foreground">
            We'll ask only necessary questions about your situation to create a professionally-written 
            takedown request letter.
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg mb-2 border-b-2 border-accent-green pb-2">AI-powered assistance</h3>
          <p className="text-muted-foreground">
            Our AI technology helps craft personalised, effective letters based on your 
            responses.
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg mb-2 border-b-2 border-accent-yellow pb-2">Private and secure</h3>
          <p className="text-muted-foreground">
            We don't store or access any information you share, it is only used to create your personalised takedown letter request.
          </p>
        </div>
      </div>
    </>
  );
}