import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse our products, click 'Add to Cart' on items you want to purchase, then click the cart icon in the top right and proceed to checkout. You don't need an account to make a purchase, though creating one makes future orders faster."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and other secure payment methods displayed at checkout."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping within the US typically takes 5-7 business days. Express shipping options are available at checkout for 2-3 day delivery. Free shipping is offered on orders over $500."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the United States. We're working on expanding our international shipping options and will update our website when available."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most items. Products must be returned in original condition with all packaging and tags. Please visit our Returns & Exchanges page for complete details."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive an email with tracking information. You can also log into your account to view order status and tracking details."
    },
    {
      question: "Are your products safe for children?",
      answer: "Yes! All our toys and games meet or exceed safety standards. Each product listing includes age recommendations and safety information. Always supervise young children during play."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 1 hour of placement. After that, orders are processed for shipping and cannot be changed. Contact us immediately if you need to make changes."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes! Gift wrapping options are available at checkout for a small additional fee. You can also include a personalized gift message."
    },
    {
      question: "What if I receive a damaged or defective product?",
      answer: "We're sorry if that happens! Contact us within 7 days of delivery with photos of the damage, and we'll arrange a replacement or refund at no cost to you."
    },
    {
      question: "Do you have a physical store?",
      answer: "We're an online-only retailer, which allows us to offer competitive prices and a wider selection. However, we attend toy fairs and events throughout the year - check our social media for updates."
    },
    {
      question: "How do I contact customer service?",
      answer: "You can reach us via email at support@toytag.com, call 1-800-TOY-TAGS, or use our contact form. Our customer service team is available Monday-Friday, 9AM-6PM EST."
    },
    {
      question: "Do you offer educational discounts?",
      answer: "Yes! We offer special pricing for teachers, schools, and educational institutions. Contact us for details on our educational discount program."
    },
    {
      question: "How do I use a promo code?",
      answer: "Enter your promo code in the designated field during checkout before completing payment. The discount will be applied to your order total."
    },
    {
      question: "Can I purchase in bulk?",
      answer: "Absolutely! For bulk orders or corporate gifts, please contact our sales team for special pricing and arrangements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about ordering, shipping, returns, and more
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 bg-gradient-accent rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6">Our customer service team is here to help!</p>
          <a href="/contact" className="inline-block bg-white text-accent font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
            Contact Us
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
