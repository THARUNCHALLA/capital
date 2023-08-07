import {Component} from 'react'
import './index.css'
import Tharun from '../Tharun'

const countryAndCapitalsList = [
  {id: 'NEW_DELHI', capitalDisplayText: 'New Delhi', country: 'India'},
  {id: 'LONDON', capitalDisplayText: 'London', country: 'United Kingdom'},
  {id: 'PARIS', capitalDisplayText: 'Paris', country: 'France'},
  {id: 'KATHMANDU', capitalDisplayText: 'Kathmandu', country: 'Nepal'},
  {id: 'HELSINKI', capitalDisplayText: 'Helsinki', country: 'Finland'},
]
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.filter(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return activeCountryAndCapital
  }

  render() {
    const {activeCapitalId} = this.state
    const tharun = this.getCountry()
    const amma = tharun[0].country
    return (
      <div className="container">
        <div className="container2">
          <h1>Countries and Capitals</h1>
          <div>
            <select onChange={this.onChangeCapital} value={activeCapitalId}>
              {countryAndCapitalsList.map(each => (
                <Tharun user={each} key={each.id} />
              ))}
            </select>
            <span className="head"> is capital of which country</span>
          </div>
          <h1>{amma}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
