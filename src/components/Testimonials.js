import Image from "next/image"

export default function Testimonials({testimonials}){
  return(
    <section className="py-12 md:py-16 px-6 md:px-10 lg:px-16 mb-10 overflow-hidden">
            <div className="max-w-5xl mx-auto">
              <div data-aos="fade-down" className="text-center mb-7">
                <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
                  <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                    TESTIMONIALS
                  </span>
                </div>
              </div>
    
              <h1
                data-aos="fade-down"
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 mb-10 leading-tight px-4"
              >
                Professionals use rewind to get
                <br className="hidden md:block" />
                more done, faster.
              </h1>
    
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 md:p-7 transition-shadow relative pl-8 md:pl-12"
                    data-aos="zoom-in"
                  >
                    <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
                      &quot; {testimonial.quote} &quot;
                    </blockquote>
    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover absolute -left-3 md:-left-5 -bottom-5"
                          width={64}
                          height={64}
                        />
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900">
                            {testimonial.name}
                          </h3>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm md:text-base">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}