/* eslint-disable */
import {useNavigate} from 'react-router-dom';
import '../styles/AcademyHeader.css';
const ImportExportHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="header">
        <div class="header-1">
          <img className="logo2" src="./images/logo2.jpg" alt="logo" />
          {/* <h1>Eva Aviation Import & Export</h1> */}
        </div>
        <ul>
          <a
            onClick={() => {
              navigate('/import&exporthome');
            }}
          >
            Home
          </a>
          <a
            onClick={() => {
              navigate('/import&exportabout');
            }}
          >
            About
          </a>
          <a>
            <div class="dropdown">
              <span
                onClick={() => {
                  navigate('/our-product');
                }}
              >
                Our Product
              </span>
              <div class="dropdown-content">
                <a
                  onClick={() => {
                    navigate('/spiceses');
                  }}
                >
                  Spices
                </a>
              </div>
            </div>
          </a>
          <a
            onClick={() => {
              navigate('/enquirys');
            }}
          >
            Enquiry
          </a>
          <a
            onClick={() => {
              navigate('/');
            }}
          >
            MainPage
          </a>
        </ul>
      </div>
      <hr />
    </>
  );
};
export default ImportExportHeader;
