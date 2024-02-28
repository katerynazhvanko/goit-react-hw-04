// import { useState } from 'react'

import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ImageCard from "./components/ImageCard";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage";
import ImageModal from "./components/ImageModal";

import "./App.css";

export default function App() {
  return (
    <>
      <SearchBar />
      <ImageGallery />
      <ImageCard />
      <Loader />
      <LoadMoreBtn />
      <ErrorMessage />
      <ImageModal />
    </>
  );
}
