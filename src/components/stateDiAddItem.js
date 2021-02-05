// gambar state
import * as yup from "yup";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

export const initialValues = {
  nama: "",
  harga: "",
  jenis: "",
  deskripsi: "",
  images: [
    {
      name: "gambar1",
      key: "1",
      src: "",
      srcImage: "gambar1",
    },
    {
      name: "gambar2",
      key: "2",
      src: "",
      srcImage: "gambar2",
    },
    {
      name: "gambar3",
      key: "3",
      src: "",
      srcImage: "gambar3",
    },
    {
      name: "gambar4",
      key: "4",
      src: "",
      srcImage: "gambar4",
    },
    {
      name: "gambar5",
      key: "5",
      src: "",
      srcImage: "gambar5",
    },
    {
      name: "gambar6",
      key: "6",
      src: "",
      srcImage: "gambar6",
    },
  ],
};

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
const FILE_SIZE = 1000 * 2000;
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
  images: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      key: yup.string(),
      src: yup
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
      srcImage: yup.string(),
    })
  ),
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
