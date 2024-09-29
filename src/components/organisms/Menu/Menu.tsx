import styles from "./Menu.module.scss";
import CartIcon from "../../molecules/CartIcon/CartIcon";
import MenuItem from "../../molecules/MenuItem/MenuItem";

interface MenuProps {
  isHeader: boolean;
  extensionClass?: string;
  isMenuOpen?: boolean;
  closeMenu?: () => void;
}

export default function Menu({
  isHeader,
  extensionClass,
  isMenuOpen,
  closeMenu = () => {},
}: MenuProps) {
  return (
    <ul
      className={
        isMenuOpen
          ? `${styles["menu"]} ${styles["menu--active"]} ${extensionClass}`
          : `${styles["menu"]} ${extensionClass}`
      }
    >
      <MenuItem closeMenu={closeMenu} link="/#catalog">
        Catalog
      </MenuItem>
      <MenuItem closeMenu={closeMenu} link="/#faq">
        FAQ
      </MenuItem>
      {isHeader && (
        <MenuItem closeMenu={closeMenu} link="/cart">
          <CartIcon />
        </MenuItem>
      )}
    </ul>
  );
}
