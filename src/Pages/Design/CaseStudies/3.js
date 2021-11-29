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
import onboardingpre from './images/onboardingpre.png'
import userjourney from './images/UserJourney.png'
import fw2 from './images/fw2.png'
import fwblog from './images/fwblog.png'
import trhome from './images/trhome.png'
import brand from './images/brand.png'
import brand1 from './images/brand2.png'
import coreproduct from './images/coreproduct.png'
import coreproduct2 from './images/coreproduct2.png'
import overallprocess from './images/overallprocess.png'
import wire1 from './images/Wire1.png'
import wire2 from './images/wire2.png'
import wire3 from './images/Wire3.png'
import wire4 from './images/wire4.png'
import UI2 from './images/dashconcept.svg'
import UI1 from './images/sweeps.png'
import mentalmodel from './images/MentalModel.png'
import usermatrix from './images/usermatrix.png'
import ideate from './images/ideate.png'
import org1 from './images/org1.png'
import org2 from './images/org2.png'
import org3 from './images/org3.png'
import org4 from './images/org4.png'
import newdesigners from './images/newdesigners.png'
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

                <p>The skills and experience I gained at Treasure are some of the most important of my career so far. As the first designer at Treasure I was responsible for getting us to MVP launch optimizing speed, product desirability, and ease of customer acquisition. What this amounted to was designing our core product’s interface and experience, conducting user research, designing our landing page and sales material, and standing up the design team’s processes and rituals. My range of work was very broad and diverse, but all focused towards creating a desirable, compelling product for our users.</p>

                <p className="subtitle">DESIGN PROCESS</p>

                <p>My design process starts with building user empathy through activities such as user interviews, domain research, talking to experts, contextual inquiry, and social listening. After that, I synthesize my research insights with the product team to produce a clear account of what problems we're trying to solve and where our solution fits into our user's life. Once I have this research-grounded problem definition in hand, I begin to ideate widely and quickly, coming up with many possible solutions. We pick the most promising ones, usually in a workshop setting and prototype them more fully in order to test them with users. We then take our test results and iterate.</p>

                <img src={overallprocess} className="processgraphic"/>

                <p>Each part of this broader process consists of various activities that have their own steps, variations, technical aspects, and so on.</p>
                <p className="subtitle">EMPATHIZE: USER AND DOMAIN RESEARCH</p>

                <p>After months of advocacy I was able to gain traction on having one of our designers or a member of the product team shadowing our salespeople and customer success representatives on calls. On top of that, I used outbound prospecting techniques, remote user testing, subject matter experts in our network, and domain research to build empathy and inform our designs. </p>

                <p>The research deliverables I used varied depending on the need. I'll share some examples. I created a set of personas to help us be more concrete about who we are serving. </p>
                <img src={persona1} className="ipo"/>
                <img src={persona4} className="ipo"/>


                <p>I also created a mental model diagram to help us understand the intetrnal categorization of concerns and activities among our users. This type of diagram is helpful when you're thinking about coverage of a range of needs and concerns by your product/ecosystem. This is a large diagram that is intended to be printed and put up or examined panel by panel remotely in a workshop. These segments are adjacent in a row because then you can add a "line of interaction" underneath them and match user needs and concerns directly to product/partner features section by section.</p>

                <img src={mentalmodel} className="processgraphic"/>

                <p className="subtitle">DEFINE: ARTICULATING THE PROBLEM</p>
                <p>After performing extensive user research, I sought to articulate and share the key problems we're trying to solve for. This is something I would do on a large and small scale. Some examples of how I would do this would be laying out core project goals or user needs on a canvas, creating a current state user journey that displays points of opportunity, or working with product to discuss and inform requirements. I used all three of these approaches in redesigning our onboarding flow:</p>
                <img src={onboardingframe} className="ipo"/>
                <img src={onboardingpre} className="ipo"/>

                <p className="subtitle">IDEATE: DEVELOPING A BROAD SOLUTION SET </p>
                <p>At Treasure and in side projects around this time I began using ideation techniques based on Hasso Platner's Stanford D-School Bootleg and my background in psychology. Hunter, our head of product, was enmeshed in the d-school during his time at Stanford and I benefitted from the exposure and reading material he shared with me. The way I run ideation sessions is to warm up by a using paradoxical intent and/or functional fixedness exercise (from my psych background), and then have everyone generate as many ideas as possible answering a "How Might We" statement (from the d-school). After a certain amount of time, I layer in a well-chosen constraint, and then another. And finally, we vote across four categories to surface the most promising opportunities we've generated.</p>

                <img src={ideate} className="processgraphic"/>

                <p className="subtitle">PROTOTYPE: INSTANTIATING IDEAS </p>

                <p>In my process after I generate many ideas covering the solution space, I generate prototypes instantiating my most promising ideas. Typically this means user flows, low/medium fidelity wireframes, and interactive prototypes. Among the following examples, The first three wireframes are variations on a future investment dashboard and the fourth wireframe is a variation on a new sweep interface. The user flow is one of many variations I came up with for our onboarding experience.</p>
                <img src={userjourney} className="fwblog"/>
                <img src={wire1} className="fwblog"/>
                <img src={wire2} className="fwblog"/>
                <img src={wire3} className="fwblog"/>
                <img src={wire4} className="fwblog"/>

                <p className="subtitle">TEST: VALIDATING OUR ASSUMPTIONS</p>
                <p>After I prototype out the most promising concepts, I test them out with intelligently created scenarios presented to users. Who I present them to depends on how much time and money I have, but I use the following matrix to classify potential user conversations:</p>
                <img src={usermatrix} className="processgraphic"/>

                <p>At Treasure we did not have access to a usability testing lab, so we used remote user testing with various screener questions to select for our target users. We also preferentially tried to leverage SMEs that matched our personas as well as users that are currently on the platform. Barring that, we would prospect for potential users that match our personas and talk to them, and also leverage feedback from the sales and customer success teams, as well as other informed stakeholders. </p>

                <p className="subtitle">REFINE: LEVELLING UP THE INTERFACE</p>

                <p>My user interface design approach involves ideating broadly against our product goals, trying lots of variations, testing them, and then narrowing back down. At Treasure, my design hand-offs improved considerably. I started handing off happy and unhappy path prototypes, a layout guidance doc based on my knowledge of HTML/CSS, a set of component states for major new components, a transition prototype, and guidance for responsiveness. You've already seen several UI design examples, from our landing page, to our core product, but here are a few more:</p>

                <img src={coreproduct} className="fwblog"/>
                <img src={coreproduct2} className="fwblog"/>

                <p>There are several aspects of these designs that could be improved. Some points that come to mind: On the banking screen the allocated cash bar is confusing and calculated in a counter-intuitive way. Having withdrawal as a quick action but not deposits biases the user towards behavior that is neither in their best interest nor in ours. The idle cash indicator on the main dashboard could be behaviorally designed more effectively to prompt deposits. For example, we could have a  progress bar or "financial score" that the user strives to optimize, or an indicator of the loss to inflation that our user is suffering on an ongoing basis. Another ongoing research topic for us was which financial metrics are used at various intervals by CFOs to gauge the performance of their businesses. The textbook answer I learned in my Northwestern courses diverged from reality in some important ways.</p>

                <img src={UI1} className="fwblog"/>
                <img src={UI2} className="fwblog"/>

                <p className="subtitle">SYSTEMATIZE: DESIGNING AT SCALE</p>
                <p>In order to design at scale, I had to think systematically both in terms of our designs and in terms of our design team. I established a regular cadence of design critiques, ideation sessions, and workshops that we could routinely use. In terms of people, I came up with a process for onboarding new designers, assessing their performance, mentoring/motivating the team, and a range of org designs we could use to scale. I also created an atomic design system to bring additional consistency, polish, speed, and coherence to our design practice.</p>

                <img src={newdesigners} className="processgraphic"/>
                <img src={org1} className="processgraphic"/>
                <img src={org2} className="processgraphic"/>
                <img src={org3} className="processgraphic"/>
                <img src={org4} className="processgraphic"/>
                <img src={atomicdesign} className="fwblog"/>

                </div>
                </div>
              }
              </React.Fragment>
            )
          }
  }

export default Three
