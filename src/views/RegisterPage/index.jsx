import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const Hilang = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {},
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function RegisterPage() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChangePass = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [nomor, setNomor] = React.useState('');

  const handleChange = (event) => {
    setNomor(event.target.value);
  };

  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          height: 835,
          ml: 10,
          paddingTop: 22,
          display: 'flex',
          flexDirection: 'row',
          [theme.breakpoints.down('md')]: {
            height: 1000,
            ml: 6,
            paddingTop: 22,
            display: 'flex',
            flexDirection: 'row',
            width: 850,
          },
        }}
      >
        <Box
          sx={{
            width: '40%',
            mr: 10,
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 'bold',
              [theme.breakpoints.down('md')]: {
                fontSize: 50,
                fontWeight: 'bold',
              },
            }}
          >
            Masuk
          </Typography>
          <Typography
            sx={{
              mt: 1,
              [theme.breakpoints.down('md')]: {
                fontSize: 25,
                mt: 1,
                width: '100%',
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>

          <Box sx={{ width: '100%', mt: 5 }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChangeTabs}
                aria-label="basic tabs example"
                textColor="black"
              >
                <Tab
                  label="Masuk"
                  {...a11yProps(0)}
                  sx={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    mr: 5,
                    [theme.breakpoints.down('md')]: {
                      fontSize: 28,
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                      mr: 5,
                    },
                  }}
                />
                <Tab
                  label="Daftar"
                  {...a11yProps(1)}
                  sx={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    mr: 5,
                    [theme.breakpoints.down('md')]: {
                      fontSize: 28,
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                      mr: 5,
                    },
                  }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography
                sx={{
                  mt: 4,
                  [theme.breakpoints.down('md')]: {
                    fontSize: 25,
                    mt: 4,
                  },
                }}
              >
                Email/No.Ponsel
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="contoh: sample@gmail.com"
                sx={{
                  width: '100%',
                  mt: 1,
                }}
              />
              <Typography
                sx={{
                  mt: 4,
                  [theme.breakpoints.down('md')]: {
                    fontSize: 25,
                    mt: 4,
                  },
                }}
              >
                Kata Sandi
              </Typography>
              <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChangePass('password')}
                  placeholder="maksimal 8 karakter"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormGroup
                sx={{
                  [theme.breakpoints.down('md')]: {
                    transform: 'scale(1.5)',
                    ml: 21,
                    mt: 5,
                  },
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[800],
                        },
                      }}
                    />
                  }
                  label="Ingat Saya"
                />
              </FormGroup>
              <Typography
                sx={{
                  color: 'blue',
                  textDecorationLine: 'underline',
                  fontSize: 10,
                  mt: -3,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  [theme.breakpoints.down('md')]: {
                    color: 'blue',
                    textDecorationLine: 'underline',
                    fontSize: 20,
                    mt: -4,
                    display: 'flex',
                    justifyContent: 'flex-end',
                  },
                }}
              >
                Lupa Kata Sandi
              </Typography>
              <Link to="/">
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'orange',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'orange',
                    mt: 5.5,
                    borderRadius: 20,
                    width: '100%',
                    height: 50,
                    fontSize: 20,
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'orange',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'orange',
                      mt: 5.5,
                      borderRadius: 20,
                      width: '100%',
                      height: 70,
                      fontSize: 25,
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Typography
                sx={{
                  mt: 4,
                  [theme.breakpoints.down('md')]: {
                    fontSize: 25,
                    mt: 4,
                  },
                }}
              >
                Email/No.Ponsel
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="contoh: sample@gmail.com"
                sx={{ width: '100%', mt: 1 }}
              />
              <Typography
                sx={{
                  mt: 4,
                  [theme.breakpoints.down('md')]: {
                    fontSize: 25,
                    mt: 4,
                  },
                }}
              >
                Nomor Ponsel
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                <Box sx={{ minWidth: '15%', mr: 3 }}>
                  <FormControl fullWidth>
                    {/* <InputLabel id="demo-simple-select-label">+62</InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={nomor}
                      onChange={handleChange}
                    >
                      <MenuItem
                        value={'+62'}
                        sx={{
                          [theme.breakpoints.down('md')]: {
                            fontSize: 25,
                            mt: 4,
                          },
                        }}
                      >
                        +62
                      </MenuItem>
                      <MenuItem
                        value={'+62'}
                        sx={{
                          [theme.breakpoints.down('md')]: {
                            fontSize: 25,
                            mt: 4,
                          },
                        }}
                      >
                        +62
                      </MenuItem>
                      <MenuItem
                        value={'+62'}
                        sx={{
                          [theme.breakpoints.down('md')]: {
                            fontSize: 25,
                            mt: 4,
                          },
                        }}
                      >
                        +62
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: '85%' }}
                />
              </Box>
              <Typography
                sx={{
                  mt: 4,
                  [theme.breakpoints.down('md')]: {
                    fontSize: 25,
                    mt: 4,
                  },
                }}
              >
                Nama Lengkap
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="contoh: John Pantau"
                sx={{ width: '100%', mt: 1 }}
              />
              <Typography
                sx={{
                  mt: 4,
                  [theme.breakpoints.down('md')]: {
                    fontSize: 25,
                    mt: 4,
                  },
                }}
              >
                Kata Sandi
              </Typography>
              <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChangePass('password')}
                  placeholder="maksimal 8 karakter"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Link to="/">
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'orange',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'orange',
                    mt: 5.5,
                    borderRadius: 20,
                    width: '100%',
                    height: 50,
                    fontSize: 20,
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'orange',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'orange',
                      mt: 5.5,
                      borderRadius: 20,
                      width: '100%',
                      height: 70,
                      fontSize: 25,
                    },
                  }}
                >
                  Daftar
                </Button>
              </Link>
            </TabPanel>
          </Box>
        </Box>

        <Hilang
          sx={{
            width: '100%',
            display: 'flex',
            mt: -3,
            flexDirection: 'row',
            bgcolor: 'orange',
          }}
        >
          <Box sx={{ position: 'absolute', right: 80, top: 190 }}>
            <CardMedia component="img" image="/assets/images/logo 3.png" />
          </Box>
        </Hilang>
      </Box>
    </>
  );
}

export default RegisterPage;
