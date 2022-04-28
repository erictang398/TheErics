function App () {
    return (
        <React.Fragment>
            <div className="topnav" id="myTopnav">
                <a href="#" className="active">Home</a>
                <a href="#">Eric Tang</a>
                <a href="#">Eric Lin</a>
                <a href="#">Calculators</a>
                <a href="#">11111</a>
                <a href="#">22222</a>
                <a href="#">33333</a>
                <a href="#">44444</a>
            </div>
            <div id = "background">
                <div id = "title-box">
                    <h1 id="title">
                        The Erics
                    </h1>
                </div>
            </div>
            <div id = "downarrow">
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
            <div id="f-title-box">
                <h1 id = "feature-title">
                    FEATURES
                </h1>
            </div>
            <div id = "features">
                <div className = "feature-boxes" id = "f-box1"></div>
                <div className = "feature-boxes" id = "f-box2"></div>
                <div className = "feature-boxes" id = "f-box3"></div>
            </div>
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)  