import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
 
/**
 * desplaza la ventana hacia arriba cuando la ubicación cambia
 */
export const ScrollToTop = () => {
  const location = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
 
  return null;
};
 
