import { useMediaQuery } from "@mui/material";

export const device = {
  mobile: "(max-width:599px)",
  tablet: "(min-width:600px) and (max-width:899px)",
  laptop: "(min-width:900px) and (max-width:1199px)",
  desktop: "(min-width:1200px)",
};

export const useResponsive = () => {
  const isMobile = useMediaQuery(device.mobile);
  const isTablet = useMediaQuery(device.tablet);
  const isLaptop = useMediaQuery(device.laptop);
  const isDesktop = useMediaQuery(device.desktop);

  return { isMobile, isTablet, isLaptop, isDesktop };
};
