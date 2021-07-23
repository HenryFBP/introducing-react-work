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

//lots of duplication, huh?
class SuccessMessage extends React.Component {
    constructor(props) {
        super(props);
        this.className = 'border success-message';
    }

    render() {
        return (
            <div className={this.className}>
                {this.props.message}
            </div>
        )
    }
}

class Dialog extends React.Component {
    render() {
        return (
            <div>
                <Message message="Plain :/" />
                <SuccessMessage message="Success!" />
            </div>
        )
    }
}

ReactDOM.render(<Dialog />, document.getElementById('react-inheritance'));