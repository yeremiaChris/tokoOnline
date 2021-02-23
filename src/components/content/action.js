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
