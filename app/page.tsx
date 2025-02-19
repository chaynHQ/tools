import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-neutral rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl md:text-5xl mb-4">Welcome to Advokit</h1>
          <p className="text-lg mb-8 max-w-2xl text-muted-foreground">
            Finding your content shared without consent can be overwhelming. Advokit will guide you through the reporting process and build a compelling letter to support your takedown request.
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
            <h3 className="text-lg mb-2 border-b-2 border-accent-blue pb-2">Simple process</h3>
            <p className="text-muted-foreground">
              We'll ask some questions about the content and create a professionally-written 
              takedown request letter that you can send to platforms or websites.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg mb-2 border-b-2 border-accent-green pb-2">At your pace</h3>
            <p className="text-muted-foreground">
              Take breaks when you need to. Your progress is saved to your browser, and you can return to continue 
              your request whenever you feel ready.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg mb-2 border-b-2 border-accent-yellow pb-2">Private and secure</h3>
            <p className="text-muted-foreground">
              We don't store or access any of the information you share with us. Everything you share 
              is used only to create your takedown request.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}