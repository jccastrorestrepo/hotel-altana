import {
  MapPin,
  Phone,
  Coffee,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-2 items-center">

          <div>

            <h2 className="text-4xl font-bold">
              Hotel Altana
            </h2>

            <p className="mt-5 text-stone-300 leading-8 max-w-xl">
              Tu lugar tranquilo en el corazón de San Antonio, Cali.
              Reserva directamente con nosotros y obtén atención
              personalizada desde el primer momento.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <MapPin className="text-green-500" />
                <span>Barrio San Antonio - Cali, Colombia</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-500" />
                <span>+57 318 350 7218</span>
              </div>

              <div className="flex items-center gap-3">
                <Coffee className="text-green-500" />
                <span>Desayuno incluido</span>
              </div>

            </div>

          </div>

          <div className="text-center">

            <h3 className="text-3xl font-bold">
              ¿Listo para reservar?
            </h3>

            <p className="mt-4 text-stone-300">
              Escríbenos directamente por WhatsApp.
            </p>

            <a
              href="https://wa.me/573183507218"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-green-600 px-10 py-5 text-xl font-bold transition hover:bg-green-700"
            >
              <MessageCircle />
              Reservar por WhatsApp
            </a>

          </div>

        </div>

        <div className="mt-14 border-t border-stone-700 pt-8 text-center text-stone-400">

          © 2026 Hotel Altana · Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}