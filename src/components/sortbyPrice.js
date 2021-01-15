import React from "react";
import { makeStyles } from "@material-ui/core";

// number

// number input
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  ul: {
    margin: 0,
    listStyle: "none",
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "left",
  },
}));

// func number price
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

function SortbyPrice() {
  const styles = useStyles();

  // state input price
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
    </>
  );
}

export default SortbyPrice;
