/* eslint-disable max-len */

import React from 'react'
import { Button } from 'react-bootstrap'
import raimo from '../assets/raimo.png'
import tuomas from '../assets/tuomas.png'
import './Support.scss'

const Support = (props) => {
  return (
    <div className='supportview'>
      <h1>Carbcut Support Material</h1>
      <h2>Carbcut is a research project that studies portfolio decision making in climate policy in an interactive way</h2>
      <h3>We invite you to participate!</h3>
      <p>We look for participants from all areas and backgrounds. The Carbcut site is open to anyone interested, such as decision makers, researchers, teachers, and students.</p>
      <p>Use Carbcut, e.g. with students in your class or to engage your colleagues in a reflective discussion of portfolio thinking in climate policy decision making. <br /><a href="http://sal.aalto.fi/publications/pdf-files/clah18.pptx">(see slides)</a></p>
      <h3>Want to see your results?</h3>
      <p>If you want to see the results for your group we can setup a group code for you. Please contact us. It can be interesting for you to discuss the results, e.g. in your class.</p>
      <h3>Who are we?</h3>
      <p>Carbcut is a research project in the Systems Analysis Laboratory, Aalto University, Finland. We are most grateful if you participate in this study and help our research on behavioural issues in decision making in complex settings.</p>
      <div className='col-md-6 imgbox'>
        <img src={raimo} />
        <p>
          Principal Investigator<br />
          <a href='http://sal.aalto.fi/en/personnel/raimo.hamalainen/' target='_blank'>Professor Raimo P. Hämäläinen</a><br />
        </p>
      </div>
      <div className='col-md-6 imgbox'>
        <img src={tuomas} />
        <p>
          Researcher <br />
          <a href='http://sal.aalto.fi/en/personnel/tuomas.lahtinen/' target='_blank'>Tuomas Lahtinen</a><br />
        </p>
      </div>
      <p>We will post the results and publications from this study here once they are available. Feel free to contact us if you have any questions.</p>
      <h3>Why portfolio thinking is an important theme?</h3>
      <p>Environmental decisions are often portfolio problems where the decision makers need to create a basket, i.e. a portfolio, of strategies or measures to achieve the overall goal. The climate mitigation task in Carbcut is a typical example. A portfolio of strategies is needed to cut global carbon emissions to reach the target level.</p>
      <p>Solving portfolio decision problems is not straightforward. There are also challenges that need be taken into account particularly in environmental decision making.</p>
      <p style={{'clear': 'both'}}>There can be path dependence: In creating a policy consisting of a portfolio of strategies or actions, the outcome can depend on the order in which different actions are considered and added into the portfolio. One reason for this is behavioral issues such as cognitive biases that can easily arise when solving the portfolio problem (<a href='http://sal.aalto.fi/publications/pdf-files/cham17.pptx' target='_blank'>slides1</a>, <a href='http://sal.aalto.fi/publications/pdf-files/cham15c.pptx' taget='_blank'>slides2</a>).</p>
      <p>Portfolio problems are difficult for a number of reasons: Many strategies or actions need to be considered at the same time. There are non-commensurable objectives. There can be non-linearities and interactions across the set of actions and their consequences. Methods for addressing portfolio problems have been developed in the field of decision analysis. See <a href='http://sal.aalto.fi/publications/pdf-files/cham15b.pptx' target='_blank'>slides.</a></p>
      <h3>Related literature</h3>
      <p>Lahtinen, T.J., Hämäläinen, R.P., and Liesiö, J. (2017). Portfolio Decision Analysis Methods in Environmental Decision Making Environmental Modelling and Software, 94, 73-86 (<a href='http://www.sciencedirect.com/science/article/pii/S136481521730364X' target='_blank'>View at publisher</a>).</p>
      <p>Hämäläinen, R.P. (2015). Behavioural issues in environmental modelling - the missing perspective Environmental Modelling & Software, 73, 244-253 (<a href='http://www.sciencedirect.com/science/article/pii/S1364815215300451' target='_blank' >View at publisher</a>).</p>
      <p>Lahtinen, T.J., Guillaume, J.H.A., and Hämäläinen, R.P. (2017): Why pay attention to paths in the practice of environmental modelling? Environmental Modelling and Software, 92, 74-81. (<a href='http://www.sciencedirect.com/science/article/pii/S1364815216309835' target='_blank'>View at publisher</a>).</p>
      <p>Pacala, S., & Socolow, R. (2004). Stabilization wedges: solving the climate problem for the next 50 years with current technologies. Science, 305(5686), 968-972. (<a href='http://science.sciencemag.org/content/305/5686/968' target='_blank'>View at publisher</a>).</p>
      <p>Hotinski (2015). Stabilization Wedges: A Concept & Game. Carbon Mitigation Initiative, Princeton University. <a href='https://cmi.princeton.edu/wedges/pdfs/teachers_guide.pdf' target='_blank'>https://cmi.princeton.edu/wedges/pdfs/teachers_guide.pdf</a> (visited 13.9.2017)</p>
      <p>Gregory, R., Failing, L., Harstone, M., Long, G., McDaniels, T., & Ohlson, D. (2012). Structured decision making: a practical guide to environmental management choices. John Wiley & Sons (<a href='http://eu.wiley.com/WileyCDA/WileyTitle/productCd-1444333429.html' target='_blank'>View at publisher</a>).</p>

      <h2>The origins of the Carbcut problem</h2>
      <p>The task is based on the Stabilization Wedges Game of the <a href='http://cmi.princeton.edu/wedges/' target='_blank'>Carbon Mitigation Initative, Princeton University.</a> Some of the data is not quite up-to-date anymore but this is not essential for the purpose of the Carbcut task. The material is used with the permission of the Carbon Mitigation Initiative.</p>
    </div>
  )
}

Support.propTypes = {
}

export default Support
