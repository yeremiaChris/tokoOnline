// formik
import React from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";

// select
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
// react hook form
import { Formik, ErrorMessage } from "formik";
import {
  initialValues,
  schema,
  jenis,
  NumberFormatCustom,
} from "../stateDiAddItem";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  gambarContainer: {
    display: "flex",
    justifyContent: "flex-start",
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
    color: "maroon",
    display: "grid",
    alignItems: "flex-start",
    justifyContent: "flex-end",
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
      filter: "brightness(90%)",
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
  close: {
    marginRight: -15,
    marginTop: -15,
    backgroundColor: "gray",
    borderRadius: "50%",
  },
}));

function AddItem() {
  const styles = useStyles();
  // edit
  const location = useLocation();
  // ref gambar array of object
  const refGambar = React.useRef([]);
  // klik to open input element
  const tambahGambar = (index) => {
    // refGambar.current[index].click();
    refGambar.current.click();
  };
  // onsubmit
  const dispatch = useDispatch();
  const history = useHistory();
  const [file, setFile] = React.useState({});
  const [error, setError] = React.useState("");
  const onSubmit = (data) => {
    // const key = Math.random();
    // console.log(data);
    // location.state === undefined
    //   ? dispatch({
    //       type: "addItem",
    //       item: {
    //         nama: data.nama,
    //         harga: data.harga,
    //         stok: 0,
    //         image: data.images[0].srcImage,
    //         images: data.images,
    //         key: key.toString(),
    //         recomendasi: true,
    //         jenis: data.jenis,
    //         deskripsi: data.deskripsi,
    //       },
    //     })
    //   : dispatch({
    //       type: "updateItem",
    //       key: data.key,
    //       nama: data.nama,
    //       harga: data.harga,
    //       image: data.images[0].srcImage,
    //       images: data.images,
    //       jenis: data.jenis,
    //       deskripsi: data.deskripsi,
    //     });
    // untuk sementara pake history untuk redirect tapi kalo udah masuk database nanti pake   redirect component dari react router lebih bagus
    // if (file.length !== 6) {
    //   setError("Gambar harus di inputkan dan berjumlah 6");
    // } else {
    //   file.forEach((element) => {
    //     console.log(element.error);
    //   });
    // }

    console.log(data.images);

    let formData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    data.images.map((item) => {
      formData.append("images", item.src);
    });
    formData.append("name", data.nama);
    formData.append("harga", data.harga);
    formData.append("jenis", data.jenis);
    formData.append("deskripsi", data.deskripsi);
    axios
      .post("http://localhost:5000/api/items", formData, config)
      .then((data) => {
        console.log(data);
        swal({
          title: `BERHASIL ${
            location.state === undefined ? "MENAMBAH" : "UPDATE"
          } ITEM`,
          text: null,
          icon: "success",
          button: "Close",
        });
        // history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Grid container className={styles.container}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <h2 style={{ textAlign: "left", marginBottom: 50 }}>
          {location.state === undefined ? "Add Item" : "Update Item"}
        </h2>
      </Grid>
      <Formik
        validationSchema={schema}
        initialValues={
          location.state === undefined
            ? initialValues
            : {
                nama: location.state.nama,
                harga: location.state.harga,
                jenis: location.state.jenis,
                deskripsi: location.state.deskripsi,
                images: location.state.images,
              }
        }
        enableReinitialize={true}
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
          resetForm,
        }) => {
          return (
            <form style={{ width: "100%" }}>
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
                                <option key={item.key} value={item.name}>
                                  {item.name}
                                </option>
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
                <div
                  style={{
                    justifyContent: "flex-end",
                    display: "grid",
                  }}
                >
                  <p className={styles.errorContainer}>{error}</p>
                  <p className={styles.errorContainer}>{errors.images}</p>
                  {values.images.length >= 6 ? null : (
                    <Button
                      variant="contained"
                      color="default"
                      startIcon={<CloudUploadIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        tambahGambar();
                      }}
                    >
                      Upload Gambar
                    </Button>
                  )}
                </div>
                <div className={styles.gambarContainer}>
                  {values.images &&
                    values.images.map((item, i) => {
                      return (
                        <div
                          // onClick={() => tambahGambar(i)}

                          key={item.key}
                          style={{ color: "gray", marginRight: 40 }}
                        >
                          <p className={styles.name}>{item.name}</p>
                          <div
                            style={{
                              backgroundImage: "url(" + item.srcImage + ")",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                            className={styles.gambar}
                          >
                            {/* <input
                              style={{ display: "none" }}
                              name="img"
                              type="file"
                              ref={(e) => {
                                refGambar.current.push(e);
                              }}
                              onChange={(event) => {
                                setFieldValue(
                                  `images.${i}.src`,
                                  event.target.files[0]
                                );
                                setFieldValue(
                                  `images.${i}.srcImage`,
                                  URL.createObjectURL(event.target.files[0])
                                );
                                setFieldValue(
                                  `images.${i}.name`,
                                  event.target.files[0].name
                                );
                              }}
                              onBlur={handleBlur(`images.${i}.src`)}
                            ></input> */}

                            <CloseIcon
                              onClick={() => {
                                setFieldValue("images", [
                                  ...values.images.filter(
                                    (items) => items.key != item.key
                                  ),
                                ]);
                              }}
                              className={styles.close}
                              fontSize="large"
                            />
                          </div>

                          <ErrorMessage name={`images.${i}.src`}>
                            {(msg) => (
                              <p className={styles.errorContainer}>{msg}</p>
                            )}
                          </ErrorMessage>
                        </div>
                      );
                    })}
                </div>
              </Grid>
              <input
                style={{ display: "none" }}
                name="images"
                type="file"
                ref={refGambar}
                onBlur={handleBlur(`images`)}
                onChange={(e) => {
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
                  setFile(values.images);
                }}
              ></input>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className={styles.buttonForm}>
                  <Button
                    onClick={resetForm}
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
                    onClick={handleSubmit}
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </Grid>
  );
}

export default AddItem;
