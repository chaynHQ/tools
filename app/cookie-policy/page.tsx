export default function CookiePolicyPage() {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
  
        <div className="prose prose-neutral">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by enabling basic functions like page navigation and remembering your preferences.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How we use cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li className="mb-2">
                <strong>Analytics cookies:</strong> We use Google Analytics to understand how visitors interact with our website. This helps us improve our service and make it more useful for you.
              </li>
              <li className="mb-2">
                <strong>Necessary cookies:</strong> These cookies are essential for the website to function properly. They enable core functionality such as security and user preferences.
              </li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookie consent</h2>
            <p className="text-muted-foreground mb-4">
              When you first visit our website, we will ask for your consent to set cookies. You can choose to accept or decline cookies. You can also change your cookie preferences at any time by clearing your browser cookies and revisiting our site.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of cookies we use</h2>
            <div className="bg-neutral rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Google Analytics</h3>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li className="mb-2">Purpose: Track website usage and user behavior</li>
                <li className="mb-2">Duration: Up to 2 years</li>
                <li className="mb-2">Type: Third-party analytics cookie</li>
              </ul>
            </div>
            <div className="bg-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Cookie Consent</h3>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li className="mb-2">Purpose: Remember your cookie preferences</li>
                <li className="mb-2">Duration: 1 year</li>
                <li className="mb-2">Type: Necessary cookie</li>
              </ul>
            </div>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to control cookies</h2>
            <p className="text-muted-foreground mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. To learn more about cookies and how to manage them, visit{' '}
              <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                AboutCookies.org
              </a>
              .
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our Cookie Policy, please contact us at{' '}
              <a href="mailto:privacy@chayn.co" className="text-primary hover:underline">
                privacy@chayn.co
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    );
  }