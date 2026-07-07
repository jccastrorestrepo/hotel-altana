import {
  MapPin,
  MessageCircle,
  BadgeDollarSign,
  MoonStar,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Ubicación privilegiada",
    description:
      "En pleno corazón de San Antonio, a pocos minutos de los principales atractivos de Cali.",
  },
  {
    icon: MessageCircle,
    title: "Atención personalizada",
    description:
      "Reserva directamente por WhatsApp y recibe atención rápida, cercana y sin intermediarios.",
  },
  {
    icon: BadgeDollarSign,
    title: "Mejor tarifa reservando directo",
    description:
      "Sin comisiones de plataformas. Siempre obtendrás nuestro mejor precio.",
  },
  {
    icon: MoonStar,
    title: "Descanso garantizado",
    description:
      "Ambiente tranquilo, habitaciones cómodas y todo lo necesario para disfrutar tu estadía.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900">
            ¿Por qué elegir Hotel Altana?
          </h2>

          <p className="mt-4 text-lg text-stone-600">
            Más que una habitación, ofrecemos una excelente experiencia en Cali.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="h-12 w-12 text-green-600 mb-6" />

                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-stone-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}