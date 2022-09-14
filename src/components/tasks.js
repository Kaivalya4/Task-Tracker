///importing cross sign from font-awesome and font-awesome is in react-icons
import { FaTimes } from "react-icons/fa";

function tasks({ currtask, onDelete, ondbclick }) {
    return (
        <>
            {currtask.map(function (each) {
                return (
                    ///key is used for unique identification
                    <div
                        key={each.id}
                        className={`each-task ${
                            each.reminder ? "each-task--reminder" : ""
                        }`}
                        onDoubleClick={() => ondbclick(each.id)}
                    >
                        <h3
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            {each.taskName}
                            <FaTimes
                                style={{
                                    color: "red",
                                    cursor: "pointer",
                                    height: "30px",
                                }}
                                className="fatimes"
                                //onClick={onDelete(each.id)} -- This will print
                                //even before clicking because this is a function call
                                //which calls and assign the value to onClick
                                onClick={() => onDelete(each.id)} //-- Now we are
                                // passing a function definition . So when onClick happens this
                                // anonymous function will be called Inside which in turn
                                // will call onDelete
                            />
                        </h3>
                        <p>{each.day}</p>
                    </div>
                );
            })}
        </>
    );
}

export default tasks;
