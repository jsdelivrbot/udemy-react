import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_maps'

class WeatherList extends Component {
  constructor(props) {
    super(props)
  }

  renderCities(data) {
    const name = data.city.name
    const temps = data.list.map(weather => weather.main.temp)
    const pressures = data.list.map(weather => weather.main.pressure)
    const humidities = data.list.map(weather => weather.main.humidity)
    const { lon: lng, lat } = data.city.coord
    return (
      <tr key={name}>
        <td><GoogleMap lng={lng} lat={lat}/></td>
        <td><Chart data={temps} color='orange' units="(K)" /></td>
        <td><Chart data={pressures} color='green' units="(hPa)" /></td>
        <td><Chart data={humidities} color='black' units="(%)" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Humidity (hPa)</th>
            <th>Pressure (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderCities) }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => ({ weather })


export default connect(mapStateToProps)(WeatherList)
