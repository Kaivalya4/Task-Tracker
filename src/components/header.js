/*index.css will be applied to it. as it is at root
    index.js includes index.css which in turns call app.js which in turn calls
    for header component . So any descendent can use its parent's style*/

function header() {
    return <h1>Task Tracker</h1>;
}

export default header;

///--------- Section --------
/**
 Props are arguments passed into React components.
Props are passed to components via HTML attributes.
props stands for properties.
 */
/*function header(props) {
    ///I can give any name but iss convention to give name props
    return <div>{props.myheader}</div>;
}*/
///-----------End---------

///----- Section  ------
// This section contains : decoupling , inline and css in js styling ,
/// proptypes
///Decoupling props
// function header({ myheader, hfoot, title }) {
//     return (
//         <div>
//             {/*Using inline styling.
//             Here we dont have any dashes(-) instead
//             we use camel casing
//             like background-color becomes
//             backgroudColor*/}
//             <h1 style={{ color: "green" }}>{myheader}</h1>
//             <h5 style={mystyle}>{hfoot}</h5>
//             <h2>{title}</h2>
//         </div>
//     );
// }

// ///we can define the type of proptypes we are passing
// ///For that we need to include proptypes

// ///We change the proptypes object of our header component
// header.propTypes = {
//     title: PropTypes.bool,
// };

// ///css in js styling
//  //its advisedt to write it at top before its used
// const mystyle = {
//     color: "grey",
// };

///-----------End----------------
