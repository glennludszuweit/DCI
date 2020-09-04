class localStorageItem {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  setItem() {
    localStorage.setItem(this.key, this.value);
  }

  getItem() {
    let item = localStorage.getItem(this.key);
    let itemString = JSON.stringify(item);
    return itemString;
  }

  removeItem() {
    localStorage.removeItem(this.key);
  }

  clear() {
    localStorage.clear();
  }
}

let item1 = new localStorageItem('item1', 123);

item1.setItem();
//console.log(item1.getItem());
//item1.removeItem();
//item1.clear();
