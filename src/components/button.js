import React from "react";
import "./button.css";

/*button.css is available to all file at component folder level */
function button({ myclick, clicked }) {
    return (
        <button
            onClick={myclick}
            className={clicked ? "but-class--red" : "but-class"}
        >
            {clicked ? "Close" : "Add+"}
        </button>
    );
}

export default button;
