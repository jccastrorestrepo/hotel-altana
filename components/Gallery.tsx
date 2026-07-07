export default function Gallery() {
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
  ];

  return (
    <section className="bg-stone-100 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 text-center">

          <h2 className="text-3xl font-bold text-stone-900">
            Conoce Hotel Altana
          </h2>

          <p className="mt-3 text-stone-600">
            Descubre algunos espacios que disfrutarás durante tu estadía.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {images.map((image) => (

            <div
              key={image}
              className="overflow-hidden rounded-2xl shadow-lg"
            >

              <img
                src={image}
                alt="Hotel Altana"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}