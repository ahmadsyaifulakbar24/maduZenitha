import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/ShoppingCart';
import LoveIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import FBIcon from '@mui/icons-material/Facebook';
import IGIcon from '@mui/icons-material/Instagram';
import YTIcon from '@mui/icons-material/YouTube';
import ShippingIcon from '@mui/icons-material/LocalShipping';

const Hilang = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {},
}));

const Muncul = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'gray',
  marginRight: theme.spacing(5),
  width: '100%', //1070
  [theme.breakpoints.down('md')]: {
    width: 700,
    marginRight: theme.spacing(2),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%', //1000
    [theme.breakpoints.down('md')]: {
      width: 630,
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 10,
  width: 400,
  height: 450,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: 'absolute',
  top: '30%',
  left: '17%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 10,
  width: '20%',
  height: '31%',
  bgcolor: 'white',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  p: 4,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function HeaderBot() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleChange = (prop) => (event) => {
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

  const [open3, setOpen3] = React.useState(false);

  const handleOpenDialog = () => {
    setOpen3(true);
  };

  const handleCloseDialog = () => {
    setOpen3(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: 'white' }}>
          <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}>
            <Hilang
              sx={{
                width: '100%',
                // bgcolor: 'red',
              }}
            >
              <Box
                sx={{
                  // bgcolor: 'red',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <EmailIcon sx={{ color: '#808080' }} />
                <Typography
                  variant="h8"
                  component="div"
                  sx={{ flexGrow: 1, ml: 1, color: '#808080' }}
                >
                  sample@gmail.com
                </Typography>
                <Button>
                  <ShippingIcon sx={{ color: '#808080' }} />
                  <Typography sx={{ ml: 1, color: '#808080' }}>
                    CEK ORDER
                  </Typography>
                </Button>
                <Button sx={{ ml: 5 }}>
                  <Typography sx={{ color: '#808080' }}>CEK STOK</Typography>
                </Button>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ ml: 18 }}
                >
                  <FBIcon sx={{ color: '#808080' }} />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ ml: 1 }}
                >
                  <IGIcon sx={{ color: '#808080' }} />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  sx={{ ml: 1 }}
                >
                  <YTIcon sx={{ color: '#808080' }} />
                </IconButton>
              </Box>
            </Hilang>
            <Box
              sx={{
                width: '100%',
                py: 1,
                // bgcolor: 'red',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Hilang>
                <CardMedia
                  component="img"
                  image="/assets/images/logo 3.png"
                  // sx={{ py: 1 }}
                />
              </Hilang>
              <Link to="/">
                <IconButton
                  sx={{
                    mr: 1,
                  }}
                >
                  <HomeIcon
                    sx={{
                      color: 'orange',
                      [theme.breakpoints.down('md')]: {
                        color: 'orange',
                        fontSize: 40,
                      },
                    }}
                  />
                </IconButton>
              </Link>
              <Hilang>
                <Button sx={{ mr: 3 }} onClick={handleOpen2}>
                  <Typography
                    sx={{ fontWeight: 'bold', color: 'black', width: 130 }}
                  >
                    PRODUK KAMI
                  </Typography>
                  <ArrowDownIcon sx={{ color: 'gray' }} />
                </Button>
              </Hilang>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Cari Produk"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Hilang>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRight: 1,
                    borderRightColor: 'lightgrey',
                    mr: 5,
                  }}
                >
                  <IconButton sx={{ mr: 5 }}>
                    <LoveIcon sx={{ color: 'black' }} />
                  </IconButton>
                </Box>
              </Hilang>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRight: 1,
                  borderRightColor: 'lightgrey',
                  mr: 4,
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRight: 1,
                    borderRightColor: 'lightgrey',
                    mr: 2,
                  },
                }}
              >
                <Link to="/cart-page">
                  <IconButton
                    sx={{
                      mr: 5,
                      [theme.breakpoints.down('md')]: {
                        mr: 0,
                      },
                    }}
                  >
                    <CartIcon
                      sx={{
                        color: 'black',
                        [theme.breakpoints.down('md')]: {
                          fontSize: 30,
                        },
                      }}
                    />
                  </IconButton>
                </Link>
              </Box>
              <Hilang sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'black',
                    mr: 3,
                  }}
                  onClick={handleOpen}
                >
                  LOGIN
                </Button>
                <Link to="/register-page" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: 'orange',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'orange',
                      flexDirection: 'column-reverse',
                    }}
                  >
                    DAFTAR
                  </Button>
                </Link>
              </Hilang>
              <Muncul>
                <IconButton onClick={handleOpenDialog}>
                  <MenuIcon sx={{ fontSize: 40, color: 'black' }} />
                </IconButton>
                <Dialog
                  fullScreen
                  open={open3}
                  onClose={handleCloseDialog}
                  TransitionComponent={Transition}
                >
                  <AppBar sx={{ position: 'relative', bgcolor: 'white' }}>
                    <Toolbar>
                      <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleCloseDialog}
                        aria-label="close"
                      >
                        <CloseIcon sx={{ color: 'black' }} />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <List>
                    <ListItem button>
                      <ListItemText
                        primary="Phone ringtone"
                        secondary="Titania"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText
                        primary="Default notification ringtone"
                        secondary="Tethys"
                      />
                    </ListItem>
                  </List>

                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: 'white',
                      color: 'black',
                      fontWeight: 'bold',
                      borderColor: 'black',
                      mt: 5,
                      width: '50%',
                      alignSelf: 'center',
                    }}
                    onClick={handleOpen}
                  >
                    LOGIN
                  </Button>
                  <Link to="/register-page">
                    <Button
                      onClick={handleCloseDialog}
                      variant="outlined"
                      sx={{
                        backgroundColor: 'orange',
                        color: 'white',
                        fontWeight: 'bold',
                        borderColor: 'orange',
                        mt: 5,
                        width: '50%',
                        ml: 29,
                      }}
                    >
                      DAFTAR
                    </Button>
                  </Link>
                </Dialog>
              </Muncul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Box sx={{}}>
        <AppBar
          position="static"
          sx={{
            bgcolor: 'white',
            [theme.breakpoints.down('md')]: {
              // width: '100%',
              height: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Toolbar>
            <Hilang>
              <Avatar
                variant="rounded"
                src="/assets/images/logo 3.png"
                sx={{ bgcolor: 'black', width: 150, height: 50, mr: 3 }}
              />
            </Hilang>
            <Link to="/">
              <IconButton
                sx={{
                  mr: 1,
                }}
              >
                <HomeIcon
                  sx={{
                    color: 'orange',
                    [theme.breakpoints.down('md')]: {
                      color: 'orange',
                      fontSize: 40,
                    },
                  }}
                />
              </IconButton>
            </Link>

            <Hilang>
              <Button sx={{ mr: 3 }} onClick={handleOpen2}>
                <Typography
                  sx={{ fontWeight: 'bold', color: 'black', width: 130 }}
                >
                  PRODUK KAMI
                </Typography>
                <ArrowDownIcon sx={{ color: 'gray' }} />
              </Button>
            </Hilang>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Cari Produk"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <Hilang>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRight: 1,
                  borderRightColor: 'lightgrey',
                  mr: 5,
                }}
              >
                <IconButton sx={{ mr: 5 }}>
                  <LoveIcon sx={{ color: 'black' }} />
                </IconButton>
              </Box>
            </Hilang>

            <Box
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRight: 1,
                borderRightColor: 'lightgrey',
                mr: 4,
                [theme.breakpoints.down('md')]: {
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRight: 1,
                  borderRightColor: 'lightgrey',
                  mr: 2,
                },
              }}
            >
              <Link to="/cart-page">
                <IconButton
                  sx={{
                    mr: 5,
                    [theme.breakpoints.down('md')]: {
                      mr: 0,
                    },
                  }}
                >
                  <CartIcon
                    sx={{
                      color: 'black',
                      [theme.breakpoints.down('md')]: {
                        fontSize: 30,
                      },
                    }}
                  />
                </IconButton>
              </Link>
            </Box>

            <Hilang sx={{ display: 'flex', flexDirection: 'row' }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontWeight: 'bold',
                  borderColor: 'black',
                  mr: 3,
                }}
                onClick={handleOpen}
              >
                LOGIN
              </Button>
              <Link to="/register-page" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'orange',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'orange',
                    flexDirection: 'column-reverse',
                  }}
                >
                  DAFTAR
                </Button>
              </Link>
            </Hilang>

            <Muncul>
              <IconButton onClick={handleOpenDialog}>
                <MenuIcon sx={{ fontSize: 40, color: 'black' }} />
              </IconButton>
              <Dialog
                fullScreen
                open={open3}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
              >
                <AppBar sx={{ position: 'relative', bgcolor: 'white' }}>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleCloseDialog}
                      aria-label="close"
                    >
                      <CloseIcon sx={{ color: 'black' }} />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <List>
                  <ListItem button>
                    <ListItemText
                      primary="Phone ringtone"
                      secondary="Titania"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText
                      primary="Default notification ringtone"
                      secondary="Tethys"
                    />
                  </ListItem>
                </List>

                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'black',
                    mt: 5,
                    width: '50%',
                    alignSelf: 'center',
                  }}
                  onClick={handleOpen}
                >
                  LOGIN
                </Button>
                <Link to="/register-page">
                  <Button
                    onClick={handleCloseDialog}
                    variant="outlined"
                    sx={{
                      backgroundColor: 'orange',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'orange',
                      mt: 5,
                      width: '50%',
                      ml: 29,
                    }}
                  >
                    DAFTAR
                  </Button>
                </Link>
              </Dialog>
            </Muncul>
          </Toolbar>
        </AppBar>
      </Box> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // hideBackdrop="true"
      >
        <Box sx={style}>
          <IconButton
            sx={{
              mb: 2,
              ml: 45,
              mt: -2,
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
            Masuk
          </Typography>
          <Typography
            sx={{
              mt: -3,
              display: 'flex',
              justifyContent: 'flex-end',
              color: 'orange',
            }}
          >
            Daftar
          </Typography>
          <Typography sx={{ mt: 4 }}>Email/No.Ponsel</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: '100%', mt: 1 }}
          />
          <Typography sx={{ mt: 4 }}>Kata Sandi</Typography>
          <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
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
            }}
          >
            Lupa Kata Sandi
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                backgroundColor: 'orange',
                color: 'white',
                fontWeight: 'bold',
                borderColor: 'orange',
                mt: 5.5,
                ml: 5.5,
                borderRadius: 20,
                width: 300,
                height: 50,
                textTransform: 'capitalize',
                fontSize: 20,
              }}
            >
              Masuk
            </Button>
          </Link>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: { opacity: 0.1 } }}
      >
        <Box sx={style2}>
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                height: 70,
                borderBottom: 1,
                borderBottomColor: 'gray',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  width: '25%',
                  borderRight: 1,
                  borderRightColor: 'gray',
                  height: '85%',
                  display: 'flex',
                  alignItems: 'center',
                  pr: 2,
                }}
              >
                <CardMedia component="img" image="/assets/images/logo 3.png" />
              </Box>
              <Box
                sx={{
                  width: '75%',
                  height: '85%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontSize: 20, ml: 2, fontWeight: 'bold' }}>
                  MADU AZZURA
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ mt: 2, color: 'gray' }}>Sale</Typography>
            <Typography sx={{ mt: 2, color: 'gray' }}>Madu Murni</Typography>
            <Typography sx={{ mt: 2, color: 'gray' }}>
              Herbal & Multivitamin
            </Typography>
            <Typography sx={{ mt: 2, color: 'gray' }}>Madu Sarang</Typography>
            <Typography sx={{ mt: 2, color: 'gray' }}>Madu Hitam</Typography>
            <Typography sx={{ mt: 2, color: 'gray' }}>
              Madu Ekstraksi
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default HeaderBot;
