export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-12 lg:grid-cols-2 items-start">

          {/* Información */}
          <div>

            <h3 className="text-4xl font-bold mb-5">
              Hotel Altana
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              Tu lugar tranquilo en el corazón del tradicional barrio
              San Antonio, Cali. Reserva directamente con nosotros y
              disfruta de una atención personalizada.
            </p>

            <div className="space-y-3 text-gray-300">

              <p>
                📍 Cl. 1 Oe. #4-26, Barrio San Antonio,
                Cali, Valle del Cauca
              </p>

              <p>
                ⭐ Calificación 4.6/5 en Google
              </p>

              <p>
                📞 +57 318 350 7218
              </p>

              <p>
                ☕ Desayuno incluido
              </p>

            </div>

          </div>

          {/* Reserva + mapa */}
          <div>

            <h3 className="text-3xl font-bold mb-3">
              ¿Listo para reservar?
            </h3>

            <p className="text-gray-300 mb-6">
              Escríbenos directamente por WhatsApp.
            </p>

            <a
              href="https://wa.me/573183507218"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 flex w-full items-center justify-center rounded-xl bg-green-500 px-6 py-4 text-lg font-semibold transition hover:bg-green-600"
            >
              💬 Reservar por WhatsApp
            </a>

            <p className="mb-3 text-sm text-gray-400">
              📍 Excelente ubicación en el barrio San Antonio
            </p>

            <a
              href="https://maps.google.com/?q=Cl.+1+Oe.+%234-26,+Cali,+Valle+del+Cauca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/mapa-ubicacion.png"
                alt="Ubicación Hotel Altana"
                className="w-full rounded-2xl border border-gray-700 shadow-2xl transition duration-300 hover:scale-[1.02]"
              />
            </a>

            <a
              href="https://maps.google.com/?q=Cl.+1+Oe.+%234-26,+Cali,+Valle+del+Cauca"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-xl border border-white px-6 py-3 transition hover:bg-white hover:text-gray-900"
            >
              📍 Abrir en Google Maps
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Hotel Altana · Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}