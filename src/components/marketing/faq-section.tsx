import { Accordion, AccordionItem } from '@/components/ui'
import { FAQ_DATA } from '@/data'

export function FaqSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa saber antes de implantar sua VPS.
          </p>
        </div>

        <Accordion className="mt-12">
          {FAQ_DATA.map((faq) => (
            <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
