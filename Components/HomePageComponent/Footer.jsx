import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black/80 border-t border-gray-400/80 border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white">
          © {new Date().getFullYear()} Abdallah Mushtaha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
