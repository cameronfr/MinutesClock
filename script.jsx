class App extends React.Component {
  squareStyle = {
    minHeight: "10px",
    height: "10px",
    width: "10px",
    minWidth: "10px",
    margin: "5px",
    boxShadow: "0px 0px 3px #ccc",
  }

  constructor(props) {
    super(props)
     setInterval(() => {
       this.forceUpdate()
     }, 1000)
  }

  render() {
    var date = new Date();
    var seconds = date.getMinutes() + date.getHours()*60
    var square = (black, idx) => <div id={idx} style={{...this.squareStyle, backgroundColor: (black ? "black" : "white")}}></div>
    var colorKey = Array(seconds).fill(true).concat(Array(60*24 - seconds).fill(false))
    return (
      <div style={{display: "flex", flexWrap: "wrap", marginBottom: "10px"}}>
        {colorKey.map((color, idx) => square(color, idx))}
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
