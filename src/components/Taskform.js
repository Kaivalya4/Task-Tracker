import { useState } from "react";

function Taskform({ onSubmit }) {
    const [tskname, setTskname] = useState("");
    const [dates, setDate] = useState("");
    const [reminder, setReminder] = useState(true);

    function onadd(e) {
        e.preventDefault();
        onSubmit({ taskName: tskname, day: dates, reminder: reminder });
        setTskname("");
        setDate("");
        setReminder(true);
    }

    function changetskname(e) {
        setTskname(e.target.value);
    }

    function changeDate(e) {
        setDate(e.target.value);
    }

    function changeRem(e) {
        setReminder(e.target.value);
    }

    return (
        /*onChnage will handle when we write something in field */
        <form className="new-task" onSubmit={onadd}>
            <label className="spacing">Task</label>
            <input
                type="text"
                placeholder="Add Task Name"
                className="pos"
                onChange={changetskname}
                required
            />
            <br />
            <label className="spacing">Date and Time</label>
            <input
                type="text"
                placeholder="Add Time"
                className="pos"
                onChange={changeDate}
                required
            />
            <br />
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <label htmlFor="rem-check" className="spacing">
                    Set Reminder
                </label>
                <input
                    type="checkbox"
                    id="rem-check"
                    onChange={changeRem}
                    className="checkboxes"
                    checked
                />
            </div>
            <br />
            <br />
            <input type="submit" id="submit" value="Add The Task" />
        </form>
    );
}

export default Taskform;
