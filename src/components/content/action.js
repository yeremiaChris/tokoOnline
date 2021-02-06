import swal from "sweetalert";

// delete item
export const deleteItem = (item, key, dispatch) => {
  swal({
    title: `Yakin mau hapus item ${item} ?`,
    text: "Ketika di hapus item akan terhapus dari daftar !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch({ type: "deleteItem", key });
      swal("Item berhasil di hapus", {
        icon: "success",
      });
    } else {
      swal("Item tidak di jadi di hapus !");
    }
  });
};
