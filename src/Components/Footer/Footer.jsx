import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <p> Copyright &copy; {new Date().getFullYear()} </p>
      <p className="brand"> Gandu Gang </p>
    </div>
  );
}

export default Footer;
