import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
const useStyles = makeStyles((theme) => ({
  gambarContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  gambar: {
    width: 130,
    height: 130,
    backgroundColor: "#e9ecee",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: 120,
      height: 120,
    },
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
    padding: 15,
  },
}));

// gambar state
const gambars = [
  {
    name: "gambar1",
    key: "1",
    src: "a",
    nameForYup: "img",
  },
  {
    name: "gambar2",
    key: "2",
    src: "b",
    nameForYup: "gambar2",
  },
  {
    name: "gambar3",
    key: "3",
    src: "c",
    nameForYup: "gambar3",
  },
  {
    name: "gambar4",
    key: "4",
    src: "d",
    nameForYup: "gambar4",
  },
  {
    name: "gambar5",
    key: "5",
    src: "e",
    nameForYup: "gambar5",
  },
  {
    name: "gambar6",
    key: "6",
    src: "f",
    nameForYup: "gambar6",
  },
];

// schema
const FILE_SIZE = 1000 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const schema = yup.object().shape({
  // nama: yup.string().required("Harus di isi"),
  // harga: yup.string().required("Required"),
  // jenis: yup.string().required("Harus di isi"),
  // deskripsi: yup.string().required("Harus di isi"),
  img: yup
    .mixed()
    .test("type", "Format = .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
      return (
        value &&
        (value[0].type === "image/jpeg" ||
          value[0].type === "image/jpg" ||
          value[0].type === "image/png")
      );
    }),
  gambar2: yup
    .mixed()
    .test(
      "type",
      "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc",
      (value) => {
        return (
          value &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/jpg" ||
            value[0].type === "image/png")
        );
      }
    ),
  gambar3: yup
    .mixed()
    .test(
      "type",
      "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc",
      (value) => {
        return (
          value &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/jpg" ||
            value[0].type === "image/png")
        );
      }
    ),
  gambar4: yup
    .mixed()
    .test(
      "type",
      "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc",
      (value) => {
        return (
          value &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/jpg" ||
            value[0].type === "image/png")
        );
      }
    ),
  gambar5: yup
    .mixed()
    .test(
      "type",
      "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc",
      (value) => {
        return (
          value &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/jpg" ||
            value[0].type === "image/png")
        );
      }
    ),
  gambar6: yup
    .mixed()
    .test(
      "type",
      "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc",
      (value) => {
        return (
          value &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/jpg" ||
            value[0].type === "image/png")
        );
      }
    ),
});

function AddItem() {
  const styles = useStyles();

  // select
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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

  // state form dari react-hook-form
  const { register, handleSubmit, watch, errors, control } = useForm({
    resolver: yupResolver(schema),
  });
  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid container className={styles.container}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <h2 style={{ textAlign: "left", marginBottom: 50 }}>Add Item</h2>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        {/* <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid>
            <div className={styles.containerTextInput}>
              <h3 className={styles.text}>Nama *</h3>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Nama..."
                variant="outlined"
                name="nama"
                inputRef={register}
              />
            </div>
            <p>{errors.nama?.message}</p>
            <div className={styles.containerTextInput}>
              <h3 className={styles.text}>Harga *</h3>
              <Controller
                placeholder="Harga..."
                thousandSeparator={true}
                className={styles.numberFormat}
                name="harga"
                control={control}
                as={NumberFormat}
              />
            </div>
            <p>{errors.harga?.message}</p>
            <div className={styles.containerTextInput}>
              <h3 className={styles.text}>Jenis *</h3>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="jenis">Jenis...</InputLabel>
                <Controller
                  control={control}
                  name="jenis"
                  as={
                    <Select native label="Jenis..." id="jenis">
                      <option aria-label="None" value="" />
                      <option value="ten">Ten</option>
                      <option value="twenty">Twenty</option>
                      <option value="thirty">Thirty</option>
                    </Select>
                  }
                />
              </FormControl>
            </div>
            <p>{errors.jenis?.message}</p>

            <div className={styles.containerTextInput}>
              <h3 className={styles.text}>Deskripsi *</h3>
              <TextareaAutosize
                ref={register}
                name="deskripsi"
                rowsMax={5}
                rowsMin={3}
                aria-label="empty textarea"
                placeholder="Deskripsi..."
                className={styles.textArea}
              />
            </div>
            <p>{errors.deskripsi?.message}</p>
          </Grid>
        </Grid> */}
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
                    <ErrorMessage
                      render={({ message }) => (
                        <p
                          style={{
                            color: "red",
                            width: 150,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {message}
                        </p>
                      )}
                      errors={errors}
                      name={item.nameForYup}
                    />
                    <p
                      style={{
                        width: 100,
                        height: "1.2em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.name}
                    </p>
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
                        onChange={(e) => handleChangeImage(e, item.key)}
                        style={{ display: "none" }}
                        type="file"
                        ref={(e) => {
                          refGambar.current.push(e);
                          register(e);
                        }}
                      ></input>
                      <AddCircleOutlineIcon fontSize="large" />
                    </div>
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
    </Grid>
  );
}

export default AddItem;
