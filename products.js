const products = [
  {
    id: 'good-morning',
    name: 'Good Morning',
    price: 2500,
    currency: 'CAD',
    category: 'Clothes!',
    image: '/product-images/good-morning/pi.png',
    images: [
      '/product-images/good-morning/pi.png',
      '/product-images/good-morning/3.png',
      '/product-images/good-morning/2.png',
      '/product-images/good-morning/4.png',
    ],
    shortDescription:
        "Rise and shine!",
    longDescription:
        "Day 8 of Areeb's Daily Draw. Rise and shine with this 100% Cotton Tee, meticulously block-printed and designed by Areeb in Moncton, New Brunswick, Canada. Conquer the day!",
    sizes: [
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: false },
    ],
  },
  {
    id: '365',
    name: '365',
    price: 7500,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/365/365-small.jpg',
    images: [
      '/product-images/365/365-small.jpg',
    ],
    shortDescription:
        "Areeb's Daily Draw'd!",
    longDescription:
        "Areeb's Daily Draw! A documentation of my 2021 through 365 drawings. A high-resolution art print on glossy poster paper, signed and numbered by Areeb. Edition of 365.",
    sizes: [
      { size: '24"x36"', available: true },
    ],
  },
  {
    id: 'killing-it',
    name: 'Killing It',
    price: 1700,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/killing-it/sqr.jpg',
    images: [
      '/product-images/killing-it/land.jpg',
    ],
    shortDescription:
        "Yeaaah!!!!!!",
    longDescription:
        "Day 287 of Areeb's Daily Draw. Not sure what we're killing, but it is being killed. An art print on heavyweight museum-quality paper, signed and numbered by Areeb. Edition of 30.",
    sizes: [
      { size: '10"x8"', available: true },
      { size: '17"x11"', available: true },
    ],
  },
  {
    id: 'draw-or-die',
    name: 'Draw or Die',
    price: 1700,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/draw-or-die/draw-or-die-s.jpg',
    images: [
      '/product-images/draw-or-die/draw-or-die.jpg',
    ],
    shortDescription:
        "Eek!",
    longDescription:
        "Day 361 of Areeb's Daily Draw. Draw or die! It's actually not that dire, but drawing is cool. I like to draw. An art print on heavyweight museum-quality paper, signed and numbered by Areeb. Edition of 30.",
    sizes: [
      { size: '8"x10"', available: true },
      { size: '11"x17"', available: true },
    ],
  },
  {
    id: 'silly-sailing',
    name: 'Silly Sailing',
    price: 1700,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/silly-sailing/1.png',
    images: [
      '/product-images/silly-sailing/1.png',
    ],
    shortDescription:
        "Not so smoothly.",
    longDescription:
        "Day 346 of Areeb's Daily Draw. Sometimes the journey isn't very smooth, and that's okay! An art print on heavyweight museum-quality paper, signed and numbered by Areeb. Edition of 30.",
    sizes: [
      { size: '8"x10"', available: true },
      { size: '11"x17"', available: true },
    ],
  },
  {
    id: 'sunday-satisfaction',
    name: 'Sunday Satisfaction',
    price: 1700,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/sunday-satisfaction/small.png',
    images: [
      '/product-images/sunday-satisfaction/1.png',
    ],
    shortDescription:
        "I am not afraid!",
    longDescription:
        "Day 339 of Areeb's Daily Draw. No more Sunday Scaries! An art print on heavyweight-museum quality paper signed by Areeb. Edition of 30.",
    sizes: [
      { size: '10"x10"', available: true },
    ],
  },
  {
    id: 'brunch-buds',
    name: 'Brunch Buds',
    price: 1700,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/brunch-buds/1.png',
    images: [
      '/product-images/brunch-buds/1.png',
    ],
    shortDescription:
        "What's better!?",
    longDescription:
        "Day 314 of Areeb's Daily Draw. I love brunch, and I love my friends even more! An art print on heavyweight museum-quality paper, signed and numbered by Areeb. Edition of 30.",
    sizes: [
      { size: '10"x10"', available: true },
    ],
  },
  {
    id: 'wild-beast',
    name: '"I am a wild beast"',
    price: 1700,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/wild-beast/sqr.jpg',
    images: [
      '/product-images/wild-beast/1.jpg',
    ],
    shortDescription:
        "Aaaa!",
    longDescription:
        "Day 342 of Areeb's Daily Draw. Everything's possible when you're an animal. An art print on heavyweight museum-quality paper, signed and numbered by Areeb. Edition of 30.",
    sizes: [
      { size: '8"x10"', available: true },
    ],
  },
  {
    id: 'blond-night',
    name: 'Blond Night',
    price: 1700,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/blond-night/square.png',
    images: [
      '/product-images/blond-night/1.png',
    ],
    shortDescription:
        "Ginger!",
    longDescription:
        "Day 317 of Areeb's Daily Draw. Blond Night! Let's go blond (ginger). An art print on heavyweight museum-quality paper, signed and numbered by Areeb. Edition of 30.",
    sizes: [
      { size: '8"x10"', available: true },
      { size: '11"x17"', available: true },
    ],
  },
  {
    id: 'earlier',
    name: '"I gotta do these earlier"',
    price: 1700,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/earlier/sqr.jpg',
    images: [
      '/product-images/earlier/1.jpg',
    ],
    shortDescription:
        "Very good advice",
    longDescription:
        "Day 71 of Areeb's Daily Draw. I give myself very good advice, but I very seldom follow it. That explains the trouble I'm always in. An art print on heavyweight museum-quality paper, signed and numbered by Areeb. Edition of 30.",
    sizes: [
      { size: '8"x10"', available: true },
    ],
  },
  {
    id: 'unlisted',
    name: 'Unlisted Daily Draw',
    price: 2000,
    currency: 'CAD',
    category: 'Printed!',
    image: '/product-images/other/1.jpg',
    images: [
      '/product-images/other/1.jpg',
    ],
    shortDescription:
        "There's more to choose from!",
    longDescription:
        "Can't find the daily draw you're looking for? That's understandable! There are a few of them! To purchase a print of an unlisted daily draw, browse at www.areebsdailydraw.com/calendar, send the date of the draw to rasulareeb@gmail.com with the subject line \"UNLISTED DAILY DRAW,\" along with any notes for me about desired format. Afterward, complete your purchase here! You'll receive an art print on heavyweight museum-quality paper, signed and numbered by Areeb.",
    sizes: [
      { size: '10"x10"', available: true },
      { size: '8"x10"', available: true },
    ],
  },
];

export default products;
