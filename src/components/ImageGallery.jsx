export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <a href={image.urls.small}>
            <img src={image.urls.small} alt={image.alt_description} />
          </a>
        </li>
      ))}
    </ul>
  );
}
