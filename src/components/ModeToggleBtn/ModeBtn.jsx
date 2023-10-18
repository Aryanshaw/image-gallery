import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../utils/reducers/ModeSlice";
import Switch from "react-switch";
import "./ModeBtn.css"

const ModeBtn = () => {
  const isDarkMode = useSelector((state) => state.mode.isDarkMode);
  const dispatch = useDispatch();

  const toggleMode = () => {
    const newMode = !isDarkMode;
    dispatch(toggleDarkMode());
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));

    if (savedMode !== null) {
      document.body.classList.toggle("dark-mode", savedMode);
      dispatch(toggleDarkMode());
    } else {
      document.body.classList.toggle("light-mode", savedMode);
      dispatch(toggleDarkMode());
    }
  }, [dispatch]);

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
