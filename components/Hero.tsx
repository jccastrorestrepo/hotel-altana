export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col-reverse items-center gap-16 px-8 py-12 lg:flex-row">

        {/* ================= TEXTO ================= */}

        <div className="w-full lg:w-2/5">

          <img
            src="/logo.png"
            alt="Hotel Altana"
            className="mb-8 w-40"
          />

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Hospédate en el corazón de
            <span className="block text-amber-700">
              San Antonio
            </span>
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-500">
            Cali, Colombia
          </p>

          <p className="mt-6 text-xl leading-9 text-gray-600">
            Habitaciones cómodas, desayuno incluido, excelente ubicación y
            atención personalizada. Reserva directamente con nosotros y obtén
            la mejor tarifa, sin intermediarios.
          </p>

          {/* BOTONES */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/573183507218"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-10 py-5 text-lg font-bold text-white shadow-lg transition duration-300 hover:bg-green-700 hover:shadow-green-500/40"
            >
              Reservar por WhatsApp
            </a>

            <a
              href="#habitaciones"
              className="rounded-xl border border-gray-300 px-8 py-5 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Ver habitaciones
            </a>

          </div>

          {/* BENEFICIOS */}

          <div className="mt-10 grid grid-cols-2 gap-4 text-gray-700">

            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span>Sin intermediarios</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span>Mejor tarifa garantizada</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span>Desayuno incluido</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span>Excelente ubicación</span>
            </div>

          </div>

          {/* CONFIANZA */}

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">

            <div className="text-xl text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-2 font-semibold text-gray-800">
              Calificación 4.6 / 5 en Google
            </p>

            <p className="mt-1 text-gray-600">
              Atención personalizada desde tu primera consulta.
            </p>

          </div>

        </div>

        {/* ================= FOTO ================= */}

        <div className="relative w-full lg:w-3/5">

          <img
            src="/hotel-altana.jpg"
            alt="Hotel Altana"
            className="w-full rounded-3xl shadow-2xl"
          />

          {/* TARJETA FLOTANTE */}

          <div className="absolute bottom-6 right-6 hidden w-72 rounded-2xl bg-white p-5 shadow-2xl lg:block">

            <h3 className="mb-3 text-lg font-bold text-gray-900">
              ¿Por qué elegir Hotel Altana?
            </h3>

            <div className="space-y-3 text-gray-700">

              <div className="flex items-center gap-3">
                <span className="text-xl">🍳</span>
                <span>Desayuno incluido</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">📶</span>
                <span>WiFi de alta velocidad</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">❄</span>
                <span>Aire acondicionado</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span>Barrio San Antonio</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}