import React from "react";
import ItemContent from "./itemContent";
import { Grid, makeStyles } from "@material-ui/core";

// number input
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  kiri: {
    backgroundColor: "#ebebeb",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 10,
  },
  kanan: {
    paddingLeft: 10,
  },
  ul: {
    margin: 0,
    listStyle: "none",
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "left",
  },
  sideButton: {
    textDecoration: "none",
    color: "black",
    width: "100%",
    fontWeight: "normal",
  },
  list: {
    "&:hover": {
      backgroundColor: "#dadada",
      borderRadius: 5,
    },
    padding: 10,
  },
}));

// side button
const sideButton = [
  {
    key: "1",
    name: "All Products",
  },
  {
    key: "2",
    name: "Featured Products",
  },
  {
    key: "3",
    name: "Bundled Products",
  },
];
const sideButtonDua = [
  {
    key: "1",
    name: "Tops",
  },
  {
    key: "2",
    name: "Bottoms",
  },
  {
    key: "3",
    name: "Latest",
  },
  {
    key: "4",
    name: "Cheapest",
  },
];
function NumberFormatCustom(props) {
  console.log(props);
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
function Content() {
  const styles = useStyles();
  const [values, setValues] = React.useState({
    numberformat: "0",
    numberFormatDua: "0",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <div className={styles.kiri}>
          <ul className={styles.ul}>
            {sideButton &&
              sideButton.map((item) => {
                return (
                  <li className={styles.list} key={item.key}>
                    <a className={styles.sideButton} href="/#">
                      {item.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.kiri}>
          <ul className={styles.ul}>
            <li
              style={{
                borderRadius: 5,
                padding: 10,
              }}
            >
              Categories
            </li>
            {sideButtonDua &&
              sideButtonDua.map((item) => {
                return (
                  <li className={styles.list} key={item.key}>
                    <a className={styles.sideButton} href="/#">
                      {item.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.kiri}>
          <ul className={styles.ul}>
            <li
              style={{
                borderRadius: 5,
                padding: 10,
              }}
            >
              Sort by Price
            </li>
            <li style={{ borderRadius: 5, padding: 10 }}>
              <TextField
                label="MIN"
                value={values.numberformat}
                onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </li>
            <li style={{ borderRadius: 5, padding: 10 }}>
              <TextField
                label="MAX"
                value={values.numberFormatDua}
                onChange={handleChange}
                name="numberFormatDua"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <div className={styles.kanan}>
          <ItemContent />
        </div>
      </Grid>
    </>
  );
}

export default Content;
