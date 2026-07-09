export default function Testimonials() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Lo que valoran nuestros huéspedes
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Cada visita es una oportunidad para brindar una experiencia
            cómoda, tranquila y con atención personalizada.
          </p>

        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {/* Tarjeta */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

            <div className="text-2xl text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-5 leading-8 text-gray-600 italic">
              "Excelente ubicación para recorrer San Antonio caminando.
              El ambiente es tranquilo y el personal siempre está dispuesto
              a ayudar."
            </p>

          </div>

          {/* Tarjeta */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

            <div className="text-2xl text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-5 leading-8 text-gray-600 italic">
              "Habitaciones cómodas, muy limpias y un desayuno delicioso.
              Una excelente relación calidad-precio."
            </p>

          </div>

          {/* Tarjeta */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

            <div className="text-2xl text-yellow-500">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-5 leading-8 text-gray-600 italic">
              "La atención fue excelente desde la reserva hasta el check-out.
              Sin duda volvería a hospedarme."
            </p>

          </div>

        </div>

        <div className="mt-14 text-center">

          <p className="text-2xl font-bold text-gray-900">
            ⭐ 4.6 / 5 en Google
          </p>

          <p className="mt-2 text-gray-600">
            Gracias a la confianza de nuestros huéspedes.
          </p>

          <a
            href="https://wa.me/573183507218"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-2xl bg-green-600 px-10 py-5 text-lg font-bold text-white transition hover:bg-green-700"
          >
            Reservar por WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}