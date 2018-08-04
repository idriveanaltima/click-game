import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import items from "./data.json";

class App extends React.Component {
  // Set this.state
  state = {
    currentScore: 0,
    topScore: 0,
    clicked: false,
    items
  };

  handleClick = id => {
    if (this.state.clicked === false) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked === true });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
    });
    if (newScore === 12 || newScore > this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: [],
      });
    this.handleShuffle();
  };

  handleShuffle = () => {
    for (let i = items.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  render() {
    
    return (
      <div>
        <Nav
          title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

          Click on each item, but don't pick the same card twice, or you'll lose
     
            {this.state.items.map(item => (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}        
                />
            ))}
        </div>
    )
  }
}
export default App;
