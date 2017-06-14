import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import { Button } from 'react-bootstrap'
import ppt1 from '../assets/ppt1.png'
import ppt2 from '../assets/ppt2.png'
import ppt3 from '../assets/ppt3.png'
import dia1 from '../assets/carbcut/Dia01.jpg'
import dia2 from '../assets/carbcut/Dia02.jpg'
import dia3 from '../assets/carbcut/Dia03.jpg'
import dia4 from '../assets/carbcut/Dia04.jpg'
import dia5 from '../assets/carbcut/Dia05.jpg'
import dia6 from '../assets/carbcut/Dia06.jpg'
import dia7 from '../assets/carbcut/Dia07.jpg'
import dia8 from '../assets/carbcut/Dia08.jpg'
import dia9 from '../assets/carbcut/Dia09.jpg'

export class HomeView extends React.Component {
  render () {
    const dia = [dia1, dia2, dia3, dia4, dia5, dia6, dia7, dia8, dia9]
    const currentDia = dia[this.props.page - 1]

    return (
  <div className='homeview'>
    {this.props.page === 0
      ? <div className='page1' style={{ 'display': (this.props.page === 0) ? 'hidden' : 'visible' }}>
        <h1>CarbCut</h1>
        <p>
          Welkome to make decisions on carbon mitigation strategies.
        </p>
        <p>
          This decision process will take about 20 minutes
        </p>
        <img src={ppt1} style={{ 'margin': 'auto', 'display':'block' }} />
        <p className='reference'>
          Background material used with the permission of the
          <a href='https://cmi.princeton.edu/'>Carbon Mitigation Initiative</a> Princeton University
        </p>
        <p className='reference'>
          This is a research project in the Systems Analysis Laboratory,
          Aalto University. Principal Investigator Raimo P. Hämäläinen
        </p>
        <Button className='next-button' onClick={() => { this.props.goForward() }}>Next</Button>
      </div>
      : ''}
    {this.props.page > 0 && this.props.page < 9 // image slides
      ? <div className='diapage'>
        <img src={currentDia} />
        <Button className='prev-button' onClick={() => { this.props.goBack() }}>Previous</Button>
        <Button className='next-button' onClick={() => { this.props.goForward() }}>Next</Button>
      </div>
      : ''
    }
    {this.props.page === 9 // lastpage
      ? <div className='page4'>
        <img src={currentDia} />
        <Button className='prev-button' onClick={() => { this.props.goBack() }}>Previous</Button>
        <Link to='/reduce' className='next-button'>
          <Button>Next</Button>
        </Link>
      </div>
      : ''
    }
  </div>

    )
  }
}

import { connect } from 'react-redux'
import { goForward, goBack } from '../modules/home'

const mapDispatchToProps = {
  goForward,
  goBack
}

const mapStateToProps = (state) => ({
  page: state.home.page
})

HomeView.propTypes = {
  goForward: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired,
  page: React.PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
