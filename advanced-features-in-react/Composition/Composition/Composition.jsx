class Message extends React.Component {
    render() {
        return (
            // arbitrary css class, means composition is simpler than inheritance.
            <div className={'border plain-message ' + this.props.cssClass}>

                {this.props.message}
            </div>
        );
    }
}

//best. simplest. Composition > Inheritance.
class SuccessMessage extends Message {
    render() {
        return (
            <Message {...this.props} cssClass='success-message' />
        );
    }
}

class FailureMessage extends Message {
    render() {
        return (
            <Message {...this.props} cssClass='error-message' />
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

ReactDOM.render(<Dialog />, document.getElementById('react-composition'));