//enum
const currencyNames = {
    d: 'Dollars',
    r: 'Rupees'
};

rupeesToDollars = (r) => { r * 0.014 };
dollarsToRupees = (d) => { d * 70.95 };


/**
 * @param {String} money Net worth in dollars
 * @param {Function} convertfn Conversion factor function
 * @returns Converted money as string
 * @example tryConvert('200', dollarsToRupees)
 */
function tryConvert(money, convertfn) {
    const input = parseFloat(money);

    if (Number.isNaN(input)) {
        return '';
    }

    const output = convertfn(input);
    const rounded = Math.round(output * 100) / 100;

    return rounded.toString();
}

function Millionaire(props) {
    if (props.networth >= 1000000) {
        return <p className="millionaire">A millionaire!</p>
    } else {
        return <p className="not-millionaire">Not yet a millionaire...</p>
    }
}

//this is now a stateless component
class NetWorthInput extends React.Component {

    handleChange = (e) => {
        this.props.onNetWorthChange(e.target.value);
    }

    render() {
        const networth = this.props.networth; //a number, but idk what currency
        const currency = this.props.currency; //specifies currency

        return (
            <fieldset className="networth">
                <legend>Enter net worth in {currencyNames[currency]}:</legend>

                <input className='input'
                    defaultValue={networth}
                    onChange={this.handleChange} />

            </fieldset>
        )
    }
}

class MillionaireCalculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contents">
                <NetWorthInput currency={'d'} />
                <NetWorthInput currency={'r'} />
            </div>
        )
    }
}

ReactDOM.render(<MillionaireCalculator />, document.getElementById('outer'));