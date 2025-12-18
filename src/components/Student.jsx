import PropTypes from 'prop-types';
import './Student.css';

const Student = (props) => {

    const attendanceButtonClicked = () => {
        props.onPresenceToggle(props.id);
};

    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={attendanceButtonClicked}>
                Toggle if {props.name} is present
            </button>
        </div>
    );
};

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool.isRequired,
    onPresenceToggle: PropTypes.func.isRequired,
};

export default Student;