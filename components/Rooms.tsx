import {
  Snowflake,
  Wifi,
  Tv,
  Bath,
  UtensilsCrossed,
  Users,
} from "lucide-react";

export default function Rooms() {
  const rooms = [
    {
      title: "Habitación Individual",
      capacity: "1 huésped",
      image: "/images/habitacion1.jpg",
      price: "COP $100.000",
      ideal: "Ideal para viajeros de negocios",
      description:
        "Perfecta para quienes buscan comodidad, tranquilidad y una excelente ubicación.",
    },
    {
      title: "Habitación Doble",
      capacity: "Hasta 2 huéspedes",
      image: "/images/habitacion2.jpg",
      price: "COP $130.000",
      ideal: "Ideal para parejas",
      description:
        "Disfruta una estadía confortable con espacios ideales para compartir.",
    },
    {
      title: "Habitación Triple",
      capacity: "Hasta 3 huéspedes",
      image: "/images/habitacion3.jpg",
      price: "COP $160.000",
      ideal: "Ideal para familias o grupos",
      description:
        "La mejor opción para viajar acompañado sin renunciar a la comodidad.",
    },
  ];

  return (
    <section id="habitaciones" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-stone-900">
            Nuestras habitaciones
          </h2>

          <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
            Elige la acomodación perfecta para tu viaje y disfruta una
            excelente estadía en el corazón del tradicional barrio
            San Antonio, Cali.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {rooms.map((room) => (

            <div
              key={room.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <img
                src={room.image}
                alt={room.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold text-stone-900">
                  {room.title}
                </h3>

                <div className="mt-3 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  {room.ideal}
                </div>

                <div className="mt-5 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 p-5 text-center">

                  <p className="text-xs font-semibold uppercase tracking-widest text-green-700">
                    Desde
                  </p>

                  <p className="mt-1 text-4xl font-extrabold text-green-700">
                    {room.price}
                  </p>

                  <p className="mt-2 text-sm text-stone-500">
                    Tarifas sujetas a disponibilidad y temporada.
                  </p>

                </div>

                <p className="mt-5 text-stone-600 leading-7">
                  {room.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-green-700">

                  <Users size={20} />

                  <span>{room.capacity}</span>

                </div>

                <div className="mt-6 space-y-4 text-stone-700">

                  <div className="flex items-center gap-3">
                    <Snowflake size={18} className="text-green-600" />
                    <span>Aire acondicionado</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Wifi size={18} className="text-green-600" />
                    <span>WiFi de alta velocidad</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Tv size={18} className="text-green-600" />
                    <span>Smart TV</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Bath size={18} className="text-green-600" />
                    <span>Baño privado</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <UtensilsCrossed size={18} className="text-green-600" />
                    <span>Desayuno incluido</span>
                  </div>

                </div>

                <a
                  href="https://wa.me/573183507218?text=Hola%20,%0A%0Aestoy%20interesado%20en%20hospedarme%20con%20ustedes.%0A%0AMe%20gustaría%20consultar%20la%20disponibilidad%20y%20la%20mejor%20tarifa%20para%20las%20fechas%20que%20necesito.%0A%0AQuedo%20atento.%20Muchas%20gracias."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-xl bg-green-600 py-4 text-center text-lg font-bold text-white shadow-lg transition duration-300 hover:bg-green-700 hover:shadow-green-500/30"
                >
                  Reservar esta habitación
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}