import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { formatRupiah } from "../../redux/formatRupiah";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 340,
  },
  fullList: {
    width: "auto",
  },
  shopButton: {
    width: "100%",
    backgroundColor: "#777979",
    color: "white",
    borderColor: "white",
    marginTop: 40,
    borderRadius: 10,
    "&:hover": {
      borderColor: "black",
      borderWidth: 1,
      color: "black",
    },
    display: "flex",
    justifyContent: "start",
    fontSize: 15,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    fontSize: 25,
  },
  cart: {
    padding: 30,
  },
  iconMenu: {
    display: "flex",
    justifyContent: "space-between",
  },
  gambarCart: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    marginRight: 10,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  tengahCart: {
    width: 200,
  },
  pengelolaanCart: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
  },
  kanan: {
    justifyContent: "flex-end",
    display: "grid",
    alignItems: "space-between",
    width: 80,
  },
  transaksi: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonCheckout: {
    width: "100%",
    backgroundColor: "black",
    padding: 10,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      borderColor: "black",
    },
  },
  paper: {
    background: "#dfe8ee",
  },
  transaksiContainer: {
    // position: "absolute",
    // bottom: 0,
    // padding: 20,
    // right: 0,
    // left: 0,
  },
}));

export default function TemporaryDrawer({ key, data }) {
  const cart = useSelector((state) => state.cart);
  const uangKirim = useSelector((state) => state.uangKirim);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  // dispatch action
  const dispatch = useDispatch();
  const addToCart = (data) => {
    dispatch({
      type: "addCart",
      item: { data: data, key: data.key, quantity: 1 },
    });
  };

  const toggleDrawer = (anchor, open) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    } else if (open === true) {
      addToCart(data);
    }
    setState({ ...state, [anchor]: open });
  };

  // tambah item di cart
  const tambah = (key) => {
    dispatch({ type: "incrementItem", key });
  };
  // kurang item di cart
  const kurang = (key) => {
    dispatch({ type: "decrementItem", key });
  };

  // hapus cart
  const hapus = (key) => {
    dispatch({ type: "deleteCart", key });
  };

  // subtotal
  const subTotal = () => {
    return cart.length !== 0
      ? cart.reduce(
          (subTotals, item) => subTotals + item.data.harga * item.quantity,
          0
        )
      : 0;
  };
  // total biaya
  const totalBiaya = () => {
    return subTotal() + uangKirim;
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.cart}>
        <div className={classes.iconMenu}>
          <div>
            <IconButton
              onClick={toggleDrawer("right", false)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <h1>My Cart</h1>
          <hr style={{ color: "#e9ecee" }}></hr>
        </div>
        <div className={classes.containerCart}>
          {cart &&
            cart.map((item) => {
              console.log(item);
              return (
                <div key={item.data.key}>
                  <div style={{ marginTop: 20 }}>
                    <div className={classes.iconMenu}>
                      <div
                        style={{
                          backgroundImage: `url('/uploads/${item.data.images[0].fileName}')`,
                        }}
                        className={classes.gambarCart}
                      ></div>
                      <div className={classes.tengahCart}>
                        <div>
                          <h3 style={{ margin: 0, fontSize: 15 }}>
                            {item.data.nama}
                          </h3>
                          <div className={classes.pengelolaanCart}>
                            <IconButton
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              onClick={() => tambah(item.key)}
                            >
                              <AddIcon />
                            </IconButton>
                            <p
                              style={{
                                padding: "3px 10px",
                                backgroundColor: "white",
                              }}
                            >
                              {item.quantity}
                            </p>
                            <IconButton
                              edge="end"
                              color="inherit"
                              aria-label="menu"
                              onClick={() => kurang(item.key)}
                            >
                              <RemoveIcon />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                      <div className={classes.kanan}>
                        <p style={{ margin: 0, fontSize: 12 }}>
                          {formatRupiah(item.data.harga)}
                        </p>
                        <IconButton
                          edge="end"
                          color="inherit"
                          aria-label="menu"
                          onClick={() => hapus(item.key)}
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#e9ecee" }}></hr>
                </div>
              );
            })}
        </div>
        <div className={classes.transaksiContainer}>
          <div>
            <div className={classes.transaksi}>
              <div>
                <p>Sub Total</p>
                <p>Uang Kirim</p>
                <strong>
                  <p>Total Biaya</p>
                </strong>
              </div>
              <div>
                <p>{formatRupiah(subTotal())}</p>
                <p>
                  {subTotal() === 0 ? formatRupiah(0) : formatRupiah(uangKirim)}
                </p>
                <strong>
                  <p>
                    {subTotal() === 0
                      ? formatRupiah(0)
                      : formatRupiah(totalBiaya())}
                  </p>
                </strong>
              </div>
            </div>
          </div>
          <div>
            <Button variant="outlined" className={classes.buttonCheckout}>
              <strong>Proses Checkout</strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <React.Fragment key="right">
        <Button
          variant="outlined"
          onClick={toggleDrawer("right", true)}
          className={classes.shopButton}
        >
          <div className={classes.buttonContainer}>
            <AddShoppingCartIcon className={classes.icon} />
            <p style={{ width: "100%", margin: 0 }}>Add To Card</p>
          </div>
        </Button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          classes={{ paper: classes.paper }}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
