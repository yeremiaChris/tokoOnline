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

// react hook form
import { Formik, ErrorMessage } from "formik";
import { schema, jenis, NumberFormatCustom } from "../stateDiAddItem";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
}));

function AddItem() {
  const styles = useStyles();
  // edit
  const location = useLocation();
  // state gambar
  const gambars = useSelector((state) => state.gambars);
  const [gambarBanyak, setGambarBanyak] = React.useState(
    location.state === undefined ? gambars : location.state.images
  );
  console.log(gambarBanyak);

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
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    const key = Math.random();
    dispatch({
      type: "addItem",
      item: {
        nama: data.nama,
        harga: data.harga,
        stok: 0,
        image: URL.createObjectURL(data.gambar1),
        images: [
          {
            name: "gambar1",
            key: "1",
            src: URL.createObjectURL(data.gambar1),
            nameForYup: "gambar1",
            error: "",
          },
          {
            name: "gambar2",
            key: "2",
            src: URL.createObjectURL(data.gambar2),
            nameForYup: "gambar2",
            error: "",
          },
          {
            name: "gambar3",
            key: "3",
            src: URL.createObjectURL(data.gambar3),
            nameForYup: "gambar3",
            error: "",
          },
          {
            name: "gambar4",
            key: "4",
            src: URL.createObjectURL(data.gambar4),
            nameForYup: "gambar4",
            error: "",
          },
          {
            name: "gambar5",
            key: "5",
            src: URL.createObjectURL(data.gambar5),
            nameForYup: "gambar5",
            error: "",
          },
          {
            name: "gambar6",
            key: "6",
            src: URL.createObjectURL(data.gambar6),
            nameForYup: "gambar6",
            error: "",
          },
        ],
        key: key.toString(),
        recomendasi: true,
        jenis: data.jenis,
        deskripsi: data.deskripsi,
      },
    });
    // untuk sementara pake history untuk redirect tapi kalo udah masuk database nanti pake redirect component dari react router lebih bagus
    history.push("/");
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
            ? {
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
              }
            : {
                nama: location.state.nama,
                harga: location.state.harga,
                jenis: location.state.jenis,
                deskripsi: location.state.deskripsi,
              }
        }
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
