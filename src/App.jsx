import { useEffect, useState } from "react";
import { fetchImages } from "./components/images-api";

// import ImageCard from "./components/ImageCard";
// import ErrorMessage from "./components/ErrorMessage";
// import ImageModal from "./components/ImageModal";

import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // get fetch
  const handleSearch = async (newQuery) => {
    console.log(newQuery);
    try {
      setIsLoading(true);
      setError(false);
      setImages([]);
      const data = await fetchImages(newQuery, page);
      setImages(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  //   useEffect(() => {

  // })

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn />}
      {error && <p>Oops! Error! Reload!</p>}
      {/* 
      <ImageCard />
      <ErrorMessage />
      <ImageModal /> */}
    </>
  );
}
