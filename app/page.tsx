'use client';

import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
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

  const handleStartRequest = () => {
    analytics.trackEvent(GA_EVENTS.TDLG_START_YOUR_REQUEST_CLICKED);
  };

  return (
    <>
      <div className="bg-neutral rounded-2xl p-4 sm:p-8 md:p-12 md:pb-0">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-4xl mb-5">Welcome to our Survivor AI</h1>
            <p className="text-lg mb-4 text-muted-foreground">
              Discovering your content shared without consent can feel overwhelming. We're here to
              guide you through creating an effective image takedown request letter.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              You're not alone in this journey. Survivor AI helps you take back control with clear,
              actionable steps.
            </p>
            <Link
              href="/letter-generator"
              onClick={handleStartRequest}
              className="inline-flex items-center pill bg-primary text-white px-6 py-2.5 text-base hover:opacity-90 transition-opacity"
            >
              Start your request
            </Link>
          </div>
          <div className="shrink-0 w-[80%] sm:w-[60%] md:w-[300px] lg:w-[400px] mx-auto md:mx-0">
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
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xs">
          <h3 className="text-lg mb-2 border-b-2 border-accent-blue pb-2">Supportive guidance</h3>
          <p className="text-muted-foreground">
            We'll ask only necessary questions about your situation to create a
            professionally-written takedown request letter.
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xs">
          <h3 className="text-lg mb-2 border-b-2 border-accent-green pb-2">
            AI-powered assistance
          </h3>
          <p className="text-muted-foreground">
            Our AI technology helps craft personalised, effective letters based on your responses.
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xs">
          <h3 className="text-lg mb-2 border-b-2 border-accent-yellow pb-2">Private and secure</h3>
          <p className="text-muted-foreground">
            We don't store or access any information you share, it is only used to create your
            personalised takedown letter request.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl mb-8 text-center">Example takedown letters</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Example 1: Non-consensual intimate content */}
          <div className="bg-white rounded-xl p-6 shadow-xs">
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
          </div>

          {/* Example 2: Impersonation account */}
          <div className="bg-white rounded-xl p-6 shadow-xs">
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
          </div>
        </div>
      </div>
    </>
  );
}
