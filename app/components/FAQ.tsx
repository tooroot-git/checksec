import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does the domain transfer work?",
      answer:
        "The domain transfer process is simple and secure. Once payment is confirmed, we'll initiate the transfer through Sedo's secure escrow service. You'll receive full control of the domain within 24-48 hours.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major payment methods through Sedo's secure payment system, including credit cards, wire transfers, and PayPal.",
    },
    {
      question: "Is the price negotiable?",
      answer:
        "While we've set a fair market price of $2,500, we're open to reasonable offers. Use the 'Make an Offer' button to submit your proposal.",
    },
    {
      question: "What happens after I purchase?",
      answer:
        "You'll receive immediate confirmation and detailed transfer instructions. Our team will assist you throughout the entire process to ensure a smooth transition.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-neon-cyan">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white hover:text-neon-cyan">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

