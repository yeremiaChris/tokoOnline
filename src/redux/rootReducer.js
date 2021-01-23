import Image1 from "../image/black.jpeg";
import Image2 from "../image/white.jpeg";
import Image3 from "../image/tan.jpeg";
import Image4 from "../image/grey.jpeg";

const initState = {
  item: [
    {
      nama: "T-Shirt Black",
      harga: 52000,
      stok: 2,
      image: Image1,
      images: [Image1, Image2, Image3, Image4],
      key: "1",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt White",
      harga: 52000,
      stok: 2,
      image: Image2,
      images: [Image1, Image2, Image3, Image4],
      key: "2",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt Tan",
      harga: 52000,
      stok: 2,
      image: Image3,
      images: [Image1, Image2, Image3, Image4],
      key: "3",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt BLue",
      harga: 52000,
      stok: 2,
      image: Image4,
      images: [Image1, Image2, Image3, Image4],
      key: "4",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt Gray",
      harga: 52000,
      stok: 2,
      image: Image1,
      images: [Image1, Image2, Image3, Image4],
      key: "5",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt Red",
      harga: 52000,
      stok: 2,
      image: Image2,
      images: [Image1, Image2, Image3, Image4],
      key: "6",
      recomendasi: true,
      jenis: "T-Shirt",
    },
  ],
  cart: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "addCart":
      const exists = (key) => {
        return state.cart.some((item) => item.key === action.item.key);
      };
      exists(action.key);
      return {
        // "spread" the original state object
        ...state,
        cart: state.cart.some((item) => item.key === action.item.key)
          ? [
              ...state.cart.map((item) =>
                item.key === action.item.key
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            ]
          : [...state.cart, action.item],
        // but replace the "chosenIds" field
      };
    case "incrementItem":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.key === action.key
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        ],
      };
    case "decrementItem":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.key === action.key && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
