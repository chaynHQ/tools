import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-neutral rounded-2xl p-8 md:p-12 shadow-sm">
        <h1 className="text-4xl md:text-5xl mb-4">Welcome to Advokit</h1>
        <p className="text-lg mb-6 max-w-2xl text-muted-foreground">
          Discovering your content shared without consent can feel overwhelming. We're here to guide you through creating an effective image takedown request letter.
        </p>
        <p className="text-lg mb-8 max-w-2xl text-muted-foreground">
          You're not alone in this journey. Advokit helps you take back control with clear, actionable steps.
        </p>
        <Link 
          href="/platforms" 
          className="inline-flex items-center pill bg-primary text-white px-6 py-2.5 text-base hover:opacity-90 transition-opacity"
        >
          Start your request
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg mb-2 border-b-2 border-accent-blue pb-2">Supportive guidance</h3>
          <p className="text-muted-foreground">
            We'll ask only necessary questions about your situation to create a professionally-written 
            takedown request letter.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg mb-2 border-b-2 border-accent-green pb-2">AI-powered assistance</h3>
          <p className="text-muted-foreground">
            Our AI technology helps craft personalised, effective letters based on your 
            responses.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg mb-2 border-b-2 border-accent-yellow pb-2">Private and secure</h3>
          <p className="text-muted-foreground">
            We don't store or access any information you share, it is only used to create your personalised takedown letter request.
          </p>
        </div>
      </div>
    </>
  );
}