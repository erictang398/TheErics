function App () {
    return (
        <React.Fragment>
            <NavBar />
            <Background />
            <DownArrow />
            <Features />
        </React.Fragment>
    )
}

function Background () {
    return (
        <div id = "background">
            <div id = "title-box">
                 <h1 id="title">
                     The Erics
                 </h1>
            </div>
        </div>
    )
}

class DownArrow extends React.Component {
    render () {
        return (
            <a id = "downarrow" href = "#features">
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
             </a>
        )
    }
}

function Features () {
    return (
        <div id = "features">
            <div id="f-title-box">
                <h1 id = "feature-title">
                  FEATURES
                </h1>
            </div>
            <div id = "f-box-collector">
                <div className = "feature-boxes" id = "f-box1"></div>
                <div className = "feature-boxes" id = "f-box2"></div>
                <div className = "feature-boxes" id = "f-box3"></div>
            </div>
        </div>
    )
}

class NavBar extends React.Component {
    render () {
        const NAVBAR_ITEMS = ["Home", "Eric Tang", "Eric Lin", "Calculators", "11111"]
        return (
            <div className="topnav" id="myTopnav">
                {NAVBAR_ITEMS.map(item => (
                    <a href = "#" key = {NAVBAR_ITEMS.indexOf(item)} 
                    className = {NAVBAR_ITEMS.indexOf(item) === 0 && "active" || ""}>
                    {item}
                    </a>
        ))}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)  

/* let ScrollHeight = window.pageYOffset;
let scrolling = false;

window.onscroll = () => {

    if (scrolling || window.pageYOffset > 800 || window.pageYOffset < ScrollHeight) {
        ScrollHeight = window.pageYOffset;
        return ;
    }

    window.scrollTo({top: 800, behavior: "smooth"});
    scrolling = true;
    ScrollHeight = window.pageYOffset;
    setTimeout(() => {
        scrolling = false;
    }, 1000);
} */