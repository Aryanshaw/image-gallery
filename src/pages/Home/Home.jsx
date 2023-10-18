import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchInput from "../../components/SearchComponent/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoading,
  loadingSelector,
  getImageData,
  getImageDataError,
  photoDetailsSelector,
  searchTextSelector,
} from "../../utils/reducers/FetchCollectionSlice";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import ImageCard from "../../components/ImageCard/ImageCard";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const photoDetails = useSelector(photoDetailsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalIndex, setModalIndex] = useState("");
  const searchText = useSelector(searchTextSelector);

  const fetchImageCollection = async () => {
    dispatch(isLoading(true));
    try {
      const result = await axios.get(
        "https://api.unsplash.com/collections?page=8&client_id=RQzsbPDyx36ClNnNJ6Ir_wIdW-vq-C3mLQQB2L6Y1qc"
      );
      dispatch(getImageData(result.data));
    } catch (e) {
      dispatch(getImageDataError(e));
    }
    dispatch(isLoading(false));
  };

  useEffect(() => {
    fetchImageCollection();
  }, []);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const donkey = () => {
    console.log("you are a doffy");
  };

  return (
    <div className="home-container">
      <Navbar />
      {searchText === "" ? (
        <div className="center-component">
          <br />
          <h1>Download high quality images by creators</h1>
          <p>Over 2.4 million+ stock Images by our talented community</p>
          <SearchInput
            width="600px"
            fetchImage={fetchImageCollection}
            donkey={donkey}
          />
        </div>
      ) : (
        <div>
          <h1>{searchText}</h1>
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="mainContainer">
          {photoDetails?.map((item, index) => (
            <ImageCard
              props={{
                photoUrl: item?.urls?.regular,
                userName: item?.user.name,
                socialUsername: item?.user.instagram_username,
                likes: item?.likes,
                userPfp: item?.user?.profile_image.small,
                height: item?.height,
                width: item?.width,
              }}
              key={item?.id}
              onClick={() => {
                openModalHandler();
                setModalData(item);
                setModalIndex(index);
              }}
              className="imageCard"
            />
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="modalComponent">
          <Modal
            onClose={closeModal}
            data={modalData}
            modalIndex={modalIndex}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
