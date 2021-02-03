// formik
import React from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";

// select
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import SendIcon from "@material-ui/icons/Send";

// react hook form
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  gambarContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
    },
  },
  gambar: {
    width: 140,
    height: 140,
    backgroundColor: "#e9ecee",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
    },
    [theme.breakpoints.down("xs")]: {
      width: 160,
      height: 160,
    },
    "&:hover": {
      backgroundColor: "#b7b9bb",
      cursor: "pointer",
    },
    transition: ".5s",
  },
  buttonForm: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 20,
    paddingRight: 0,
  },
  text: {
    maxWidth: 165,
    minWidth: 165,
    textAlign: "right",
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 100,
      minWidth: 100,
      textAlign: "left",
      marginBottom: 20,
    },
  },
  containerTextInput: {
    marginBottom: 20,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "grid",
    },
  },
  container: {
    maxWidth: "100%",
  },
  numberFormat: {
    height: 50,
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  textArea: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  errorText: {
    color: "red",
  },
  errorContainer: {
    width: 130,
    [theme.breakpoints.down("sm")]: {
      width: 120,
    },
    textAlign: "left",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "stretch",
    color: "red",
  },
  name: {
    width: 130,
    [theme.breakpoints.down("sm")]: {
      width: 120,
    },
    textAlign: "left",
    height: "1.2em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

// gambar state
const gambars = [
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

// schema
const FILE_SIZE = 1000 * 1000;
const schema = yup.object().shape({
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
    .required("harus ada")
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
    .required("harus ada")
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
    .required("harus ada")
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
    .required("harus ada")
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
    .required("harus ada")
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
    .required("harus ada")
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

// jenis
const jenis = [
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
    key: "4",
  },
];
// number
function NumberFormatCustom(props) {
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

function AddItem() {
  const styles = useStyles();

  // state gambar
  const [gambarBanyak, setGambarBanyak] = React.useState(gambars);

  // ref gambar array of object
  const refGambar = React.useRef([]);
  // klik to open input element
  const tambahGambar = (index) => {
    refGambar.current[index].click();
  };

  // onchange input image
  const handleChangeImage = (e, index) => {
    e.preventDefault();
    setGambarBanyak([
      ...gambarBanyak.map((item) =>
        item.key === index
          ? {
              ...item,
              src: URL.createObjectURL(e.target.files[0]),
              name: e.target.files[0].name,
            }
          : item
      ),
    ]);
  };

  // onsubmit
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Grid container className={styles.container}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <h2 style={{ textAlign: "left", marginBottom: 50 }}>Add Item</h2>
      </Grid>
      <Formik
        validationSchema={schema}
        initialValues={{
          nama: "",
          harga: "",
          jenis: "",
          deskripsi: "",
          gambar1: "",
          gambar2: "",
          gambar3: "",
          gambar4: "",
          gambar5: "",
          gambar6: "",
        }}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Grid>
                <div className={styles.containerTextInput}>
                  <h3 className={styles.text}>Nama *</h3>
                  <div style={{ width: "100%" }}>
                    <TextField
                      value={values.nama}
                      fullWidth
                      id="outlined-basic"
                      label="Nama..."
                      variant="outlined"
                      name="nama"
                      onChange={handleChange("nama")}
                      onBlur={handleBlur("nama")}
                    />
                    <p
                      style={{
                        width: "100%",
                        textAlign: "left",
                        color: "red",
                      }}
                    >
                      {touched.nama && errors.nama}
                    </p>
                  </div>
                </div>
                <div className={styles.containerTextInput}>
                  <h3 className={styles.text}>Harga *</h3>
                  <div
                    style={{
                      width: "100%",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Harga"
                      value={values.harga}
                      onBlur={handleBlur("harga")}
                      onChange={handleChange("harga")}
                      name="numberformat"
                      id="formatted-numberformat-input"
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                    <p
                      style={{
                        width: "100%",
                        textAlign: "left",
                        color: "red",
                      }}
                    >
                      {touched.harga && errors.harga}
                    </p>
                  </div>
                </div>

                <div className={styles.containerTextInput}>
                  <h3 className={styles.text}>Jenis *</h3>
                  <div style={{ width: "100%" }}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel htmlFor="outlined-age-native-simple">
                        Jenis...
                      </InputLabel>
                      <Select
                        value={values.jenis}
                        onChange={handleChange("jenis")}
                        native
                        onBlur={handleBlur("jenis")}
                        label="Jenis..."
                        inputProps={{
                          name: "jenis...",
                          id: "outlined-age-native-simple",
                        }}
                      >
                        <option aria-label="None" value="" />
                        {jenis &&
                          jenis.map((item) => {
                            return (
                              <option value={item.name}>{item.name}</option>
                            );
                          })}
                      </Select>
                    </FormControl>
                    <p
                      style={{
                        width: "100%",
                        textAlign: "left",
                        color: "red",
                      }}
                    >
                      {touched.jenis && errors.jenis}
                    </p>
                  </div>
                </div>
                <div className={styles.containerTextInput}>
                  <h3 className={styles.text}>Deskripsi *</h3>
                  <div style={{ width: "100%" }}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Deskripsi"
                      fullWidth
                      multiline
                      rows={4}
                      value={values.deskripsi}
                      onChange={handleChange("deskripsi")}
                      onBlur={handleBlur("deskripsi")}
                      variant="outlined"
                    />
                    <p
                      style={{
                        width: "100%",
                        textAlign: "left",
                        color: "red",
                      }}
                    >
                      {touched.deskripsi && errors.deskripsi}
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className={styles.gambarContainer}>
                {gambarBanyak &&
                  gambarBanyak.map((item, i) => {
                    return (
                      <div
                        onClick={() => tambahGambar(i)}
                        key={item.key}
                        style={{ color: "gray" }}
                      >
                        <p className={styles.name}>{item.name}</p>
                        <div
                          style={{
                            backgroundImage: "url(" + item.src + ")",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                          className={styles.gambar}
                        >
                          <input
                            name={item.nameForYup}
                            style={{ display: "none" }}
                            type="file"
                            ref={(e) => {
                              refGambar.current.push(e);
                            }}
                            id={item.nameForYup}
                            onChange={(event) => {
                              setFieldValue(
                                item.nameForYup,
                                event.currentTarget.files[0]
                              );
                              handleChangeImage(event, item.key);
                            }}
                            onBlur={handleBlur(item.nameForYup)}
                          ></input>
                          <AddCircleOutlineIcon fontSize="large" />
                        </div>

                        <ErrorMessage name={item.nameForYup}>
                          {(msg) => (
                            <p className={styles.errorContainer}>{msg}</p>
                          )}
                        </ErrorMessage>
                      </div>
                    );
                  })}
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className={styles.buttonForm}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<RotateLeftIcon />}
                >
                  Reset
                </Button>
                <Button
                  style={{ marginLeft: 10 }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </form>
        )}
      </Formik>
    </Grid>
  );
}

export default AddItem;
