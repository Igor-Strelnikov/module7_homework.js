// Задание 1 7.3 Прототип и конструктор объекта  -


// Задание 2  7.3 Прототип и конструктор объекта -


// Задание 3  7.3 Прототип и конструктор объекта
const emptyObj = Object.create(null)

// Задание 4  7.4 ООП в JS -

// создаем прототип
const Room = function (name, power) {
    this.name = name;
    this.power = power;
    this.connect = false;
  };
  // создаем метод прототипа
  Room.prototype.connected = function () {
      console.log(`${this.name} подключен в сеть`);
      this.connect = true;
  };
  Room.prototype.unconnected = function () {
      console.log(`${this.name} выключен в сеть`);
      this.connect = false;
  };
  function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.connect = true;
  }
  Lamp.prototype = new Room();
  const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
  tableLamp.unconnect();
  console.log(tableLamp)
