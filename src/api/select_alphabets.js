const selectRandomItemsFromObject = function (obj, n) {
  const entries = Object.entries(obj);
  const numItems = Math.min(n, entries.length);
  const selectedEntries = [];

  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * entries.length);
    selectedEntries.push(entries[randomIndex]);
    entries.splice(randomIndex, 1); // Remove the selected entry
  }

  // Convert selected entries back to an object
  const selectedObject = Object.fromEntries(selectedEntries);

  return selectedObject;
};

export default selectRandomItemsFromObject;
