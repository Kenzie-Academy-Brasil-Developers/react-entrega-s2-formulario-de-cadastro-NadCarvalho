import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "15px 0",
  },
}));

const Index = ({formHook, ...props}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField {...props} variant="outlined" inputProps={formHook}/>
    </div>
  );
};

export default Index;