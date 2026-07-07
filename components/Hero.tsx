export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col-reverse items-center gap-16 px-8 py-12 lg:flex-row">

        {/* Texto */}

        <div className="w-full lg:w-2/5">

          <img
            src="/logo.png"
            alt="Hotel Altana"
            className="mb-8 w-44"
          />

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Hospédate en el corazón de San Antonio
          </h1>

          <p className="mt-6 text-xl leading-9 text-gray-600">
            Atención personalizada, excelente ubicación y el mejor precio reservando directamente con nosotros.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/573183507218"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              Reservar por WhatsApp
            </a>

            <a
              href="#habitaciones"
              className="rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Ver habitaciones
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-lg text-gray-700">

            <div>✅ Reserva directa</div>

            <div>💲 Mejor tarifa garantizada</div>

            <div>🍳 Desayuno incluido</div>

          </div>

        </div>

        {/* Imagen */}

        <div className="w-full lg:w-3/5">

          <img
            src="/hotel-altana.jpg"
            alt="Hotel Altana"
            className="h-auto w-full rounded-3xl object-cover shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}