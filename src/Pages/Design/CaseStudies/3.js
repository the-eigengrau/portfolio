import React, { Component } from 'react';
import '../SCSS/CaseStudy.scss'
import '../SCSS/DesktopCaseStudy.scss'
import '../SCSS/Design.scss'
import atomicdesign from './images/atomicdesign.png'
import doc1 from './images/doc1.png'
import doc2 from './images/doc2.png'
import ipo1 from './images/ipo1.png'
import persona1 from './images/persona1.png'
import persona4 from './images/persona4.png'
import ipo2 from './images/ipo2.png'
import ipo3 from './images/ipo3.png'
import ipo4 from './images/ipo4.png'
import onboardingframe from './images/onboardingframe.png'
import userjourney from './images/UserJourney.png'
import fw2 from './images/fw2.png'
import fwblog from './images/fwblog.png'
import trhome from './images/trhome.png'
import brand from './images/brand.png'
import brand1 from './images/brand2.png'
import coreproduct from './images/coreproduct.png'
import coreproduct2 from './images/coreproduct2.png'
import wire1 from './images/Wire1.png'
import wire2 from './images/wire2.png'
import wire3 from './images/Wire3.png'
import wire4 from './images/wire4.png'
import UI2 from './images/dashconcept.svg'
import UI1 from './images/sweeps.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


