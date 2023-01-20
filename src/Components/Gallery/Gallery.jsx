import "./gallery.css";
import images from "./Image_array";
import Details from "./Details";

function createImages(entryImage) {
  return (
    <Details key={entryImage.id} name={entryImage.name} img={entryImage.img} />
  );
}

function Gallery() {
  return (
    <div>
      <h1>
        <span> Our Members</span>
      </h1>
      <dl className="dictionary">{images.map(createImages)}</dl>
    </div>
  );
}

export default Gallery;
