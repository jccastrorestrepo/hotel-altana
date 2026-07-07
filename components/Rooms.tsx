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
    },
    {
      title: "Habitación Doble",
      capacity: "Hasta 2 huéspedes",
      image: "/images/habitacion2.jpg",
    },
    {
      title: "Habitación Triple",
      capacity: "Hasta 3 huéspedes",
      image: "/images/habitacion3.jpg",
    },
  ];

  return (
    <section id="habitaciones" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900">
            Nuestras habitaciones
          </h2>

          <p className="text-stone-600 mt-4 text-lg">
            Elige la acomodación perfecta para tu viaje y disfruta una excelente
            estadía en el corazón de San Antonio, Cali.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {rooms.map((room) => (
            <div
              key={room.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <img
                src={room.image}
                alt={room.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-stone-900">
                  {room.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-green-700 font-semibold">
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
                  href="https://wa.me/573183507218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-xl bg-green-600 py-3 text-center font-bold text-white transition hover:bg-green-700"
                >
                  Reservar por WhatsApp
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}