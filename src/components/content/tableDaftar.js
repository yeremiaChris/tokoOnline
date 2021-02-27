import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { formatRupiah } from "../../redux/formatRupiah";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { useDispatch } from "react-redux";
import { deleteItemData } from "../../redux/actionRedux";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { menuListDua, convertBufferToImage } from "../../utils/utils";
import { Menu, MenuItem } from "@szhsin/react-menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles({
  container: {
    marginTop: 100,
  },
  img: {
    objectFit: "cover",
    marginRight: 20,
    width: "100%",
    height: "100%",
  },
  formatRupiah: {
    padding: 0,
    margin: 0,
    textAlign: "left",
    marginTop: 10,
  },
  kotak2: {
    width: "100%",
  },
  wraper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  link: {
    "&:hover": {
      backgroundColor: "#e8ecee",
      borderRadius: 10,
      cursor: "pointer",
    },
    padding: 10,
    color: "black",
    display: "flex",
  },
  urutan: {
    display: "flex",
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const items = useSelector((state) => state.item);
  const dispatch = useDispatch();

  return (
    <Grid container className={classes.container}>
      <Grid
        style={{ fontSize: 30, marginBottom: 50 }}
        item
        className={classes.wraper}
      >
        Daftar Barang
      </Grid>
      <Grid item className={classes.wraper}>
        <div className={classes.urutan}>
          {menuListDua.map((item) => {
            return (
              <Menu
                key={item.key}
                menuButton={
                  <p className={classes.link} href="/#">
                    Urutkan
                    <ArrowDropDownIcon
                      fontSize="small"
                      className={classes.icon}
                    />
                  </p>
                }
              >
                {item.menu.map((item) => (
                  <MenuItem key={item.key}>{item.jenis}</MenuItem>
                ))}
              </Menu>
            );
          })}
          <p
            style={{
              borderRadius: 10,
            }}
            className={classes.link}
          >
            Highest Price
          </p>
          <p
            style={{
              borderRadius: 10,
            }}
            className={classes.link}
          >
            Lowest Price
          </p>
        </div>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 150 }}>
                <p style={{ fontSize: 20 }}>Gambar</p>
              </TableCell>
              <TableCell padding="none">
                <p style={{ fontSize: 20 }}>Keterangan</p>
              </TableCell>
              <TableCell align="right">
                <p style={{ fontSize: 20 }}>Aksi</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              const array = [];
              convertBufferToImage(item, array);
              return (
                <TableRow key={item._id}>
                  <TableCell component="th" scope="row">
                    <div style={{ width: 100, height: 100 }}>
                      <img
                        className={classes.img}
                        alt={item.name}
                        src={`data:${array[0].contentType};base64,${array[0].img}`}
                      />
                    </div>
                  </TableCell>
                  <TableCell padding="none">
                    <div style={{ marginTop: -40 }}>
                      <h2
                        style={{
                          padding: 0,
                          margin: 0,
                          fontWeight: "normal",
                          fontSize: 25,
                        }}
                      >
                        {item.name}
                      </h2>
                      <p className={classes.formatRupiah}>
                        {formatRupiah(item.harga)}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className={classes.kotak2}>
                      <Link
                        style={{ color: "black" }}
                        to={{
                          pathname: `/editItem/${item.name}`,
                          state: {
                            _id: item._id,
                            nama: item.name,
                            harga: item.harga,
                            deskripsi: item.deskripsi,
                            jenis: item.jenis,
                            images: item.images.map((item, index) => {
                              return {
                                key: item._id,
                                name: item.name,
                                src: item.tempat,
                                srcImage: `data:${array[index].contentType};base64,${array[index].img}`,
                              };
                            }),
                          },
                        }}
                      >
                        <IconButton aria-label="menu">
                          <EditOutlinedIcon fontSize="inherit" />
                          <p style={{ fontSize: 15, marginLeft: 10 }}>Edit</p>
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={() =>
                          dispatch(deleteItemData(item._id, item.name))
                        }
                        aria-label="menu"
                      >
                        <DeleteOutlineOutlinedIcon fontSize="inherit" />
                        <p style={{ fontSize: 15, marginLeft: 10 }}>Hapus</p>
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
