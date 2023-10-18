import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  isLoading,
  getImageDataError,
  getImageData,
  getSearchText,
} from "../../utils/reducers/FetchCollectionSlice";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import "./SearchInput.css";

const SearchInput = ({ width, fetchImage, donkey }) => {
  const inputStyle = {
    width: width || "200px",
    alignSelf: "center",
    padding: "10px",
    border: "none",
  };
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [hitEnter, setHitEnter] = useState("");

  const handleSearchInputChange = (event) => {
    setText(event.target.value);
  };

  const searchImageHandler = async () => {
    dispatch(isLoading(true));
    try {
      dispatch(getSearchText(text));
      const result = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=RQzsbPDyx36ClNnNJ6Ir_wIdW-vq-C3mLQQB2L6Y1qc`
      );
      dispatch(getImageData(result.data.results));
    } catch (e) {
      dispatch(getImageDataError(e));
    }
    dispatch(isLoading(false));
  };

  useEffect(() => {
    if (hitEnter === "Enter") searchImageHandler();
    if (text === "" && fetchImage !== undefined) fetchImage();
  }, [text, hitEnter]);

  return (
    <div className="search-container">
      <AiOutlineSearch />
      <input
        type="text"
        placeholder="Search..."
        style={inputStyle}
        value={text}
        onChange={handleSearchInputChange}
        onKeyDown={(e) => setHitEnter(e.key)}
      />
      {text && (
        <RxCross1 style={{ cursor: "pointer" }} onClick={() => setText("")} />
      )}
    </div>
  );
};

export default SearchInput;
