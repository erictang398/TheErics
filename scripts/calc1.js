function App () {
    return (
        <React.Fragment>
            <Calculator />
        </React.Fragment>
    )
}

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            m_entries: [0,0,0,0,0,0,0,0,0],
            v_entries: [0,0,0],
        };
    }
    updateMatrix(event, index, type) {
        const val  = event.target.value;
        this.state[type].splice(index, 1, val)
        this.setState({
            [type]: this.state[type],
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className = "matrix">
                    {this.state.m_entries.map((item, index) => (
                        <div className = "m_inputs" key = {index}>
                            <input key = {index} value = {item} onChange = {event => this.updateMatrix(event, index, "m_entries")}></input>
                        </div>
                    ))}
                </div>
                <div className = "vector">
                    {this.state.v_entries.map((item, index) => (
                        <div className = "v_inputs" key = {(index)}>
                            <input key = {index} value = {item} onChange = {event => this.updateMatrix(event, index, "v_entries")}></input>
                        </div>
                    ))}
                </div>
                <div className = "submit">
                        <button onClick = {() => {
                            for (let i = 0; i < 9; i++) {
                                this.state.m_entries[i];
                                console.log(this.state.m_entries[i]);
                            }
                            for (let j = 0; j < 3; j++) {
                                this.state.v_entries[j];
                                console.log(this.state.v_entries[j]);
                            }

                        }}>
                            Submit
                        </button>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)  