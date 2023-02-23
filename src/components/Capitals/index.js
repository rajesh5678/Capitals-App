import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onClickChange = event => {
    this.setState({countryId: event.target.value})
  }

  getCountry = countryId => {
    const country = countryAndCapitalsList.find(
      eachItem => eachItem.id === countryId,
    )
    return country.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCountry(countryId)
    return (
      <div className="bgContainer">
        <div className="contentContainer">
          <h1>Countries And Capitals</h1>
          <div className="Container">
            <select
              className="select"
              name="Countries"
              onChange={this.onClickChange}
              value={countryId}
            >
              {countryAndCapitalsList.map(eachOption => (
                <option key={eachOption.id} value={eachOption.id}>
                  {eachOption.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="Text">is Capital of which country</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
