import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior:"smooth"})
      }, 300)
    } else {
      window.scrollTo({ top: 0, behavior:"smooth"})
    }
  }, [pathname]);

    return null;
}