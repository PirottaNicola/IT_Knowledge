class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() { //quando monto l'orologio, chiamo tick() ogni secondo
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ //cambio lo stato di Clock, modificando la data
      date: new Date()
    });
  }

  render() { //metodo render di Clock
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2> //CLock.ilSuoStatoAttuale.data
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('orologio')
);