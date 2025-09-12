/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

function getHotelImages(hotelFolder) {
  const hotelPath = path.join(publicPath, hotelFolder);
  if (!fs.existsSync(hotelPath)) return [];
  return fs.readdirSync(hotelPath)
    .filter(file => file.endsWith('.jpg'))
    .map(file => `/public/${hotelFolder}/${file}`);
}

function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const roomTypes = [
  'Deluxe Suite', 'Executive Room', 'Standard Room', 'Family Suite',
  'Penthouse Suite', 'Ocean View Room', 'Mountain View Room',
  'Presidential Suite', 'Single Room', 'Double Room'
];

const amenitiesList = [
  'WiFi', 'TV', 'Minibar', 'Sea View', 'Breakfast Included', 'Air Conditioner',
  'Balcony', 'Private Pool', 'Kitchen', 'Hot Tub'
];

async function main() {
  console.log("🌱 Seeding started...");

  const hotels = [
    {
      name: 'Grand Palace Hotel',
      description: 'Luxury hotel with an amazing sea view.',
      location: 'Istanbul, Turkey',
      address: '123 Bosphorus Street, Istanbul',
      rating: 4.8,
      photos: getHotelImages('hotel1'),
      pricePerNight: 250.0,
    },
    {
      name: 'Mountain View Resort',
      description: 'Perfect place to relax with a scenic mountain view.',
      location: 'Alps, Switzerland',
      address: '45 Alpine Road, Switzerland',
      rating: 4.5,
      photos: getHotelImages('hotel2'),
      pricePerNight: 180.0,
    },
    {
      name: 'Ocean Breeze Hotel',
      description: 'Enjoy a breathtaking view of the ocean.',
      location: 'Malibu, USA',
      address: '678 Pacific Coast Highway, Malibu',
      rating: 4.7,
      photos: getHotelImages('hotel3'),
      pricePerNight: 220.0,
    },
  ];

  for (const hotelData of hotels) {
    const hotel = await prisma.hotel.create({ data: hotelData });
    console.log(`🏨 Hotel created: ${hotel.name} (${hotel.id})`);

    for (let i = 0; i < 10; i++) {
      const randomAmenities = amenitiesList.sort(() => 0.5 - Math.random()).slice(0, 4);
      const randomRoomType = roomTypes[i % roomTypes.length];
      const randomPrice = getRandomPrice(100, 500);
      const roomPhotos = getHotelImages(`hotel${(hotels.indexOf(hotelData) + 1)}`);

      const room = await prisma.room.create({
        data: {
          hotelId: hotel.id,
          type: randomRoomType,
          price: randomPrice,
          amenities: randomAmenities,
          photos: roomPhotos,
          isAvailable: Math.random() > 0.2,
        },
      });
      console.log(`   🛏️ Room created: ${room.type} - $${room.price}`);
    }
  }

  console.log("✅ Seeding finished!");
}

main()
  .catch((e) => {
    console.error("❌ Error while seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
