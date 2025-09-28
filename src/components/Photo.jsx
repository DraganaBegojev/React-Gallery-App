// src/components/Photo.jsx
const Photo = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
}

export default Photo;
