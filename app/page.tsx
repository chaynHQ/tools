'use client';

import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Lock, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const { resetForm } = useFormContext();

  // Reset form state when landing on home page
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleStartRequest = () => {
    analytics.trackEvent(GA_EVENTS.TDLG_START_YOUR_REQUEST_CLICKED);
  };

  return (
    <>
      <div className="bg-neutral rounded-2xl p-4 sm:p-8 md:p-12 md:pb-0">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl mb-5">Welcome to our Survivor AI</h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Discovering your content shared without consent can feel overwhelming. We're here to guide you through creating 
              an effective image takedown request letter, with clear, actionable steps at your own pace.
            </p>
            <Link
              href="/letter-generator"
              onClick={handleStartRequest}
              className="inline-flex items-center pill bg-primary text-white px-6 py-2.5 text-base hover:opacity-90 transition-opacity"
            >
              Start your request
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="shrink-0 w-[80%] sm:w-[60%] md:w-[300px] lg:w-[400px] mx-auto md:mx-0"
          >
            <Image
              src="/header_image.png"
              alt="Illustration of a person using a digital device"
              width={800}
              height={600}
              className="rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {[
          {
            icon: Heart,
            title: "Supportive guidance",
            description: "We'll ask only necessary questions about your situation to create a professionally-written takedown request letter.",
            bgColor: "bg-secondary/20",
            iconColor: "text-secondary"
          },
          {
            icon: ShieldCheck,
            title: "AI-powered assistance",
            description: "Our AI technology helps craft personalised, effective letters based on your responses.",
            bgColor: "bg-accent-green/20",
            iconColor: "text-accent-green"
          },
          {
            icon: Lock,
            title: "Private and secure",
            description: "We don't store or access any information you share, it is only used to create your personalised takedown letter request.",
            bgColor: "bg-accent-blue/20",
            iconColor: "text-accent-blue"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 ${feature.bgColor} rounded-full transition-transform group-hover:scale-110`} />
            
            <div className="relative space-y-4">
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                {<feature.icon className={`w-6 h-6 ${feature.iconColor}`} />}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl mb-8 text-center">Example takedown letters</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-xs"
          >
            <h3 className="text-lg font-medium mb-4 border-b border-accent-blue pb-2">
              Example: Non-consensual intimate content
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Subject:</h4>
                <p className="text-muted-foreground bg-neutral rounded-lg p-4">
                  Urgent Request to Remove Non-consensual Intimate Content - Privacy Violation
                </p>
              </div>
              <div>
                <h4 className="font-medium">Letter:</h4>
                <div className="text-muted-foreground bg-neutral rounded-lg p-4 space-y-4">
                  <p>Dear Support Team,</p>

                  <p>
                    I am writing to request the immediate removal of intimate content that was
                    shared without my consent. The content can be found at [Content Location].
                  </p>

                  <p>
                    This content was uploaded on 15 January 2024 without my knowledge or permission.
                    I discovered it on 20 January 2024 and immediately used your platform's
                    reporting tools to request its removal. I have not received a response to my
                    initial report.
                  </p>

                  <p>
                    I can verify that I am the person in the content, and it was taken from my
                    private, password-protected cloud storage account that was compromised. This
                    sharing of intimate content without consent violates your platform's community
                    guidelines regarding non-consensual intimate imagery.
                  </p>

                  <p>
                    The continued presence of this content is causing me significant distress and
                    affecting my mental health and professional life. I request that you:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Immediately remove the content</li>
                    <li>Prevent any re-uploads of the same content</li>
                    <li>Provide confirmation once the content has been removed</li>
                  </ul>

                  <p>Thank you for your prompt attention to this matter.</p>

                  <p>Sincerely,</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-xs"
          >
            <h3 className="text-lg font-medium mb-4 border-b border-accent-blue pb-2">
              Example: Impersonation account
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Subject:</h4>
                <p className="text-muted-foreground bg-neutral rounded-lg p-4">
                  Request to Remove Impersonation Account - Urgent Privacy Violation
                </p>
              </div>
              <div>
                <h4 className="font-medium">Letter:</h4>
                <div className="text-muted-foreground bg-neutral rounded-lg p-4 space-y-4">
                  <p>Dear Trust & Safety Team,</p>

                  <p>
                    I am writing to report an account that is impersonating me and sharing my
                    personal content without authorization. The impersonating account can be found
                    at [Content Location].
                  </p>

                  <p>
                    This account was created on 1 March 2024 and is using my name, photos, and
                    personal information to deceive others. The account is sharing private photos
                    taken from my personal social media accounts without permission.
                  </p>

                  <p>
                    I have already reported this through your standard reporting process on 5 March
                    2024 and through your escalated support channel on 10 March 2024, but the
                    account remains active.
                  </p>

                  <p>This impersonation violates your platform's policies regarding:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account authenticity and integrity</li>
                    <li>Unauthorized use of personal information</li>
                    <li>Deceptive practices</li>
                  </ul>

                  <p>
                    The impersonation is causing significant harm to my reputation and
                    relationships. I request that you:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remove the impersonating account</li>
                    <li>Prevent the creation of similar impersonating accounts</li>
                    <li>Confirm once action has been taken</li>
                  </ul>

                  <p>Thank you for your assistance in resolving this issue.</p>

                  <p>Sincerely,</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}