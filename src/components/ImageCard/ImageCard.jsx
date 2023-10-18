import React, { useRef, useState, useEffect } from "react";
import "./ImageCard.css";
import { GoThumbsup } from "react-icons/go";
import { searchTextSelector } from "../../utils/reducers/FetchCollectionSlice";
import { useSelector } from "react-redux";
// getSearchText

const ImageCard = ({ props, onClick }) => {
  const cardRef = useRef(null);
  const [area, setArea] = useState(0);
  const searchText = useSelector(searchTextSelector);
  const [cardHeight, setCardHeight] = useState(0);

  function determineSize() {
    if (area === 148190 || (area < 9050090 && area > 148000)) {
      return "large";
    } else if (area >= 80000 && area <= 148000) {
      return "medium";
    } else if (area < 80000) {
      return "small";
    } else {
      return "default";
    }
  }


  useEffect(() => {
    if (cardRef.current) {
      const { offsetWidth, offsetHeight } = cardRef.current;
      const cardArea = offsetWidth * offsetHeight;
      setCardHeight(offsetHeight);
      setArea(cardArea);
    }
  }, [cardRef.current,area,searchText]);

  const size = determineSize();

  return (
    <div
      className={`pin ${size}`}
      onClick={onClick}
      ref={cardRef}
      area={area}
      height={cardHeight}
    >
      <div className="card-img-container">
        <img className="card-img" src={props.photoUrl} alt="" />
      </div>
      <div className="card-photo-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="card-user-pfp" src={props.userPfp} alt="" />
          <div className="card-user-info">
            <p className="card-title">{props.userName}</p>
            {props.socialUsername && (
              <p className="card-username" style={{ marginTop: "-6px" }}>
                @{props.socialUsername}
              </p>
            )}
          </div>
        </div>
        <div className="modal-like-container">
          <GoThumbsup color="#858484" />
          <p className="card-likes">{props.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
