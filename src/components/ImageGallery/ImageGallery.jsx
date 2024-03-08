import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id} className={css.item}>
          <a href={image.urls.small}>
            <img src={image.urls.small} alt={image.alt_description} />
          </a>
        </li>
      ))}
    </ul>
  );
}
