import "./Image.css";

export default function Image({ src, idx }) {
  return <img src={src} alt="img" className={`image image${idx}`}></img>;
}
