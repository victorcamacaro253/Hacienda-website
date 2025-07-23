import img1 from '../../assets/images/dicaprio.webp';
import img2 from '../../assets/images/messi.jpg';
import img3 from '../../assets/images/selenagomez.webp';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <article
      className="bg-white border border-[#ff7f50] rounded-2xl p-8 shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:border-green-700 relative overflow-hidden group"
      aria-labelledby={`testimonial-${testimonial.name}`}
    >
      {/* Decorative Quotation Mark */}
      <div className="text-[4rem] text-gray-200 absolute top-[-1rem] right-[-1rem] z-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30">
        “
      </div>

      {/* Profile Image */}
      <div className="w-24 h-24 mx-auto mb-6 relative z-10">
        <img
          src={testimonial.image}
          alt={`Portrait of ${testimonial.name}, ${testimonial.role}`}
          className="w-full h-full object-cover rounded-full border-4 border-[#ff7f50] transition-colors duration-300 hover:border-green-700"
          loading="lazy"
          style={{ aspectRatio: '1 / 1' }}
        />
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        {/* Testimonial Text */}
        <p
          id={`testimonial-${testimonial.name}`}
          className="text-gray-800 text-lg mb-4 leading-relaxed transition-colors duration-300 group-hover:text-orange-700"
        >
          {testimonial.content}
        </p>

        {/* Name and Role */}
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-indigo-500">{testimonial.role}</p>
        </div>

        {/* Rating Stars */}
        <div
          className="text-orange-400 text-xl cursor-pointer flex justify-center space-x-1"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < testimonial.rating ? 'text-orange-500' : 'text-gray-300'}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && console.log(`Rated ${i + 1} stars`)}
              onClick={() => console.log(`Rated ${i + 1} stars`)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: img1,
      name: 'Leonardo DiCaprio',
      role: 'Defensor del medio ambiente',
      content: '¡Sus prácticas sostenibles están revolucionando la agricultura moderna!',
      rating: 5,
    },
    {
      image: img2,
      name: 'Lionel Messi',
      role: 'Socio de nutrición deportiva',
      content: 'La calidad de sus productos orgánicos mantiene a nuestros atletas en el máximo rendimiento.',
      rating: 4,
    },
    {
      image: img3,
      name: 'Selena Gomez',
      role: 'Embajadora de bienestar',
      content: 'Su enfoque de la granja a la mesa se alinea perfectamente con mi filosofía de salud.',
      rating: 5,
    },
  ];

  return (
    <section
      className="bg-gradient-to-r from-[#fddbbb] via-[#eef1f1] to-[#f8af5b] py-16 scroll-smooth"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#f1683a] relative inline-block">
       Lo que dicen nuestros agricultores
            <span className="block w-16 h-1 bg-[#f1683a] absolute left-1/2 -bottom-2 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto mt-4">
          Descubra lo que nuestra comunidad agrícola tiene que decir sobre sus experiencias con nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;