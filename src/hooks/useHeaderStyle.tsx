// src/hooks/useHeaderStyle.js

import { useLocation } from 'react-router-dom';

const useHeaderStyle = () => {
  const location = useLocation();

  // Define the pages that require custom styles for the header
  const darkBackgroundPages = [ '/about', '/contact'];  // Add all pages with light backgrounds here

  // Check if current path is in the darkBackgroundPages array
  const isDarkBackground = darkBackgroundPages.includes(location.pathname);

  return { isDarkBackground };
};

export default useHeaderStyle;