class Three extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {auth: false, password: 'LaCroix'};
  }

  render() {
    return (
        <React.Fragment>
        {!this.state.auth &&
          <div className="caseStudy-container1">
          <p className="Backp"><Link className="Back" to="/design/casestudies"><ArrowBackIos className="Back"/></Link></p>
            <div className="passwordBlock">
              <p className="passwordLabel">ENTER PASSWORD</p>
              <input id='passwordInput' className="passwordInput" type="password"></input>
              <button className="CTA" onClick={()=> {
                const password = document.getElementById('passwordInput').value
                if (password===this.state.password) {
                  this.setState({auth:!this.state.auth})
                }
              }
            }>Continue</button>
            </div>
          </div>
        }
        {this.state.auth &&
          <div className="caseStudy-container1">
            <p className="Backp"><Link className="Back" to="/design/casestudies"><ArrowBackIos className="Back"/></Link></p>
            <p className="caseTitle">Founding design at a venture backed startup</p>
            <img src={trhome} className="trhome"/>
            <div className="content2">
            <p>After months of effortful creation we launched our MVP. We expected customers to mob us. We believed we had a pipeline of $100M ready to go. Our customers never materialized. The pipeline was a pipe dream.</p>

        <p>But we grabbed a hold of that slippery entrepreneurial ladder and climbed. We slogged, tested, listened to users, repositioned, and eventually we turned a spark into a flame. But would it grow into a roaring flame or would it burn bright and ephemeral? Time would tell. Successes and failures are short lived at a startup.</p>

        <p>As an aspiring founder I had an idealized and heroic vision of what entrepreneurship was. The entrepreneur would pry open widely held falsehoods and hike into pristine wilderness with discipline and creative vision. The glinting gems he unearthed would captivate customers, change their lives, and bring untold success.</p>

        <p>As the first designer at a venture-backed startup, my romanticism was transformed into optimistic realism through disorganized fumblings, arbitrary firings, and flights of fancy. I learned that the CEO is the least important person at a startup, not the most important. Omnipotent founders are an impossibility, but pluripotent, patient leaders are a necessity. </p>

        <p>I also learned that my own self-image as a design expert who has the right answer was deeply flawed. As a design leader, I learned to listen more, use research to open conversations and not close them, underscore crucial alternatives, and carefully articulate my design rationale in the light of business, user, and engineering concerns.</p>

        <p>The skills and experience I gained at Treasure are some of the most important of my career. As the 6th employee at a high-growth company serving a crucial, definitional role, I gained messy insight into how ideas become reality, how to lead under uncertainty, and how to build relationships and communicate effectively under massive pressure. In some cases, I learned from success. In other cases, I learned these lessons through failure. Experience is what you get right after you need it.</p>

                <p className="subtitle">PROCESS &  RESPONSIBILITIES</p>
                <p>As the first designer at Treasure I was responsible for getting us to MVP launch optimizing speed, product desirability, and ease of customer acquisition. What this amounted to was designing our core product’s interface and experience, conducting user research, designing our landing page and sales material, and standing up the design team’s processes and rituals. My range of work was very broad, however, I’ll share some key examples.</p>
                <img src={atomicdesign} className="fwblog"/>
                <p className="subtitle">CORE PRODUCT</p>
                <p>Our core offering was a cash flow analytics dashboard offering AI-powered recommendations, an idle cash identification algorithm, and an attractive, low-risk investment vehicle where you could invest your idle cash. We also provided the ability to aggregate information across bank accounts and provide real-time insights based on transaction data.</p>
                <img src={coreproduct} className="fwblog"/>
                <img src={coreproduct2} className="fwblog"/>
                <p>There are several aspects of these designs that could be improved. Some points that come to mind: On the banking screen the allocated cash bar is confusing and calculated in a counter-intuitive way. Having withdrawal as a quick action but not deposits biases the user towards behavior that is neither in their best interest nor in ours. The idle cash indicator on the main dashboard could be behaviorally designed more effectively to prompt deposits. For example, we could have a  progress bar or "financial score" that the user strives to optimize, or an indicator of the loss to inflation that our user is suffering on an ongoing basis. Another ongoing research topic for us was which financial metrics are used at various intervals by CFOs to gauge the performance of their businesses. The textbook answer I learned in my Northwestern courses diverged from reality in some important ways.</p>
                <p className="subtitle">USER RESEARCH</p>
                <p>After months of pushing I was able to gain traction on having one of our designers or a member of the product team shadowing our salespeople and customer success representatives on calls. On top of that, I used outbound prospecting techniques, remote user testing, subject matter experts in our network, and domain research to inform our designs. </p>

                <p>The research deliverables I used varied depending on the need. I'll share some examples. I created a set of personas to help us be more concrete about who we are serving. </p>
                <img src={persona1} className="ipo"/>
                <img src={persona4} className="ipo"/>

                <p> Depending on the complexity of the feature we were developing I would frequently start with user flows or user journeys before progressing to wireframes, and increasing fidelity thereafter. Here’s an example of a user journey I created for our onboarding flow. I would also try to summarize the goals of a design to frame our efforts. </p>
                <img src={onboardingframe} className="fwblog"/>
                <img src={userjourney} className="fwblog"/>

                <p className="subtitle">IDEATION</p>
                <p>At Treasure and in side projects around this time I began using ideation techniques based on Hasso Platner's Stanford D-School Bootleg and my background in psychology. Hunter, our head of product, was enmeshed in the d-school during his time at Stanford and I benefitted from the exposure and reading material he shared with me. The way I run ideation sessions is to warm up by a using paradoxical intent and/or functional fixedness exercise (from my psych background), and then have everyone generate as many ideas as possible answering a "How Might We" statement (from the d-school). After a certain amount of time, I layer in a well-chosen constraint, and then another. And finally, we vote across four categories to surface the most promising opportunities we've generated.</p>

                <p className="subtitle">WIREFRAMING</p>
                <p>After we narrow down  the best ideas, my process entails rapidly instantiating and testing them. Typically this means low to medium fidelity wireframes and prototypes. The first three wireframes are variations on a future investment dashboard and the fourth wireframe is a variation on a new sweep interface:</p>
                <img src={wire1} className="fwblog"/>
                <img src={wire2} className="fwblog"/>
                <img src={wire3} className="fwblog"/>
                <img src={wire4} className="fwblog"/>

                <p className="subtitle">USER INTERFACE AND HAND-OFFS</p>
                <p>My user interface design approach involves ideating broadly against our product goals, trying lots of variations, testing them, and then narrowing back down. At Treasure, my design hand-offs improved considerably. I started handing off happy and unhappy path prototypes, a layout guidance doc based on my knowledge of HTML/CSS, a set of component states for major new components, a transition prototype, and guidance for responsiveness. You've already seen several UI design examples, from our landing page, to our core product, but here are a few more:</p>
                <img src={UI1} className="fwblog"/>
                <img src={UI2} className="fwblog"/>
                </div>
                </div>
              }
              </React.Fragment>
            )
          }
  }

export default Three
