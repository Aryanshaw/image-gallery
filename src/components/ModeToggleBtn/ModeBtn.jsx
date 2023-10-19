import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../utils/reducers/ModeSlice";
import Switch from "react-switch";
import "./ModeBtn.css"

const ModeBtn = () => {
  const isDarkMode = useSelector((state) => state.mode.isDarkMode);
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="toggle-container">
      <h4 className="navbar-item">Dark Mode</h4>
      <Switch
        onChange={toggleMode}
        checked={isDarkMode}
        height={20}
        width={48}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </div>
  );
};

export default ModeBtn;
