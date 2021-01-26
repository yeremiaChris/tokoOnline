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
  },
  gambar: {
    width: 130,
    height: 130,
    backgroundColor: "#e9ecee",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonForm: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 20,
    paddingRight: 0,
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

  // input click
  const refGambar = React.useRef(new Array());
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
      <Grid item lg={12}>
        <h2 style={{ textAlign: "left", marginBottom: 50 }}>Add Item</h2>
      </Grid>
      <Grid item lg={12}>
        <div>
          <div
            style={{
              marginBottom: 20,
              display: "flex",
            }}
          >
            <h3 style={{ width: 200, textAlign: "right", paddingRight: 10 }}>
              Nama *
            </h3>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Nama..."
              variant="outlined"
            />
          </div>
          <div
            style={{
              marginBottom: 20,
              display: "flex",
            }}
          >
            <h3 style={{ width: 200, textAlign: "right", paddingRight: 15 }}>
              Harga *
            </h3>
            <NumberFormat
              style={{
                width: "100%",
                padding: 0,
                margin: 0,
                height: 50,
                fontSize: 15,
              }}
              placeholder="Harga..."
              thousandSeparator={true}
              prefix={"Rp. "}
            />
          </div>
          <div
            style={{
              marginBottom: 20,
              display: "flex",
            }}
          >
            <h3 style={{ width: 200, textAlign: "right", paddingRight: 10 }}>
              Jenis *
            </h3>
            <FormControl style={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Jenis...
              </InputLabel>
              <Select
                fullWidth
                native
                value={state.age}
                onChange={handleChange}
                label="Age"
                inputProps={{
                  name: "age",
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
          <div
            style={{
              marginBottom: 20,
              display: "flex",
            }}
          >
            <h3 style={{ width: 200, textAlign: "right", paddingRight: 10 }}>
              Deskripsi *
            </h3>
            <TextareaAutosize
              rowsMax={5}
              rowsMin={3}
              aria-label="empty textarea"
              placeholder="Deskripsi..."
              style={{ width: "100%", padding: 15, fontSize: 15 }}
            />
          </div>
        </div>
      </Grid>
      <Grid item lg={12}>
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
      <Grid item lg={12}>
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
