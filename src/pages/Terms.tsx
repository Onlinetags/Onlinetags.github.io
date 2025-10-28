import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p>
              By accessing and using ToyTag's website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on ToyTag's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p>Under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pricing and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are in US Dollars unless otherwise stated</li>
              <li>Prices are subject to change without notice</li>
              <li>We accept major credit cards and other payment methods as displayed at checkout</li>
              <li>Payment must be received before order processing</li>
              <li>We reserve the right to refuse or cancel orders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping and Delivery</h2>
            <p>
              Shipping times are estimates and not guaranteed. ToyTag is not responsible for delays caused by shipping carriers or customs. Risk of loss and title for items pass to you upon delivery to the carrier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Returns and Refunds</h2>
            <p>
              Please refer to our Returns & Exchanges page for detailed information about our return policy. Generally, items must be returned within 30 days in original condition with all packaging and tags intact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Account Terms</h2>
            <p>When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the security of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Uses</h2>
            <p>You may not use our website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>For any unlawful purpose</li>
              <li>To solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations</li>
              <li>To infringe upon or violate our intellectual property rights</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To transmit any viruses, malware, or other malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of ToyTag or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
            <p>
              The materials on ToyTag's website are provided on an 'as is' basis. ToyTag makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p>
              In no event shall ToyTag or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ToyTag's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p>Questions about the Terms of Service should be sent to us at:</p>
            <ul className="list-none space-y-2">
              <li>Email: legal@toytag.com</li>
              <li>Phone: 1-800-TOY-TAGS</li>
            </ul>
          </section>

          <p className="text-sm italic mt-8">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
