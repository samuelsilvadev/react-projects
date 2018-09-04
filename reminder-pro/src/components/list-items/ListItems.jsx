import React from 'react';

const ListItems = ({ reminders, deleteReminder }) => {
    return (
        <ul className="list-group">
            {
                reminders.map(reminder => {
                    return (
                        <li className="list-group-item list-group-item--flex" key={reminder.id}>
                            <span className="list-item">{reminder.text}</span>
                            <span className="list-item list-item--delete" onClick={deleteReminder(reminder.id)}>&#x2715;</span>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default ListItems;