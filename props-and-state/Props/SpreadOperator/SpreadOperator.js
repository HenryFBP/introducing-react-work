class Employee extends React.Component {
    render() {
        return (
            <div className='employee'>
                <div>
                    Name: {this.props.employeeName}
                </div>
                <div>
                    Designation: {this.props.designation}
                </div>
                <div>
                    Tenure: {this.props.tenure}
                </div>
            </div>
        );
    }
}

class Activities extends React.Component {
    render() {
        return (
            <div className='activities'>
                <div>
                    Comittees: {this.props.comittees}
                </div>
                <div>
                    Forums: {this.props.forums}
                </div>
            </div>
        );
    }
}

class Company extends React.Component {
    render() {
        return (
            <div className='company'>

                <div>Company: {this.props.companyName}</div>

                <Employee {...this.props} tenure="2 years" /> {/*so much easier.*/}

                <Activities {...this.props} />

            </div>
        )
    }
}

ReactDOM.render(
    <Company companyName='Skillsoft'
        employeeName='John'
        designation='Analyst'
        comittees='Performance review, Data insights'
        forums='StackOverflow, DataHelper' />,
    document.getElementById('react-props-transfer')
);