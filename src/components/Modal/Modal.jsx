import React from "react";
import "./Modal.css";
import { GoThumbsup } from "react-icons/go";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { RxCrossCircled, RxShare1, RxInfoCircled } from "react-icons/rx";
import { useSelector } from "react-redux";
import { tagSelector } from "../../utils/reducers/FetchCollectionSlice";
import { darkModeSelector } from "../../utils/reducers/ModeSlice";
import { saveAs } from "file-saver";

const Modal = ({ onClose, data, modalIndex }) => {
  const tags = useSelector(tagSelector);
  const isDarkMode = useSelector(darkModeSelector);

  const handleDownload = () => {
    const imageUrl = data?.urls?.regular;

    if (imageUrl) {
      saveAs(imageUrl, "image.jpg");
    }
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modal-close" onClick={onClose}>
          <RxCrossCircled color="white" size={35} />
        </div>
        <div
          className="modal-container"
          style={{
            backgroundColor: isDarkMode ? "black" : "white",
            borderRadius: "10px",
          }}
        >
          <div className="modal-img-container">
            <div className="modal-img-activities">
              <div className="modal-img-activity">
                <RxShare1 color="white" />
                <p>Share</p>
              </div>
              <div className="modal-img-activity">
                <RxInfoCircled color="white" />
                <p>Info</p>
              </div>
            </div>
            <img className="modal-img" src={data?.urls?.regular} alt="" />
            <button className="modal-download-btn" onClick={handleDownload}>
              Download
            </button>
          </div>
          <div className="modal-photo-info">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="modal-user-pfp"
                src={data?.user?.profile_image.small}
                alt=""
              />
              <div className="modal-user-info">
                <p
                  className="modal-title"
                  style={{ color: isDarkMode ? "white" : "black" }}
                >
                  {data?.user.name}
                </p>
                {data?.user.instagram_username && (
                  <p className="modal-username" style={{ marginTop: "-6px" }}>
                    @{data?.user.instagram_username}
                  </p>
                )}
              </div>
              {data.user.social.instagram_username &&
                data.user.social.twitter_username && (
                  <div className="modal-other-social-links">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CiInstagram size={12} />
                      <p>/{data.user.social.instagram_username}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <CiTwitter size={12} />
                      <p>/{data.user.social.twitter_username}</p>
                    </div>
                  </div>
                )}
            </div>
            <div className="modal-like-container">
              <GoThumbsup color="#858484" />
              <p
                className="modal-likes"
                style={{ color: isDarkMode ? "white" : "black" }}
              >
                {data?.likes}
              </p>
            </div>
          </div>
          <h5 style={{ marginLeft: "10px", marginBottom: "-2px" }}>
            Related tags
          </h5>
          <div className="modal-tags">
            {tags[modalIndex]?.map((item, index) => (
              <div key={index} className="tags-container">
                <p className="tag">{item?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
