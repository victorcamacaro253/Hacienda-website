import img1 from '../../assets/images/fiesta-cosecha.jpg';
import img2 from '../../assets/images/ganaderia-sostenible.jpg';
import img3 from '../../assets/images/DIA-LACTEA.jpg';
import img4 from '../../assets/images/talleres.jpg';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            image: img1,
            alt: "Evento especial en la hacienda",
            title: "Fiesta de la Cosecha 2025",
            date: "Publicado el 25 de Marzo, 2025",
            excerpt: "Únete a nosotros para celebrar la temporada de cosecha. Habrá actividades para toda la familia, degustación de nuestros productos frescos y mucho más.",
            slug: "/blog/fiesta-de-la-cosecha-2025"
        },
        {
            id: 2,
            image: img2,
            alt: "Consejos para una ganadería sostenible",
            title: "Cómo Practicar una Ganadería Sostenible",
            date: "Publicado el 15 de Marzo, 2025",
            excerpt: "La sostenibilidad es clave en nuestra operación. En este artículo, compartimos consejos prácticos sobre cómo cuidar nuestros animales y el medio ambiente.",
            slug: "/blog/ganaderia-sostenible"
        },
        {
            id: 3,
            image: img3,
            alt: "Lanzamiento de productos lácteos",
            title: "Nuevo Lanzamiento de Productos Lácteos",
            date: "Publicado el 5 de Marzo, 2025",
            excerpt: "Estamos emocionados de anunciar el lanzamiento de nuestra línea de productos lácteos orgánicos, hechos con la mejor leche de nuestra hacienda.",
            slug: "/blog/nuevo-lanzamiento-productos-lacteos"
        },
        {
            id: 4,
            image: img4,
            alt: "Taller de Agricultura Sostenible",
            title: "Taller de Agricultura Sostenible en Hacienda Villa Blanca",
            date: "Publicado el 10 de Abril, 2025",
            excerpt: "Te invitamos a participar en nuestro taller de agricultura sostenible, donde aprenderás técnicas innovadoras para cultivar de manera responsable y respetuosa con el medio ambiente. ¡No te lo pierdas!",
            slug: "/blog/taller-agricultura-sostenible"
        },
        // Add more posts if needed to fill the 4-column layout
      
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-screen-2xl mx-auto px-4"> {/* Increased max-width */}
                <h2 className="text-6xl font-extrabold text-center text-[#f1683a] mb-8 relative">
                    Últimas Noticias
                  <span className="absolute bottom-[-0.75rem] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#f07a52] to-[#ec7c3b] rounded"></span>

                </h2>
                <p className="text-lg text-center text-gray-700 mb-12">
                    Mantente al día con todo lo que sucede en Hacienda Villa Blanca. Conoce nuestros eventos, nuevos productos y más.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> {/* Added xl:grid-cols-4 */}
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <img 
                                src={post.image} 
                                alt={post.alt} 
                                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" 
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-orange-700 mb-2">{post.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                                <a 
                                    href={post.slug} 
                                    className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Leer más
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/blog"
                        className="inline-block px-6 py-3 bg-orange-500 text-white text-lg rounded hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Ver más artículos   
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;