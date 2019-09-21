import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';

let message = 'Hello'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false,
    count_reset: 0
  }
}


class App extends React.Component {

  state = prepareStateFromWord(message);

  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }
  reset = () => {
    this.setState({
      count_reset: this.state.count_reset + 1,
      completed: !this.state.completed
    })
  }
  render() {
    return (
      <div className="center">
        <div>
          <h1 className="text">6035512024</h1>
          {
            Array.from(this.state.chars).map((item, index) => (
              <CharacterCard
                value={item} //test
                key={index}
                activationHandler={this.activationHandler}
                attempt={this.state.attempt}
                count_reset={this.state.count_reset}
              />
            ))
          }
          <div className="text">
            <h2>Selected</h2>
            {
              Array.from(this.state.guess).map((item, index) => (
                <CharacterCard
                  value={item}
                  key={index}
                  activationHandler={this.activationHandler}
                />
              ))
            }
            <div><h1 className="text">Attemp {this.state.attempt}</h1></div>
            {
              this.state.completed && <h4>Complete</h4>
            }
            {
              this.state.completed && <button onClick={this.reset}>Reset</button>
            }
          </div>
        </div>
      </div>
    )
  }
}


export default App;