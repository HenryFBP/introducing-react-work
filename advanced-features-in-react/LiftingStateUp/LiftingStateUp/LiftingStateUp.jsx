//enum
const currencyNames = {
    d: 'Dollars',
    r: 'Rupees'
};

function rupeesToDollars(r) { return r * 0.014 };
function dollarsToRupees(d) { return d * 70.95 };


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
    if (props.dollars >= 1000000) {
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
                    value={networth}
                    onChange={this.handleChange} />

            </fieldset>
        )
    }
}

class MillionaireCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            networth: '0',
            currency: 'd'
        };
    }

    handleDollarChange = (networth) => {
        this.setState({ currency: 'd', networth: networth });
    }

    handleRupeeChange = (networth) => {
        this.setState({ currency: 'r', networth: networth });
    }

    render() {

        const currency = this.state.currency;
        const networth = this.state.networth;

        //check if we use rupees or dollars
        const dollars = currency === 'r' ? tryConvert(networth, rupeesToDollars) : networth;
        const rupees = currency === 'd' ? tryConvert(networth, dollarsToRupees) : networth;

        return (
            <div className="contents">
                <NetWorthInput
                    currency='d'
                    networth={dollars}
                    onNetWorthChange={this.handleDollarChange} />

                <NetWorthInput
                    currency='r'
                    networth={rupees}
                    onNetWorthChange={this.handleRupeeChange} />

                <Millionaire
                    dollars={parseFloat(dollars)} />
            </div>
        );
    }
}

ReactDOM.render(<MillionaireCalculator />, document.getElementById('outer'));