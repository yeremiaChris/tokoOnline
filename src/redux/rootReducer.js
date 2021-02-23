import Image1 from "../image/black.jpeg";
import Image2 from "../image/white.jpeg";
import Image3 from "../image/tan.jpeg";
import Image4 from "../image/grey.jpeg";

const initState = {
  item: [],
  cart: [],
  uangKirim: 10000,
  gambars: [
    {
      name: "gambar1",
      key: "1",
      srcImage: "a",
      src: Image1,
    },
    {
      name: "gambar2",
      key: "2",
      srcImage: "b",
      src: Image2,
    },
    {
      name: "gambar3",
      key: "3",
      srcImage: "c",
      src: Image3,
    },
    {
      name: "gambar4",
      key: "4",
      srcImage: "d",
      src: Image4,
    },
    {
      name: "gambar5",
      key: "5",
      srcImage: "e",
      src: Image3,
    },
    {
      name: "gambar6",
      key: "6",
      srcImage: "f",
      src: Image4,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "fetchData":
      return {
        ...state,
        item: action.data,
      };
    case "addCart":
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
    case "deleteCart":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.key !== action.key)],
      };
    case "addItem":
      return {
        ...state,
        item: [action.item, ...state.item],
      };
    case "updateItem":
      return {
        ...state,
        item: [
          ...state.item.map((item) =>
            item.key === action.key
              ? {
                  ...item,
                  nama: action.nama,
                  harga: action.harga,
                  image: action.image,
                  images: action.images,
                  deskripsi: action.deskripsi,
                  jenis: action.jenis,
                }
              : item
          ),
        ],
      };
    case "deleteItem":
      return {
        ...state,
        item: [
          ...state.item.filter((item) =>
            item.key === action.key ? item.key !== action.key : item
          ),
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
