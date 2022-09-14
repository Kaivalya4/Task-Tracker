import Header from "./components/header";
import Button from "./components/button";
import Tasks from "./components/tasks";
import { useState } from "react";
import { FaBlackTie } from "react-icons/fa";
import tasks from "./components/tasks";
import Taskform from "./components/Taskform";

//https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a
//The above link is for triple dot ... operator

/*
Syntax: The first element is the initial state and the second one is a function
that is used for updating the state.
const [state, setState] = useState(initialstate)
 */

function App() {
    const [formstate, setformstate] = useState(false);

    const [initialtasks, settasks] = useState([
        {
            id: 1,
            taskName: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            taskName: "School Meeting",
            day: "Feb 6th at 1:30pm",
            reminder: true,
        },
        {
            id: 3,
            taskName: "Amusement Park",
            day: "Feb 6th at 6:30pm",
            reminder: false,
        },
    ]);

    const clickfunc = (e) => {
        setformstate(!formstate);
        console.log("myclick");
    };

    function deletetasks(id) {
        //console.log(id);

        ///setasks takes the new value which
        ///initialtaks should have and .filter()
        ///method is returning that only . so
        /// after one delete there will be only
        ///n-1 tasks remaining in initialtasks
        settasks(
            initialtasks.filter(function (each) {
                return each.id != id;
            })
        );
    }

    function addTask(toadd) {
        console.log(toadd);
        const id = Math.floor(Math.random() * 1000) + 10;
        const temp = { ...toadd, id }; ///if i write only id it will be like "id : valueofid" inside object
        settasks([...initialtasks, temp]);
    }

    function doubleclick(id) {
        settasks(
            initialtasks.map(function (each) {
                if (each.id != id) return each;
                if (each.reminder == true) each.reminder = false;
                else each.reminder = true;
                return each;
            })
        );
    }

    /*
    Notes:
    -> if-else not works in jsx as it is a syntactic 
        sugar for function calls and object construction
    */
    return (
        <div>
            <div className="header__container">
                <Header />
                <Button
                    className="button"
                    myclick={clickfunc}
                    clicked={formstate}
                />
            </div>
            <div className="newtask__container">
                {formstate ? <Taskform onSubmit={addTask} /> : ""}
            </div>
            <div className="task__container">
                {initialtasks.length > 0 ? (
                    <Tasks
                        currtask={initialtasks}
                        onDelete={deletetasks}
                        ondbclick={doubleclick}
                    />
                ) : (
                    "No tasks to show"
                )}
            </div>
        </div>
    );
}

export default App;

///-----Section--------
///Decoupling , props , typing props , styling
// function App() {
//     return (
//         <Header myheader="Task Tracker" hfoot="Be Tension free" title={true} />
//     );
// }
///---------End--------

///---------Section-------
/*
If you are rendering your component using JSX, 
the name of that component has to begin with a capital letter 
otherwise React will throw an error as unrecognized tag. 
This convention is because only HTML elements and SVG tags 
can begin with a lowercase letter. 

You can define component class which name starts with lowercase letter, 
but when it's imported it should have capital letter. 
*/

// function App() {
//     const x = 10;
//     return (
//         /**we can return only one element . But that element can contain other
//          elements in itselt.*/
//         <div className="App">
//             Hello
//             <p>{x === 10 ? "yes" : "no"}</p>
//         </div>
//     );
// }

/*Just for example:
To use class based component we need to extend our class to React.Component */

// class App extends React.Component {
//     render() {
//         return <h1>Hello From Kaivalya</h1>;
//     }
// }

///----------End----------
