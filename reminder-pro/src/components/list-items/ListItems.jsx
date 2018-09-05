import React from 'react';
import PropTypes from 'prop-types';

const ListItems = ({ reminders, deleteReminder }) => {
    return (
        <ul className="list-group">
            {
                reminders.map(reminder => (
                    <li className="list-group-item list-group-item--flex" key={reminder.id}>
                        <span className="list-item">{reminder.text}</span>
                        <span className="list-item list-item--delete" onClick={deleteReminder(reminder.id)} onKeyPress={() => undefined} role="button" tabIndex="0">&#x2715;</span>
                    </li>
                ))
            }
        </ul>
    );
};

ListItems.propTypes = {
    reminders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.text,
    })),
    deleteReminder: PropTypes.func,
};

ListItems.defaultProps = {
    reminders: [],
    deleteReminder: null,
};

export default ListItems;
