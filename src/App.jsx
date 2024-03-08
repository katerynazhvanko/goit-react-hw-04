import { useEffect, useState } from "react";
import { fetchImages } from "./components/images-api";

// import ImageCard from "./components/ImageCard";
// import ErrorMessage from "./components/ErrorMessage";
// import ImageModal from "./components/ImageModal";

import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // get fetch
  const handleSearch = async (newQuery) => {
    console.log(newQuery);
    setSearchQuery(newQuery);
    setPage(1); //для скидання сторінок при іншому пошуку
    setImages([]); //скидаємо масив данних, щоб новий пошук не додавався до нового
  };

  // +1 page
  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchQuery === "") {
      //перевіряємо, щоб не відбувався запит на пустий масив
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        }); // щоб не оновлювався пошук, а просто додавались нові
        setIsLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, searchQuery]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMoreBtn={handleLoadMoreBtn} />
      )}
      {error && <p>Oops! Error! Reload!</p>}
      {/* 
      <ImageCard />
      <ErrorMessage />
      <ImageModal /> */}
    </>
  );
}
