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
import dia10 from '../assets/carbcut/Dia10.jpg'
import dia11 from '../assets/carbcut/Dia11.jpg'

export class HomeView extends React.Component {
  render () {
    const dia = [dia1, dia2, dia3, dia4, dia5, dia6, dia7, dia8, dia9, dia10, dia11]
    const currentDia = dia[this.props.page - 1]
    const linkTo = '/'

    return (
      <div className='homeview'>
        {this.props.page === 0
      ? <div className='page1' style={{ 'display': (this.props.page === 0) ? 'hidden' : 'visible' }}>
        <h1 className='text-center'>Welcome to CarbCut</h1>
        <p className='text-center'>
          You are participating in our research in people’s decision making styles.
          In this task you will learn and make decisions about carbon mitigation strategies.
          Your data will remain anonymous and will be used in our academic research only.
          Duration: about 20 minutes.
        </p>
        <Button
          className='btn-primary btn-lg'
          style={{ display: 'block', 'margin':'3em auto' }}
          onClick={() => { this.props.goForward() }}
        >
            Continue
        </Button>
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
      </div>
      : ''}
        {this.props.page > 0 && this.props.page < 12 // image slides
      ? <div className='diapage'>
        <div className='row'>
          <Button className='prev-button btn-primary btn-lg' onClick={() => { this.props.goBack() }}>Previous</Button>
          <Button className='next-button btn-primary btn-lg' onClick={() => { this.props.goForward() }}>Continue</Button>
        </div>
        {this.props.page === 4
          ? <p className='helpbox'> Please have a look at the descriptions.
              You do not need to remember the details.
              They will also be seen later when you will make your choices.
          </p> : ''}
        <img src={currentDia} />
      </div>
      : ''
    }
        {this.props.page === 12 // lastpage
      ? <div className='page4'>
        <Button className='prev-button btn-primary btn-lg' onClick={() => { this.props.goBack() }}>Previous</Button>
        <Link to={'/' + this.props.first} className='next-button'>
          <Button className='btn-primary btn-lg'>Continue</Button>
        </Link>
        <div className='decisionTaskStartsNext'>
          <h1 className='text-center'>Now you will start making your decisions:</h1>
          <h1 className='text-center'>Create a basket of 8 mitigation strategies</h1>
          <span className='large-description-text'>
            <p>
              How to make your decisions: Follow your preferences and take into account the perspectives you find relevant, e.g. environmental, economic, social, political
            </p>
          </span>
        </div>
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
  first: state.home.first,
  page: state.home.page
})

HomeView.propTypes = {
  first: React.PropTypes.string,
  goForward: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired,
  page: React.PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
