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
  },
  {
    name: "gambar2",
    key: "2",
    src: "b",
  },
  {
    name: "gambar3",
    key: "3",
    src: "c",
  },
  {
    name: "gambar4",
    key: "4",
    src: "d",
  },
  {
    name: "gambar5",
    key: "5",
    src: "e",
  },
  {
    name: "gambar6",
    key: "6",
    src: "f",
  },
];

function AddItem() {
  const styles = useStyles();

  // select
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
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
          ? { ...item, src: URL.createObjectURL(e.target.files[0]) }
          : item
      ),
    ]);
  };
  return (
    <Grid container className={styles.container}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <h2 style={{ textAlign: "left", marginBottom: 50 }}>Add Item</h2>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Grid>
          <div className={styles.containerTextInput}>
            <h3 className={styles.text}>Nama *</h3>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Nama..."
              variant="outlined"
            />
          </div>
          <div className={styles.containerTextInput}>
            <h3 className={styles.text}>Harga *</h3>
            <NumberFormat
              placeholder="Harga..."
              thousandSeparator={true}
              prefix={"Rp. "}
              className={styles.numberFormat}
            />
          </div>
          <div className={styles.containerTextInput}>
            <h3 className={styles.text}>Jenis *</h3>
            <FormControl style={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Jenis...
              </InputLabel>
              <Select
                fullWidth
                native
                value={state.age}
                onChange={handleChange}
                label="Jenis"
                inputProps={{
                  name: "Jenis",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </div>
          <div className={styles.containerTextInput}>
            <h3 className={styles.text}>Deskripsi *</h3>
            <TextareaAutosize
              rowsMax={5}
              rowsMin={3}
              aria-label="empty textarea"
              placeholder="Deskripsi..."
              className={styles.textArea}
            />
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
                  <p>{item.name}</p>
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
                      onChange={(e) => handleChangeImage(e, item.key)}
                      style={{ display: "none" }}
                      type="file"
                      ref={(e) => refGambar.current.push(e)}
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
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default AddItem;
