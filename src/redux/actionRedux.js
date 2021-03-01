import axios from "axios";
import swal from "sweetalert";

import { FETCH_DATA, DELETE_ITEM_DATA, ADDING_ITEM } from "./reduxName";
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get("http://localhost:5000/api/items");
      dispatch({ type: FETCH_DATA, items: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteItemData = (key, item) => {
  return (dispatch) => {
    swal({
      title: `Yakin mau hapus item ${item} ?`,
      text: "Ketika di hapus item akan terhapus dari daftar !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/api/items/${key}`)
          .then((datas) => {
            dispatch({ type: DELETE_ITEM_DATA, key: datas.data._id });
            swal("Item berhasil di hapus", {
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      } else {
        swal("Item tidak di jadi di hapus !");
      }
    });
  };
};

export const addingItem = (data) => {
  return (dispatch) => {
    let formData = new FormData();
    data.images.map((item) => {
      return formData.append("images", item.src);
    });
    formData.append("name", data.nama);
    formData.append("harga", data.harga);
    formData.append("jenis", data.jenis);
    formData.append("deskripsi", data.deskripsi);
    const controller = new AbortController();
    const signal = controller.signal;
    axios
      .post(
        "http://localhost:5000/api/items",
        formData,
        { signal }
        // {
        //   headers: {
        //     "content-type": "multipart/form-data",
        //   },
        // }
      )
      .then((datas) => {
        console.log(datas);
        dispatch({ type: ADDING_ITEM, item: datas.data });
        swal("Item berhasil di tambah", {
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };
};

export const updateItem = (data, gambarYangDiganti) => {
  return (dispatch) => {
    swal({
      title: `Yakin mau update item ${data.nama} ?`,
      text: "Ketika di update item akan terupdate dari daftar !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
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
        if (Array.isArray(gambarYangDiganti) === true) {
          gambarYangDiganti.map((item) => {
            return formData.append("pathYangDiHapus[]", JSON.stringify(item));
          });
        }
        formData.append("name", data.nama);
        formData.append("harga", data.harga);
        formData.append("jenis", data.jenis);
        formData.append("deskripsi", data.deskripsi);

        const controller = new AbortController();
        const signal = controller.signal;
        axios
          .put(`http://localhost:5000/api/items/${data.key}`, formData, {
            signal,
          })
          .then((data) => {
            console.log(data);
            swal({
              title: "Berhasil Mengupdate Item",
              text: null,
              icon: "success",
              button: "Close",
            });
          })
          .catch((err) => console.log(err));
      } else {
        swal("Item tidak di jadi di update !");
      }
    });
  };
};
