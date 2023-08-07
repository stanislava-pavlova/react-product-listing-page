import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row links">
        <ul>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
      </div>

      <div className="row italic">
        FitFusion Footwear © {new Date().getFullYear()} - All rights reserved
      </div>
    </footer>
  );
}
