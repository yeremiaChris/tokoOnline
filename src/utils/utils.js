// menu list
export const menuList = [
  {
    name: "New Arrivals",
    key: "1",
    icon: false,
  },
  {
    name: "All Products",
    key: "4",
    icon: true,
    menu: [
      {
        jenis: "T-Shirt",
        key: "1",
      },
      {
        jenis: "Shoes",
        key: "2",
      },
      {
        jenis: "Pants",
        key: "3",
      },
      {
        jenis: "Shirt",
        key: "4",
      },
    ],
  },
];
// akhir menu list

// awal side menu categories
// side button
export const sideButton = [
  {
    key: "1",
    name: "All Products",
  },
];
export const sideButtonDua = [
  {
    key: "1",
    name: "T-Shirt",
  },
  {
    key: "2",
    name: "Shirt",
  },
  {
    key: "3",
    name: "Shoes",
  },
  {
    key: "4",
    name: "Pants",
  },
];

// action sorting
export const sorting = (items, setSort, setData, jenis) => {
  const value = items.filter((item) => item.jenis === jenis);
  const filterByPrice = items.sort((a, b) => {
    if (jenis === "lowToHigh") {
      if (a.harga < b.harga) return -1;
      if (a.harga > b.harga) return 1;
    } else if (jenis === "highToLow") {
      if (a.harga > b.harga) return -1;
      if (a.harga < b.harga) return 1;
    }
  });
  setSort({
    by: jenis,
    tanda: true,
  });
  if (jenis === "All Products") {
    setData(items);
  } else if (jenis === "lowToHigh") {
    setData(filterByPrice);
  } else if (jenis === "highToLow") {
    setData(filterByPrice);
  } else {
    setData(value);
  }
};
