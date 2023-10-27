import React from "react";
// ©️import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>Copyright ©️ {date}</p>
      </footer>
    </>
  );
};

export default Footer;
