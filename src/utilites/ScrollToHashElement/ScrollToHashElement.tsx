import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ScrollToHashElement() {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition < lastScrollPosition) {
        // Удаляем хеш из URL при скроллинге вверх
        navigate(pathname, { replace: true });
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate, pathname, lastScrollPosition]);

  return null;
}
