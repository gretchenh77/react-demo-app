import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      submitted: false,
      formData: {
        answer: "",
      },
      data: [],
      score: 0,
    };
  }

  handleChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ formData: { answer: event.target.value } });
  };

  handleSubmit = (event) => {
    let score = this.state.score;
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    if (this.state.formData.answer === this.state.data.answer) {
      this.setState({ score: (score += this.state.data.value) });
    } else {
      this.setState({ score: (score -= this.state.data.value) });
    }
    this.getNewQuestion();
  };
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
      console.log(this.state.data.answer);
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    return (
      <div>
        <Display
          question={this.state.data.question}
          category={this.state.data.category}
          points={this.state.score}
          value={this.state.data.value}
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Answer:</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="answer"
              value={this.state.formData.answer}
            />
          </div>
          <button>Submit Form</button> <br />
        </form>
      </div>
    );
  }
}
export default Jeopardy;
