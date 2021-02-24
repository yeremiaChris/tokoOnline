import swal from "sweetalert";

// delete item
export const deleteItem = (
  item,
  key,
  axios,
  dispatch,
  sorting,
  history,
  setSort,
  setData,
  location
) => {
  swal({
    title: `Yakin mau hapus item ${item} ?`,
    text: "Ketika di hapus item akan terhapus dari daftar !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      // dispatch({ type: "deleteItem", key });
      // swal("Item berhasil di hapus", {
      //   icon: "success",
      // });
      axios
        .delete(`http://localhost:5000/api/items/${key}`)
        .then((data) => {
          axios
            .get("http://localhost:5000/api/items")
            .then((data) => {
              swal({
                title: "Berhasil Menghapus Item",
                text: null,
                icon: "success",
                button: "Close",
              });
              dispatch({ type: "fetchData", data: data.data });
              sorting(data.data, setSort, setData, "All Products");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    } else {
      swal("Item tidak di jadi di hapus !");
    }
  });
};
export const updateItem = (
  item,
  key,
  axios,
  dispatch,
  sorting,
  history,
  setSort,
  setData,
  location,
  data
) => {
  swal({
    title: `Yakin mau update item ${item} ?`,
    text: "Ketika di update item akan terupdate dari daftar !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      // dispatch({ type: "deleteItem", key });
      // swal("Item berhasil di hapus", {
      //   icon: "success",
      // });
      let formData = new FormData();
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      data.images.map((item) =>
        typeof item.src === "object"
          ? formData.append("images", item.src)
          : formData.append("images[]", JSON.stringify(item))
      );
      formData.append("name", data.nama);
      formData.append("harga", data.harga);
      formData.append("jenis", data.jenis);
      formData.append("deskripsi", data.deskripsi);

      axios
        .put(`http://localhost:5000/api/items/${key}`, formData, config)
        .then((data) => {
          console.log(data);
          axios
            .get("http://localhost:5000/api/items")
            .then((data) => {
              swal({
                title: "Berhasil Mengupdate Item",
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
    } else {
      swal("Item tidak di jadi di update !");
    }
  });
};
