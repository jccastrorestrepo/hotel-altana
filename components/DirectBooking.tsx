import {
  BadgeDollarSign,
  Handshake,
  BadgeCheck,
  Coffee,
  MapPinned,
} from "lucide-react";

export default function DirectBooking() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Reserva directamente con Hotel Altana
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Reserva con tranquilidad y disfruta de una atención personalizada,
            la mejor tarifa y la comodidad de comunicarte directamente con
            nuestro equipo.
          </p>

        </div>

        {/* Tarjetas */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <BadgeDollarSign
              size={46}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              Mejor tarifa
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Obtén siempre el mejor precio reservando directamente con nosotros.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Handshake
              size={46}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              Sin intermediarios
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Habla directamente con nuestro equipo desde el primer momento.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <BadgeCheck
              size={46}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              Confirmación inmediata
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Recibe respuesta rápida para asegurar tu reserva.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Coffee
              size={46}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              Desayuno incluido
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Empieza cada mañana disfrutando de un delicioso desayuno.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <MapPinned
              size={46}
              className="mx-auto text-green-600"
            />

            <h3 className="mt-6 text-lg font-bold text-gray-900">
              Excelente ubicación
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              En el corazón del tradicional barrio San Antonio, Cali.
            </p>

          </div>

        </div>

        {/* Botón */}

        <div className="mt-16 text-center">

          <a
            href="https://wa.me/573183507218?text=Hola%20,%0A%0Aestoy%20interesado%20en%20hospedarme%20con%20ustedes.%0A%0AMe%20gustaría%20consultar%20la%20disponibilidad%20y%20la%20mejor%20tarifa%20para%20las%20fechas%20que%20necesito.%0A%0AQuedo%20atento.%20Muchas%20gracias."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl bg-green-600 px-10 py-5 text-lg font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-700"
          >
            Reservar por WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}