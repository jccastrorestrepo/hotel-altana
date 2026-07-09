export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-14 lg:grid-cols-2 items-start">

          {/* ===================== IZQUIERDA ===================== */}

          <div className="flex flex-col">

            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Hotel Altana
            </h2>

            <p className="text-gray-300 leading-relaxed mb-10">
              Tu lugar tranquilo en el corazón del tradicional barrio
              San Antonio, Cali. Reserva directamente con nosotros y
              disfruta de una atención personalizada desde el primer
              momento.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-5.686 7-11a7 7 0 10-14 0c0 5.314 7 11 7 11z"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    fill="currentColor"
                  />
                </svg>

                <span className="text-gray-300">
                  Cl. 1 Oe. #4-26, Barrio San Antonio, Cali,
                  Valle del Cauca
                </span>

              </div>

              <div className="flex items-center gap-4">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049.927c.3-.921 1.603-.921 1.902 0l1.072 3.302a1 1 0 00.95.69h3.472c.969 0 1.371 1.24.588 1.81l-2.81 2.042a1 1 0 00-.364 1.118l1.073 3.302c.3.922-.755 1.688-1.54 1.118l-2.81-2.042a1 1 0 00-1.176 0l-2.81 2.042c-.784.57-1.838-.196-1.539-1.118l1.072-3.302a1 1 0 00-.364-1.118L2.02 6.73c-.783-.57-.38-1.81.588-1.81H6.08a1 1 0 00.95-.69L8.1.927z"/>
                </svg>

                <span className="text-gray-300">
                  Calificación 4.6 / 5 en Google
                </span>

              </div>

              <div className="flex items-center gap-4">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.97 1.657l.516 3.095a2 2 0 01-.577 1.763l-1.27 1.27a16 16 0 007.072 7.072l1.27-1.27a2 2 0 011.763-.577l3.095.516A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="text-gray-300">
                  +57 318 350 7218
                </span>

              </div>

              <div className="flex items-center gap-4">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 8h1a2 2 0 012 2v1a4 4 0 01-4 4H6a4 4 0 01-4-4V8h16zm0 0V5H6v3"
                  />
                </svg>

                <span className="text-gray-300">
                  Desayuno incluido
                </span>

              </div>

            </div>

            {/* ===================== RESERVAR ===================== */}

            <div className="mt-12 border-t border-gray-700 pt-8">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <h3 className="text-2xl font-bold">
                  ¿Listo para reservar?
                </h3>

                <a
                  href="https://wa.me/573183507218?text=Hola%20,%0A%0Aestoy%20interesado%20en%20hospedarme%20con%20ustedes.%0A%0AMe%20gustaría%20consultar%20la%20disponibilidad%20y%20la%20mejor%20tarifa%20para%20las%20fechas%20que%20necesito.%0A%0AQuedo%20atento.%20Muchas%20gracias."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-2xl bg-green-500 px-8 py-3 text-lg font-bold shadow-lg hover:bg-green-600 transition duration-300"
                >
                  💬 Reservar por WhatsApp
                </a>

              </div>

              <p className="mt-5 text-gray-300 leading-relaxed">
                Escríbenos directamente por WhatsApp y recibe atención
                personalizada. Estaremos encantados de ayudarte con tu
                reserva y resolver cualquier inquietud.
              </p>

            </div>

          </div>

          {/* ===================== DERECHA ===================== */}

          <div className="flex flex-col justify-center">
                        <a
              href="https://maps.google.com/?q=Cl.+1+Oe.+4-26,+Cali,+Valle+del+Cauca"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/images/mapa-ubicacion.png"
                alt="Ubicación Hotel Altana"
                className="block w-full rounded-2xl border border-gray-700 shadow-2xl transition duration-300 hover:scale-[1.02]"
              />
            </a>

            <a
              href="https://maps.google.com/?q=Cl.+1+Oe.+4-26,+Cali,+Valle+del+Cauca"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-xl border border-gray-600 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-800"
            >
              📍 Abrir ubicación en Google Maps
            </a>

          </div>

        </div>

        {/* ===================== COPYRIGHT ===================== */}

        <div className="mt-14 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Hotel Altana · Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}