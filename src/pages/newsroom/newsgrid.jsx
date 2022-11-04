import Newsitem from "./newsitem";
import "./index.css";

function Newsgrid({ items }) {
  return (
    <div className="newsgrid">
      {items && items.map((item, i) => (
        <Newsitem key={i} item={item} />
      ))}
    </div>
  );
}

export default Newsgrid;
