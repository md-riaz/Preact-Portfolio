import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

const Testimonials = () => (
    <section id="testimonials">
        <div class="container px-5 py-10 mx-auto text-center">
            <UsersIcon class="w-10 inline-block mb-4" />
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                Client Testimonials
            </h1>
            <div class="flex flex-wrap m-4">
                {testimonials.map((testimonial) => (
                    // eslint-disable-next-line react/jsx-key
                    <div class="p-4 md:w-1/2 w-full">
                        <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <TerminalIcon class="block w-8 text-gray-500 mb-4" />
                            <p class="leading-relaxed mb-6">{testimonial.quote}</p>
                            <div class="inline-flex items-center">
                                <img
                                    alt="testimonial"
                                    src={testimonial.image}
                                    class="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span class="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Testimonials;