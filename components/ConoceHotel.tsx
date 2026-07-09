<section className="bg-gradient-to-b from-white to-green-50 py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center max-w-3xl mx-auto">

      <h2 className="text-4xl font-bold text-gray-900">
        Reserva directamente con Hotel Altana
      </h2>

      <p className="mt-5 text-lg text-gray-600 leading-relaxed">
        Disfruta de una atención personalizada, la mejor tarifa y la
        tranquilidad de reservar directamente con nosotros.
      </p>

    </div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

      {/* Tarjeta */}

      <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition duration-300 text-center">

        <BadgeDollarSign
          size={42}
          className="mx-auto text-green-600 mb-5"
        />

        <h3 className="font-bold text-lg text-gray-900">
          Mejor tarifa
        </h3>

        <p className="mt-2 text-gray-600 text-sm">
          Siempre obtendrás el mejor precio reservando directamente.
        </p>

      </div>

      {/* Tarjeta */}

      <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition duration-300 text-center">

        <Handshake
          size={42}
          className="mx-auto text-green-600 mb-5"
        />

        <h3 className="font-bold text-lg text-gray-900">
          Sin intermediarios
        </h3>

        <p className="mt-2 text-gray-600 text-sm">
          Hablas directamente con nosotros desde el primer momento.
        </p>

      </div>

      {/* Tarjeta */}

      <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition duration-300 text-center">

        <BadgeCheck
          size={42}
          className="mx-auto text-green-600 mb-5"
        />

        <h3 className="font-bold text-lg text-gray-900">
          Confirmación inmediata
        </h3>

        <p className="mt-2 text-gray-600 text-sm">
          Respuesta rápida para asegurar tu reserva.
        </p>

      </div>

      {/* Tarjeta */}

      <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition duration-300 text-center">

        <Coffee
          size={42}
          className="mx-auto text-green-600 mb-5"
        />

        <h3 className="font-bold text-lg text-gray-900">
          Desayuno incluido
        </h3>

        <p className="mt-2 text-gray-600 text-sm">
          Comienza cada mañana con un delicioso desayuno.
        </p>

      </div>

      {/* Tarjeta */}

      <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition duration-300 text-center">

        <MapPinned
          size={42}
          className="mx-auto text-green-600 mb-5"
        />

        <h3 className="font-bold text-lg text-gray-900">
          Excelente ubicación
        </h3>

        <p className="mt-2 text-gray-600 text-sm">
          En el corazón del tradicional barrio San Antonio.
        </p>

      </div>

    </div>

    <div className="mt-14 flex justify-center">

      <a
        href="https://wa.me/573183507218"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl bg-green-600 px-10 py-5 text-lg font-bold text-white shadow-xl transition duration-300 hover:bg-green-700 hover:scale-105"
      >
        Reservar por WhatsApp
      </a>

    </div>

  </div>

</section>