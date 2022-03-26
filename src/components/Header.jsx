import React from "react";
import i18n from '../translation/i18n';

const Header = (props) => {
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }

  return (

    <React.Fragment>
      <img
        src={props.data ? props.data.img : ""}
        className="img-fluid"
        style={{ width: "100%" }}
        alt="..."
      />
      <div className="language" onClick={changeLanguage}>
      <button value="vi"><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/shiny/64x64/vn.png" alt="..." />Việt Nam</button>
      <button value="en"><img src="https://dichthuatphuongdong.com/tienich/uploads/flags/shiny/64x64/us.png" alt="..." />English</button> 
      </div>

    </React.Fragment>
  );
}
export default Header;
