import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RotateCcw, Package, CreditCard, AlertCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Returns & Exchanges</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <RotateCcw className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">30-Day Returns</h3>
            <p className="text-muted-foreground">Return most items within 30 days of delivery</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <Package className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Free Return Shipping</h3>
            <p className="text-muted-foreground">We provide prepaid return labels for your convenience</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <CreditCard className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Fast Refunds</h3>
            <p className="text-muted-foreground">Refunds processed within 5-7 business days</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <AlertCircle className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Easy Process</h3>
            <p className="text-muted-foreground">Simple online return request system</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Return Policy</h2>
            <p>
              We want you to be completely satisfied with your purchase. If you're not happy with your order, we offer a 30-day return policy on most items.
            </p>
            
            <div className="bg-accent/10 border-l-4 border-accent p-4 my-4">
              <p className="font-semibold text-accent mb-2">Return Requirements:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Items must be returned within 30 days of delivery</li>
                <li>Products must be in original, unused condition</li>
                <li>All original packaging, tags, and accessories included</li>
                <li>Proof of purchase (order number or receipt)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How to Return an Item</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Initiate Return:</strong> Contact us at returns@toytag.com or call 1-800-TOY-TAGS with your order number
              </li>
              <li>
                <strong>Receive Authorization:</strong> We'll email you a return authorization number and prepaid shipping label
              </li>
              <li>
                <strong>Pack Securely:</strong> Place items in original packaging or a sturdy box with all components
              </li>
              <li>
                <strong>Attach Label:</strong> Attach the prepaid label to your package
              </li>
              <li>
                <strong>Ship:</strong> Drop off at any authorized shipping location
              </li>
              <li>
                <strong>Track:</strong> Use the tracking number to monitor your return
              </li>
              <li>
                <strong>Receive Refund:</strong> Refund processed within 5-7 business days of receiving your return
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Exchanges</h2>
            <p>
              We're happy to exchange items for a different size, color, or product. To request an exchange:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Contact us with your exchange request</li>
              <li>Return the original item following our return process</li>
              <li>We'll ship the replacement item once we receive your return</li>
              <li>No additional shipping charges for exchanges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Non-Returnable Items</h2>
            <p>For health and safety reasons, the following items cannot be returned:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Opened art supplies (paints, markers, clay)</li>
              <li>Items marked as "Final Sale"</li>
              <li>Gift cards</li>
              <li>Downloadable products</li>
              <li>Items without original packaging or tags</li>
              <li>Items damaged due to misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Contact us within 7 days of delivery</li>
              <li>Provide photos of the damage or defect</li>
              <li>We'll arrange for a replacement or full refund at no cost to you</li>
              <li>No need to return damaged items unless requested</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Processing</h2>
            <p>
              Refunds are processed to your original payment method within 5-7 business days after we receive and inspect your return. Please note:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Original shipping charges are non-refundable (unless item is defective)</li>
              <li>It may take additional time for your bank to post the refund</li>
              <li>You'll receive an email confirmation once refund is processed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">International Returns</h2>
            <p>
              Since we currently only ship within the US, all returns follow the domestic return policy outlined above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Questions?</h2>
            <p>
              Our customer service team is here to help with any return or exchange questions:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li>Email: returns@toytag.com</li>
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

export default Returns;
