import "./style.css";
import image from "./peacock.jpg";
function Peacock() {
  return (
    <div className="body">
      <div className="inside">
        <img src={image} alt="Peacock" className="image" />
        <div className="info">
          <h1>Peacock</h1>
          <p>
            The peacock, also widely popular as peafowl, is a medium-sized,
            colorful bird belonging to the pheasant family. The bird is native
            to Asia. Peacocks are symbolized as a primary bird in India and
            Burma.
          </p>
          <div className="buttons">
            <span className="buttons">SHARE</span>
            <span className="buttons">LEARN MORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Peacock;