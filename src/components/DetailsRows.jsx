import { Details } from "./Details";
import "../App.css";


function DetailsRows() {
    const Rows = Details.map((i) => (
        <div className="Row">
        <div className="image">
            <img src={i.Image} alt="image" className="image Row-Items" />
        </div>
        <div className="details Row-Items">
            <p style={{fontWeight: "bold"}}>{i.Name}</p>
            <p>{i.Email}</p>
        </div>
        </div>
    )

    )
    return Rows;
}

export default DetailsRows;