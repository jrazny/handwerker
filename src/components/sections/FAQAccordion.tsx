import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { config } from '@/lib/config';

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {config.faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 py-2">
          <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-primary transition-colors hover:no-underline">
            {faq.frage}
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 leading-relaxed pt-2 pb-4">
            {faq.antwort}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
