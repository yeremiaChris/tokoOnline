// gambar state
import * as yup from "yup";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

export const initialValues = {
  nama: "",
  harga: "",
  jenis: "",
  deskripsi: "",
  images: [],
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
  images: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required("perlu"),
        key: yup.string().required("perlu"),
        src: yup.mixed(),
        srcImage: yup.string(),
        fileBuffer: yup.mixed(),
      })
    )
    .min(6, "6 gambar harus di inputkan")
    .max(6, "6 gambar harus di inputkan"),
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
