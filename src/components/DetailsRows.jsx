import { Details } from "./Details";
import "../App.css";

function DetailsRows(props) {
  const selected = Details.filter((item) => {
    if (props.input === "") {
      return item;
    } else {
      return item.text.toLowerCase().includes(props.input);
    }
  });
  return selected.map((i) => (
    <div className="Row">
      <div className="image">
        <img src={i.Image} alt="image" className="image Row-Items" />
      </div>

      <div className="details Row-Items">
        <p style={{ fontWeight: "bold" }}>{i.Name}</p>
        <p>{i.Email}</p>
      </div>
    </div>
  ));
}

export default DetailsRows;
