import {
  BadgeDollarSign,
  MessageCircle,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export default function DirectBooking() {
  const items = [
    {
      icon: BadgeDollarSign,
      title: "Mejor tarifa garantizada",
      text: "Reservando directamente con nosotros siempre obtendrás nuestro mejor precio.",
    },
    {
      icon: MessageCircle,
      title: "Atención inmediata",
      text: "Hablas directamente con nosotros por WhatsApp, sin intermediarios.",
    },
    {
      icon: ShieldCheck,
      title: "Reserva segura",
      text: "Confirmación rápida y atención personalizada antes y durante tu estadía.",
    },
    {
      icon: Clock3,
      title: "Mayor flexibilidad",
      text: "Podemos ayudarte con cambios y solicitudes especiales de forma más ágil.",
    },
  ];

  return (
    <section className="bg-green-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            ¿Por qué reservar directamente con Hotel Altana?
          </h2>

          <p className="mt-4 text-xl text-green-100">
            Evita intermediarios y recibe atención personalizada desde el primer momento.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 text-center text-stone-800 shadow-xl"
              >

                <Icon
                  className="mx-auto mb-5 text-green-700"
                  size={48}
                />

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-7 text-stone-600">
                  {item.text}
                </p>

              </div>

            );

          })}

        </div>

        <div className="mt-20 text-center">

          <a
            href="https://wa.me/573183507218"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-white px-10 py-5 text-xl font-bold text-green-700 transition hover:scale-105"
          >
            Reservar ahora por WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}