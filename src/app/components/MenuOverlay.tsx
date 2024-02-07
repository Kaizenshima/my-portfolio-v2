import React from "react";
import NavLink from "./NavLink";
import { NavLists } from "./constants/NavLists";

interface MenuOverlayProps {
    links: typeof NavLists;
    }

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {NavLists.map((link, index) => (
        <li key={index}>
          <NavLink title={link.title} path={link.path} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
