const ThemeContext = React.createContext('light'); //light is default theme

//allows for custom light/dark border
class ThemedBorderBackground extends React.Component {
    render() {
        return (
            <div className={'bt bt-' + this.context + ' bg-' + this.context}>
                {this.props.children}
            </div>
        )
    }
}

//This is why `this.context` above will evaluate to `'light'`...
ThemedBorderBackground.contextType = ThemeContext;

//light/dark button
class ThemedButton extends React.Component {
    render() {
        return (
            <div>
                <button className={'button button-' + this.context}>
                    {this.props.label}
                </button>
            </div>
        )
    }
}

ThemedButton.contextType = ThemeContext;

class ThemedDialog extends React.Component {
    render() {
        return (
            <div className={'dialog dialog-' + this.context}>
                <h3 className="dialog-title">{this.props.title}</h3>
                <div className="dialog-message">{this.props.message}</div>
                <br />
                <ThemedButton label='OK'>
                    {/*now we don't need to pass a theme via props :) */}
                </ThemedButton>
            </div>
        )
    }
}

ThemedDialog.contextType = ThemeContext;

//what's the theme? Go to the top!
ReactDOM.render(
    <div>
        <ThemedBorderBackground>
            {/* no theme prop! woo!*/}
            Hello!
        </ThemedBorderBackground>

        <ThemedButton label="click me!">
        </ThemedButton>

        <ThemedDialog title="Dialog title here" message="Dialog message here">
        </ThemedDialog>
    </div>,
    document.getElementById('react-context'));

