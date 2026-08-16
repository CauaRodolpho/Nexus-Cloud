import { Star } from 'lucide-react'
import { TESTIMONIALS_DATA } from '@/data'
import { ScrollStagger } from '@/components/motion/scroll-stagger'

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Confiado por empresas que não podem parar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mais de 50.000 clientes em 40+ países confiam na Nexus Cloud.
          </p>
        </div>

        <ScrollStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS_DATA.map((testimonial) => (
              <figure
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5" aria-label={`${testimonial.rating} de 5 estrelas`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {testimonial.content}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-xs font-semibold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
