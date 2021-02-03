// gambar state
import * as yup from "yup";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

export const gambars = [
  {
    name: "gambar1",
    key: "1",
    src: "a",
    nameForYup: "gambar1",
    error: "",
  },
  {
    name: "gambar2",
    key: "2",
    src: "b",
    nameForYup: "gambar2",
    error: "",
  },
  {
    name: "gambar3",
    key: "3",
    src: "c",
    nameForYup: "gambar3",
    error: "",
  },
  {
    name: "gambar4",
    key: "4",
    src: "d",
    nameForYup: "gambar4",
    error: "",
  },
  {
    name: "gambar5",
    key: "5",
    src: "e",
    nameForYup: "gambar5",
    error: "",
  },
  {
    name: "gambar6",
    key: "6",
    src: "f",
    nameForYup: "gambar6",
    error: "",
  },
];
// akhir gambar
// jenis
export const jenis = [
  {
    name: "Shoes",
    key: "1",
  },
  {
    name: "Pants",
    key: "2",
  },
  {
    name: "Shirt",
    key: "3",
  },
  {
    name: "T-Shirt",
    key: "4",
  },
  {
    name: "T-Shirt",
    key: "5",
  },
];
// akhir jenis
// schema
const FILE_SIZE = 1000 * 1000;
export const schema = yup.object().shape({
  nama: yup
    .string()
    .required("Field nama harus di isi")
    .min(5, "Minimal huruf ada 5"),
  harga: yup.string().required("Field harga harus di isi"),
  jenis: yup.string().required("Field jenis harus di isi"),
  deskripsi: yup
    .string()
    .required("Field deskripsi harus di isi")
    .min(10, "Minimal huruf ada 10"),
  gambar1: yup
    .mixed()
    .required("Masukan Gambar")
    .test("type", "harus jpeg,jpg atau png", (value) => {
      return (
        value &&
        (value.type === "image/jpeg" ||
          value.type === "image/jpg" ||
          value.type === "image/png")
      );
    })
    .test("fileSize", "File tidak boleh lebih dari 1 mb", (value) => {
      return value && value.size <= FILE_SIZE;
    }),
  gambar2: yup
    .mixed()
    .required("Masukan Gambar")
    .test("type", "harus jpeg,jpg atau png", (value) => {
      return (
        value &&
        (value.type === "image/jpeg" ||
          value.type === "image/jpg" ||
          value.type === "image/png")
      );
    })
    .test("fileSize", "File tidak boleh lebih dari 1 mb", (value) => {
      return value && value.size <= FILE_SIZE;
    }),
  gambar3: yup
    .mixed()
    .required("Masukan Gambar")
    .test("type", "harus jpeg,jpg atau png", (value) => {
      return (
        value &&
        (value.type === "image/jpeg" ||
          value.type === "image/jpg" ||
          value.type === "image/png")
      );
    })
    .test("fileSize", "File tidak boleh lebih dari 1 mb", (value) => {
      return value && value.size <= FILE_SIZE;
    }),
  gambar4: yup
    .mixed()
    .required("Masukan Gambar")
    .test("type", "harus jpeg,jpg atau png", (value) => {
      return (
        value &&
        (value.type === "image/jpeg" ||
          value.type === "image/jpg" ||
          value.type === "image/png")
      );
    })
    .test("fileSize", "File tidak boleh lebih dari 1 mb", (value) => {
      return value && value.size <= FILE_SIZE;
    }),
  gambar5: yup
    .mixed()
    .required("Masukan Gambar")
    .test("type", "harus jpeg,jpg atau png", (value) => {
      return (
        value &&
        (value.type === "image/jpeg" ||
          value.type === "image/jpg" ||
          value.type === "image/png")
      );
    })
    .test("fileSize", "File tidak boleh lebih dari 1 mb", (value) => {
      return value && value.size <= FILE_SIZE;
    }),
  gambar6: yup
    .mixed()
    .required("Masukan Gambar")
    .test("type", "harus jpeg,jpg atau png", (value) => {
      return (
        value &&
        (value.type === "image/jpeg" ||
          value.type === "image/jpg" ||
          value.type === "image/png")
      );
    })
    .test("fileSize", "File tidak boleh lebih dari 1 mb", (value) => {
      return value && value.size <= FILE_SIZE;
    }),
});
// akhir schema
// number
export function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="Rp. "
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
