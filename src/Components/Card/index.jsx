import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 400,
    padding: "50px 5vw",
    maxWidth: "80vw"
  }
}));

const Card = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justifyContent="center">
        <Paper elevation={3} className={classes.paper}>{children}</Paper>
      </Grid>
    </div>
  );
};

export default Card;