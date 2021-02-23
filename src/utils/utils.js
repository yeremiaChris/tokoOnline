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
        jenis: "All Products",
        key: "5",
      },
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
    if (jenis === "Lowest Price") {
      if (a.harga < b.harga) return -1;
      if (a.harga > b.harga) return 1;
    } else if (jenis === "Highest Price") {
      if (a.harga > b.harga) return -1;
      if (a.harga < b.harga) return 1;
    } else if (jenis === "New Arrivals") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return null;
  });
  setSort({
    by: jenis,
    tanda: true,
  });
  if (jenis === "All Products") {
    return setData(items);
  } else if (jenis === "Lowest Price") {
    return setData(filterByPrice);
  } else if (jenis === "Highest Price") {
    return setData(filterByPrice);
  } else if (jenis === "New Arrivals") {
    return setData(filterByPrice);
  } else {
    return setData(value);
  }
};

// submit pada tambah item
export const submitItem = (
  data,
  axios,
  swal,
  dispatch,
  sorting,
  history,
  setSort,
  location,
  setData
) => {
  let formData = new FormData();
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  data.images.map((item) => {
    return formData.append("images", item.src);
  });
  formData.append("name", data.nama);
  formData.append("harga", data.harga);
  formData.append("jenis", data.jenis);
  formData.append("deskripsi", data.deskripsi);
  axios
    .post("http://localhost:5000/api/items", formData, config)
    .then((datas) => {
      axios
        .get("http://localhost:5000/api/items")
        .then((data) => {
          swal({
            title: `BERHASIL ${
              location.state === undefined ? "MENAMBAH" : "UPDATE"
            } ITEM`,
            text: null,
            icon: "success",
            button: "Close",
          });
          dispatch({ type: "fetchData", data: data.data });
          sorting(data.data, setSort, setData, "All Products");
          history.push({
            pathname: `/daftar`,
            state: {
              jenis: "All Products",
            },
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

export const inputImage = (e, values, setFieldValue, setError) => {
  if (
    e.target.files[0].type === "image/jpg" ||
    e.target.files[0].type === "image/jpeg" ||
    e.target.files[0].type === "image/png"
  ) {
    setFieldValue(
      "images",
      values.images.concat({
        name: e.target.files[0].name,
        key: `${e.target.files[0].name} + ${Date.now()} `,
        src: e.target.files[0],
        srcImage: URL.createObjectURL(e.target.files[0]),
      })
    );
    setError("");
  } else {
    setError("tipe gambar salah");
  }
};
