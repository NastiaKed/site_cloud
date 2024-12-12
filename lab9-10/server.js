const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const cars = [
  { id: 1, image: '/assets/IMG_7985.jpg', brand: 'Кролик', model: 'Чорничка', power: 15, maxSpeed: 15, price: 600 },
  { id: 2, image: '/assets/IMG_8129.jpg', brand: 'Кролик', model: 'Жабка', power: 15, maxSpeed: 15, price: 800 },
  { id: 3, image: '/assets/IMG_8111.jpg', brand: 'Пінгвін', model: '', power: 15, maxSpeed: 20, price: 500 },
  { id: 4, image: '/assets/IMG_7980.jpg', brand: 'Котик', model: 'Keychain', power: 3, maxSpeed: 4, price: 400 },
  { id: 5, image: '/assets/IMG_8355.jpg', brand: 'Оленя', model: '', power: 5, maxSpeed: 10, price: 200 },
  { id: 6, image: '/assets/IMG_8142.jpg', brand: 'Черепашка', model: 'Полуничка', power: 30, maxSpeed: 10, price: 700 },
];


let cart = [];


app.use('/assets', express.static(path.join(__dirname, 'public/assets')));


app.get('/cars', (req, res) => {
  res.json(cars);
});


app.get('/cars/:id', (req, res) => {
  const carId = parseInt(req.params.id, 10);
  const car = cars.find((c) => c.id === carId);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});


app.get('/cart', (req, res) => {
  const cartWithDetails = cart.map((cartItem) => {
    const carDetails = cars.find((car) => car.id === cartItem.id);
    return {
      ...cartItem,
      ...carDetails,
    };
  });

  res.json(cartWithDetails || []); 
});

app.post('/cart', (req, res) => {
  const { id, configuration, count } = req.body;

  const existingItem = cart.find((item) => item.id === id && item.configuration === configuration);
  if (existingItem) {
    existingItem.count += count;
  } else {
    cart.push({ id, configuration, count });
  }

  res.status(201).json(cart);
});


app.put('/cart/:id', (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const item = cart.find((item) => item.id === parseInt(id, 10));
  if (item) {
    item.count = quantity;
    res.status(200).json(cart);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});


app.delete('/cart/:id', (req, res) => {
  const { id } = req.params;

  cart = cart.filter((item) => item.id !== parseInt(id, 10));
  res.status(200).json(cart);
});


app.delete('/cart', (req, res) => {
  cart = [];
  res.status(200).json({ message: 'Кошик очищено' });
});


app.post('/cart/checkout', (req, res) => {
  if (cart.length === 0) {
    return res.status(400).json({ error: 'Кошик порожній' });
  }


  cart = [];
  res.status(200).json({ message: 'Покупка успішно завершена' });
});


const PORT = 5007;
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
