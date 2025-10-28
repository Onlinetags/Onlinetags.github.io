import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Package, Clock, DollarSign } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Shipping Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <Truck className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Free Shipping</h3>
            <p className="text-muted-foreground">On all orders over $500 within the US</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <Package className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Secure Packaging</h3>
            <p className="text-muted-foreground">All items carefully packed to prevent damage</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <Clock className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Fast Processing</h3>
            <p className="text-muted-foreground">Orders ship within 24 hours on business days</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <DollarSign className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Hidden Fees</h3>
            <p className="text-muted-foreground">All shipping costs shown at checkout</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping Options</h2>
            
            <div className="bg-white rounded-lg p-6 shadow-soft mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Standard Shipping (5-7 Business Days)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cost: $15.00 (FREE on orders over $500)</li>
                <li>Available for all US addresses</li>
                <li>Tracking included</li>
                <li>Signature not required</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Express Shipping (2-3 Business Days)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cost: $29.99</li>
                <li>Available for most US addresses</li>
                <li>Tracking included</li>
                <li>Signature required</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-2">Overnight Shipping (1 Business Day)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cost: $49.99</li>
                <li>Order by 2PM EST for next-day delivery</li>
                <li>Available for select locations</li>
                <li>Tracking and signature required</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Order Processing</h2>
            <p>
              Orders are processed Monday through Friday, excluding major holidays. Orders placed after 2PM EST will be processed the next business day.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You'll receive an order confirmation email immediately after purchase</li>
              <li>Once shipped, you'll receive a tracking number via email</li>
              <li>Track your order anytime through the link in your shipping confirmation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping Restrictions</h2>
            <p>We currently ship only within the United States, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>All 50 states</li>
              <li>Washington D.C.</li>
              <li>US territories (may have extended delivery times)</li>
            </ul>
            <p className="mt-4">
              We do not currently ship to PO Boxes or APO/FPO addresses. International shipping is not available at this time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Delivery Issues</h2>
            <p>If you experience any issues with your delivery:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Delayed shipments:</strong> Contact us if your order hasn't arrived within the estimated timeframe</li>
              <li><strong>Missing packages:</strong> We'll work with the carrier to locate your package</li>
              <li><strong>Damaged items:</strong> Report damage within 7 days with photos for replacement</li>
              <li><strong>Wrong address:</strong> Contact us immediately if you provided an incorrect address</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Holidays and Weather</h2>
            <p>
              Shipping times may be affected during peak seasons, holidays, and severe weather conditions. We're not responsible for carrier delays, but we'll do our best to help resolve any issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Package Tracking</h2>
            <p>
              All shipments include tracking. You can monitor your package's journey from our warehouse to your door. If tracking shows delivered but you haven't received your package, check with neighbors or your building management, and contact us within 48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              Questions about shipping? Contact our customer service team:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li>Email: shipping@toytag.com</li>
              <li>Phone: 1-800-TOY-TAGS</li>
              <li>Hours: Monday-Friday, 9AM-6PM EST</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shipping;
