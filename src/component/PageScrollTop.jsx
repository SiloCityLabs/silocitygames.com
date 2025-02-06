import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <></>;
};

export default PageScrollTop;
