import React from "react";
import "./ProfileDropDownOption.css";
function ProfileDropDownOption({ text, Icon }) {
  return (
    <div className="prof__dropdown__option">
      <p>{text}</p>
      <Icon />
    </div>
  );
}

export default ProfileDropDownOption;
