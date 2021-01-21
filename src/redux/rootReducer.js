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
      nama: "T-Shirt Black",
      harga: 52000,
      stok: 2,
      image: Image2,
      images: [Image1, Image2, Image3, Image4],
      key: "2",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt Black",
      harga: 52000,
      stok: 2,
      image: Image3,
      images: [Image1, Image2, Image3, Image4],
      key: "3",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt Black",
      harga: 52000,
      stok: 2,
      image: Image4,
      images: [Image1, Image2, Image3, Image4],
      key: "4",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt Black",
      harga: 52000,
      stok: 2,
      image: Image1,
      images: [Image1, Image2, Image3, Image4],
      key: "5",
      recomendasi: true,
      jenis: "T-Shirt",
    },
    {
      nama: "T-Shirt Black",
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
      console.log("add");
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            key: action.key,
            data: action.data,
            quantity: 1,
          },
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
