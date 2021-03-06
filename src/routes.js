import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Carausel from "./components/carausel";
import Iklan from "./components/iklan";
import Kategori from "./components/content/kategori";
import Jenis from "./components/content/jenis";
import Content from "./components/content/content";
import DaftarItem from "./components/content/daftarItem";
import DetailContent from "./components/content/detailContent";
import AddItem from "./components/content/addItem";
import NotFound from "./components/notFound";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Topbar from "./components/topBar";
import TopMenu from "./components/topMenu";
import ButtonSortCategori from "./components/content/ButtonSortCategori";
import ScrollToTop from "./scrollTop";
import { createBrowserHistory } from "history";
import { fetchData } from "./redux/actionRedux";
import { useLocation } from "react-router-dom";
import TableDaftar from "./components/content/tableDaftar";
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1050,
    justifySelf: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 10,
      marginRight: 10,
    },
    [theme.breakpoints.down("md")]: {
      paddingRight: 10,
      paddingLeft: 10,
    },
    marginBottom: 10,
  },
  content: {
    display: "grid",
  },
}));

export default function Routes() {
  const styles = useStyles();
  const dispatch = useDispatch();
  // data
  const items = useSelector((state) => state.item);
  const [data, setData] = React.useState(items);
  // fetchData
  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  // sort
  const [sort, setSort] = React.useState({
    by: "All Products",
    tanda: false,
  });

  // location
  const location = useLocation();

  return (
    <>
      <Topbar items={items} setSort={setSort} setData={setData} />
      {location.pathname === "/daftar" ? null : (
        <div className={styles.content} style={{ marginBottom: 120 }}>
          <Grid
            container
            className={styles.container}
            style={{
              position: "fixed",
              zIndex: 1,
            }}
          >
            <TopMenu
              items={items}
              setSort={setSort}
              setData={setData}
              data={data}
              sort={sort}
            />
          </Grid>
        </div>
      )}

      <div className={styles.content} style={{ marginBottom: 0 }}>
        <Grid container className={styles.container}>
          <ButtonSortCategori />
        </Grid>
      </div>
      <ScrollToTop history={createBrowserHistory()} />
      <Switch>
        <Route exact path="/">
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <Grid item xs={12} lg={8} sm={12} md={8}>
                <Carausel items={items} setSort={setSort} setData={setData} />
              </Grid>
              <Grid item xs={12} lg={4} sm={12} md={4}>
                <Iklan items={items} setSort={setSort} setData={setData} />
              </Grid>
            </Grid>
          </div>
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <Kategori items={items} setSort={setSort} setData={setData} />
            </Grid>
          </div>
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <Jenis />
            </Grid>
          </div>
        </Route>
        <Route path="/content">
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <Content
                items={items}
                setSort={setSort}
                setData={setData}
                data={data}
                sort={sort}
              />
            </Grid>
          </div>
        </Route>
        {/* <Route path="/daftar">
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <DaftarItem data={data} setSort={setSort} setData={setData} />
            </Grid>
          </div>
        </Route> */}
        <Route path="/daftar">
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <TableDaftar />
            </Grid>
          </div>
        </Route>
        <Route path="/detail/:slug">
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <DetailContent />
            </Grid>
          </div>
        </Route>
        <Route path="/addItem">
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <AddItem setSort={setSort} setData={setData} />
            </Grid>
          </div>
        </Route>
        <Route path="/editItem/:slug">
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <AddItem setSort={setSort} setData={setData} />
            </Grid>
          </div>
        </Route>
        <Route>
          <div className={styles.content}>
            <Grid container className={styles.container}>
              <NotFound />
            </Grid>
          </div>
        </Route>
      </Switch>
    </>
  );
}
