//most generic component, the most customizable...
class CustomDialog extends React.Component {
    render() {

        var color;

        switch (this.props.dialogtype) {
            case 'warning':
                color = 'orange';
                break;

            case 'error':
                color = 'red'
                break;

            default:
                color = 'green';
                break;
        }

        return (
            <div className={'bt bt-' + color + ' bg-' + color}>
                <h3 className="dialog-title">{this.props.title}</h3>
                <div className="dialog-message">{this.props.message}</div>
            </div>
        );
    }
}

class OKDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog dialogtype="ok" title="Success"
                    message="Operation successful">
                </CustomDialog>
            </div>
        )
    }
}

class WarningDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog dialogtype="warning" title="Warning!"
                    message="Operation completed with warning">
                </CustomDialog>
            </div>
        )
    }
}
class ErrorDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog dialogtype="error" title="Error!"
                    message="Error! Operation failed.">
                </CustomDialog>
            </div>
        )
    }
}

ReactDOM.render(<OKDialog />, document.getElementById('react-composition-specialization1'));
ReactDOM.render(<WarningDialog />, document.getElementById('react-composition-specialization2'));
ReactDOM.render(<ErrorDialog />, document.getElementById('react-composition-specialization3'))