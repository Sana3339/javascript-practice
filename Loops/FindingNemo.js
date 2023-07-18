let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let idx = 0; idx < fish.length; idx += 1) {
  console.log(fish[idx]);

  if (fish[idx] === "Nemo") {
    break;
  }
}