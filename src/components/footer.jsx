import React, { useEffect } from 'react';
import '../styles/footer.css';

const Footer = () => {
  useEffect(() => {
    const adjustFooterPosition = () => {
      const footer = document.querySelector('.footer');
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const footerHeight = footer.offsetHeight;

      if (windowHeight > bodyHeight + footerHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
      } else {
        footer.style.position = 'static';
      }
    };

    window.addEventListener('resize', adjustFooterPosition);
    window.addEventListener('scroll', adjustFooterPosition);

    return () => {
      window.removeEventListener('resize', adjustFooterPosition);
      window.removeEventListener('scroll', adjustFooterPosition);
    };
  }, []);

  return (
    <footer className="footer">
      <p>&copy; 2024. <a href="https://github.com/08HLEB04DRAKIN2004/SV4LABS.git">https://github.com/08HLEB04DRAKIN2004/SV4LABS.git</a></p>
    </footer>
  );
};

export default Footer;
