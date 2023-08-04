import React, { useState } from "react";
import { Link } from "react-router-dom";
import COLMAN from "../Assets/COLMAN.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const NavBar = ({ onNavItemClick }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
    },
    {
      text: "Info",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonios",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contacto",
      icon: <PhoneRoundedIcon />,
    },
    /*     {
      text: "Pedidos",
      icon: <ShoppingCartRoundedIcon />,
    }, */
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={COLMAN} alt="" />
      </div>
      <div className="navbar-links-container">
        {/* <a onClick={() => onNavItemClick("Home")}>Inicio</a> */}
        <a onClick={() => onNavItemClick("About")}>Info</a>
        <a onClick={() => onNavItemClick("Services")}>Servicios</a>
        <a onClick={() => onNavItemClick("Team")}>Team</a>
        <a onClick={() => onNavItemClick("Contact")}>Contacto</a>
        {/* <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a> */}
        <Link to={`${process.env.PUBLIC_URL}/reserva`}>
          <button className="primary-button">Reserva Ahora!</button>
        </Link>
      </div>
      {/* <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer> */}
    </nav>
  );
};

export default NavBar;
