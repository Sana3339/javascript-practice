let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

function removeFirst() {
  while (groceryList.length > 0) {
    let item = groceryList.shift();
    console.log(item);
  }
}

removeFirst();