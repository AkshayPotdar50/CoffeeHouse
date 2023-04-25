class Coffee {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class AddOn {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(coffee, addOns) {
    this.coffee = coffee;
    this.addOns = addOns;
  }

  getTotalPrice() {
    let totalPrice = this.coffee.price;
    this.addOns.forEach((addOn) => {
      totalPrice += addOn.price;
    });
    return totalPrice;
  }

  displayReceipt() {
    console.log(`Coffee: ${this.coffee.name}`);
    console.log("Add-ons:");
    this.addOns.forEach((addOn) => {
      console.log(`- ${addOn.name} (${addOn.price})`);
    });
    console.log(`Total price: ${this.getTotalPrice()}`);
  }
}

const coffees = [
  new Coffee("Espresso", 60),
  new Coffee("Cappuccino", 80),
  new Coffee("Latte", 100),
];

const addOns = [
  new AddOn("Milk", 10),
  new AddOn("Cream", 15),
  new AddOn("Latte", 25),
];

function displayMenu() {
  console.log("Menu:");
  coffees.forEach((coffee, index) => {
    console.log(`${index + 1}. ${coffee.name} (${coffee.price})`);
  });
}

function takeOrder() {
  const coffeeIndex = prompt("Enter the coffee number to order:");
  const coffee = coffees[coffeeIndex - 1];

  const chosenAddOns = [];
  while (true) {
    const addOnIndex = prompt(
      "Enter the add-on number to add (or press enter to finish):"
    );
    if (addOnIndex === "") {
      break;
    }
    const addOn = addOns[addOnIndex - 1];
    chosenAddOns.push(addOn);
  }

  const order = new Order(coffee, chosenAddOns);
  return order;
}

function main() {
  while (true) {
    displayMenu();
    const order = takeOrder();
    order.displayReceipt();

    const continueOrdering = prompt("Do you want to order again? (y/n)");
    if (continueOrdering.toLowerCase() !== "y") {
      break;
    }
  }
}

main();
