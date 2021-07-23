class Message extends React.Component {
    constructor(props) {
        super(props);
        this.className = 'border plain-message';
    }

    render() {
        return (
            <div className={this.className}>
                {this.props.message}
            </div>
        );
    }
}

//slightly better... Less duplication.
class SuccessMessage extends Message {
    constructor(props) {
        super(props);
        this.className += ' ' + 'success-message';
    }

    render() {
        return (
            <div>
                {super.render()}
            </div>
        );
    }
}

class FailureMessage extends Message {
    constructor(props) {
        super(props);
        this.className += ' ' + 'error-message';
    }

    render() {
        return (
            <div>
                {super.render()}
            </div>
        );
    }
}

class Dialog extends React.Component {
    render() {
        return (
            <div>
                <Message message="Plain :/" />
                <SuccessMessage message="Success!" />
                <FailureMessage message="Failure :(" />
            </div>
        )
    }
}

ReactDOM.render(<Dialog />, document.getElementById('react-inheritance'));