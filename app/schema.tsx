export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",

    name: "Hotel Altana",

    url: "https://www.hotelaltana.com",

    image: [
      "https://www.hotelaltana.com/hero.jpg",
      "https://www.hotelaltana.com/logo.png"
    ],

    logo: "https://www.hotelaltana.com/logo.png",

    telephone: "+57 3183507218",

    email: "altana.hotelcali@gmail.com",

    description:
      "Hotel Altana ofrece habitaciones cómodas en el tradicional barrio San Antonio de Cali. Excelente ubicación, desayuno incluido, WiFi gratuito y reserva directa por WhatsApp.",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Cl. 1 Oe. #4-26",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      postalCode: "760044",
      addressCountry: "CO"
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.447,
      longitude: -76.546
    },

    checkinTime: "15:00",

    checkoutTime: "12:00",

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi gratuito",
        value: true
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Desayuno incluido",
        value: true
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Aire acondicionado",
        value: true
      }
    ],

    sameAs: [
      "https://www.instagram.com/hotelaltana"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}