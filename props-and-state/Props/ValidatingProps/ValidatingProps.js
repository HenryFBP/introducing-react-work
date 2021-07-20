class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='student'>
                <div>
                    Student ID: {this.props.id}
                </div>
                <div>
                    Name: {this.props.studentName}
                </div>
                <div>
                    Enrolled: {this.props.enrolled ? 'yes' : 'no'}
                </div>
                <div>
                    Campus: {this.props.campus}
                </div>
                <div>
                    Major: {this.props.major}
                </div>
                <div>
                    Courses: {this.props.courses}
                </div>
            </div>
        );
    }
};

//validation using PropTypes library
Student.propTypes = {
    id: PropTypes.number,
    studentName: PropTypes.string,
    enrolled: PropTypes.bool,
    major: PropTypes.string.isRequired,
    campus: PropTypes.oneOf(['North', 'South']),

    courses(prop, propName) { //custom validation function for 'courses' prop value
        var propValue = prop[propName];

        if (propValue == 'Statistics' || propValue == 'Philosophy') {
            throw Error('Sorry, this course is not offered currently.')
        }
    }
}

Student.defaultProps = {
    id: Math.floor(Math.random() * 1000000),
    enrolled: true
};

ReactDOM.render(
    <Student studentName={"Henry"} /*studentName={1234} */
    campus="North"
    major='ITM'
    courses="Cybersec" /*courses="Philosophy"*/
    />,
    document.getElementById('react-default-prop')
);