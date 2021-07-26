//allows for custom light/dark border
class ThemedBorderBackground extends React.Component {
    render() {
        return (
            <div className={'bt bt-' + this.props.theme + ' bg-' + this.props.theme}>
                {this.props.children}
            </div>
        )
    }
}

//light/dark button
class ThemedButton extends React.Component {
    render() {
        return (
            <div>
                <button className={'button button-' + this.props.theme}>
                    {this.props.label}
                </button>
            </div>
        )
    }
}

class ThemedDialog extends React.Component {
    render() {
        return (
            <div className={'dialog dialog-' + this.props.theme}>
                <h3 className="dialog-title">{this.props.title}</h3>
                <div className="dialog-message">{this.props.message}</div>
                <br />
                <ThemedButton theme={this.props.theme} label='OK'>
                    {/*pass the theme here again... Can this be global? What if we have to do this like 6 times?! What if we rename it?*/}
                </ThemedButton>
            </div>
        )
    }
}

// var selectedTheme = 'light';
var selectedTheme = 'dark';

//light
ReactDOM.render(
    <div>
        <ThemedBorderBackground theme={selectedTheme}>
            {/* How many times do we need to pass the "theme" prop?! jeez...*/}
            Hello!
        </ThemedBorderBackground>

        <ThemedButton theme={selectedTheme} label="click me!">
        </ThemedButton>

        <ThemedDialog theme={selectedTheme} title="Dialog title here" message="Dialog message here">
        </ThemedDialog>
    </div>,
    document.getElementById('react-no-context'));

