import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    inputText: '',
  }

  onchangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {inputText} = this.state

    const filteredList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(inputText.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            placeholder="Search"
            className="input"
            onChange={this.onchangeInputText}
          />
          <div className="icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="items-container">
          {filteredList.map(eachItem => (
            <DestinationItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
