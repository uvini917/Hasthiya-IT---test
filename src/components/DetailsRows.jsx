import { Details } from "./Details";
import "../App.css";

function DetailsRows(props) {
  const selected = Details.filter((item) => {
    if (props.input === "") {
      return item;
    } else {
      const result = item.Name.toLowerCase().includes(props.input);
      if (result == false) {
        return item.Email.toLowerCase().includes(props.input);
      } else return result;
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
