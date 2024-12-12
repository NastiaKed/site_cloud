

class Car {
  constructor(image, brand, model, power, maxSpeed) {
    this.image = image;
    this.brand = brand;
    this.model = model;
    this.power = power;
    this.maxSpeed = maxSpeed;
  }
}


const cars = [
  { id: 1, image: '/assets/IMG_7985.jpg', brand: 'Кролик', model: 'Чорничка', power: 15, maxSpeed: 15, price: 600 },
  { id: 2, image: '/assets/IMG_8129.jpg', brand: 'Кролик', model: 'Жабка', power: 15, maxSpeed: 15, price: 800 },
  { id: 3, image: '/assets/IMG_8111.jpg', brand: 'Пінгвін', model: '', power: 15, maxSpeed: 20, price: 500 },
  { id: 4, image: '/assets/IMG_7980.jpg', brand: 'Котик', model: 'Keychain', power: 3, maxSpeed: 4, price: 400 },
  { id: 5, image: '/assets/IMG_8355.jpg', brand: 'Оленя', model: '', power: 5, maxSpeed: 10, price: 200 },
  { id: 6, image: '/assets/IMG_8142.jpg', brand: 'Черепашка', model: 'Полуничка', power: 30, maxSpeed: 10, price: 700 },
];





module.exports = cars; 
