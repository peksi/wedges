import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import { Button } from 'react-bootstrap'
import ppt1 from '../assets/ppt1.png'
// import ppt2 from '../assets/ppt2.png'
// import ppt3 from '../assets/ppt3.png'
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
        <h1 className='text-center'>Welcome to CarbCut</h1>
        <p className='text-center'>
          You are participating in our research in people’s decion making styles.
          In this task you will learn and make decision about carbon mitigation strategies.
          Your data will remain anonymous and will be used in our academic research only.
          Duration: about 20 minutes.
        </p>
        <img src={ppt1} style={{ 'margin': 'auto', 'display':'block', 'width':'50%' }} />
        <br />
        <p className='reference'>
          Background material used with the permission of
          the <a href='https://cmi.princeton.edu/'>Carbon Mitigation Initiative</a> Princeton University.
        </p>
        <p className='reference'>
          This is a research project in the Systems Analysis Laboratory,
          Aalto University. Principal Investigator
          <a href='http://sal.aalto.fi/en/personnel/raimo.hamalainen/'> Professor Raimo P. Hämäläinen</a>
        </p>
        <Button className='next-button btn-primary btn-lg' onClick={() => { this.props.goForward() }}>Next</Button>
      </div>
      : ''}
        {this.props.page > 0 && this.props.page < 9 // image slides
      ? <div className='diapage'>
        <Button className='prev-button' onClick={() => { this.props.goBack() }}>Previous</Button>
        <Button className='next-button' onClick={() => { this.props.goForward() }}>Next</Button>
        {this.props.page === 4
          ? <p> Please have a look at the descriptions.
              You do not need to remember the details.
              They will also be seen later when you will make your choices.
          </p> : ''}
        <img src={currentDia} />
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
