import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Animation from '../../components/Animation';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import i18n from '../../i18n';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingTop: theme.spacing(2),
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
    borderRadius: 0, 
    boxShadow: "none",
    backgroundColor: '#F5F6FA'
  },
}));

function Welcome() {
  const classes = useStyles();
  const {t} = useTranslation();

  const formatDate = () => {
    let selectedDate;
    selectedDate = new Intl.DateTimeFormat('en-GB', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    }).format(new Date())
    return selectedDate;
}

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item style={{ alignSelf: "center" }}>
              <Animation json={require("../../assets/lottie/loading.json")} autoplay="true"/>
          </Grid>
          <Grid item xs>
              <Typography variant="subtitle1">
                {t("welcome")}
              </Typography>
              <Typography variant="h4" component="h2" style={{fontWeight: "bold", marginTop: "10px"}}>
                {t("header")}
              </Typography>
              <Typography variant="body2" component="p">
                {formatDate()}
              </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

function LanguageSelection() {
  const classes = useStyles();
  const [lang, setLang] = useState("id")
  const {t} = useTranslation();

  const handleChange = (event) => {
    setLang(event.target.value)
    i18n.changeLanguage(event.target.value)
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap">
          <Grid item xs style={{textAlign: 'right'}}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">{(t("selectLanguage"))}</InputLabel>
              <Select
                native
                disableUnderline={true}
                value={lang}
                onChange={handleChange}
              >
                <option value={"id"}>Indonesia</option>
                <option value={"en"}>English</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const headerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    borderRadius: 0, 
    boxShadow: "none",
    backgroundColor: '#F5F6FA'
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function Header() {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item md={9} xs={12}>
            <Welcome/>
          </Grid>
          <Grid item md={3} xs={12}>
            <LanguageSelection/>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}