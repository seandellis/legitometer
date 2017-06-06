import React from 'react';
import axios from 'axios';
import { Header, Icon } from 'semantic-ui-react';

import ArticleInput from './ArticleInput';

class CreateCollection extends React.Component {
  constructor(props) {
    super(props);
    this.handleArticleInputChange = this.handleArticleInputChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitNewCollection = this.submitNewCollection.bind(this);
    this.state = {
      caseFileName: '',
      articles: [{headline: '', url: '', type: ''}],
      inputList: [],
      inputs: [],
    }
  }

  // adds an input field to the page
  addInput(event) {
    event.preventDefault();
    this.setState({
      inputList: this.state.inputs.push(
        <ArticleInput
          key={this.state.inputs.length}
          index={this.state.inputs.length + 1}
          handleArticleInputChange={this.handleArticleInputChange}
        />
      )
    });
  }

  // save article info
  handleArticleInputChange(index,  fieldName, value) {
    const articleState = this.state.articles
    articleState[Number(index)][fieldName] = value

    console.log("will update articleState to", articleState)
    this.setState({
      articles: articleState
    })
    console.log("handling input", this.state.inputs);
    // TODO handle input - add article info to this.articles[]

  }

  // save casefile name
  handleChange(e) {
    this.setState({caseFileName: e.target.value})
  }

  submitNewCollection(e) {
    e.preventDefault();
    console.log("new casefile submitted!", this.state);
    // post new casefile
    axios.post('http://localhost:8888/api/add-casefile', {
      name: this.state.caseFileName,
      // TODO get the data from the state
      articles: this.state.articles,
      // articles: [{headline: "news happened", url: "https://stackoverflow.com", type: "analysis"},
			// {headline: "ducks!", url: "ducks.com", type: "satire"},
			// {headline: "bunch of flowers", url: "bees.com", type: "analysis"}]
    })
    .then((res) => {
      console.log("success?");
    })
    .catch((err) => {
      console.log("ERROR!!! :p !!!", err);
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.submitNewCollection(e)} className="ui form section">

          <div className="section">
            <Header as="h1">New Case File</Header>
            <label htmlFor="caseFileName">Case File Title</label>
            <input type="text" name="caseFileName" placeholder="Case File Title" value={this.caseFileName} onChange={this.handleChange}/>
          </div>

          <div className="section">
            <Header as="h2">Add Articles</Header>
            <ArticleInput index={0} handleArticleInputChange={this.handleArticleInputChange} />
            {this.state.inputs}
            <button onClick={this.addInput} className="ui button primary tiny">
              <Icon name="plus"/> Add Another Article
            </button>
          </div>

          <button className="ui button positive huge" type="submit">
            Save Case File
          </button>
        </form>
      </div>
    )
  }
}

export default CreateCollection;
