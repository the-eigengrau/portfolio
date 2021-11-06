import React, { Component } from 'react';
import '../SCSS/CaseStudy.scss'
import '../SCSS/DesktopCaseStudy.scss'
import '../SCSS/Design.scss'
import doc1 from './images/doc1.png'
import doc2 from './images/doc2.png'
import ipo1 from './images/ipo1.png'
import ipo2 from './images/ipo2.png'
import ipo3 from './images/ipo3.png'
import ipo4 from './images/ipo4.png'
import fw2 from './images/fw2.png'
import fwblog from './images/fwblog.png'
import trhome from './images/trhome.png'
import brand from './images/brand.png'
import brand1 from './images/brand2.png'
import coreproduct from './images/coreproduct.png'
import coreproduct2 from './images/coreproduct2.png'
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
                <p>After months of debate, iteration, and effortful creation we had launched our MVP. We thought customers would come running. We had a pipeline of $100M ready to go, if only our product was ready. The customers never materialized. The pipeline was a pipe dream. </p>

                <p>But no matter. We slogged, tested, listened to users, repositioned, and eventually we turned a spark into a flame. But would it be a sustained flicker or an ephemeral inferno? Time would tell. Successes and failures are short lived at a startup.</p>

                <p>As an aspiring founder I had an idealized and heroic vision of what entrepreneurship was. A sage for all seasons, the entrepreneur would slaughter sacred cows and dive into untrammeled territory with discipline and creative vision. The resulting lightning that he bottled would captivate customers, change their lives, and bring untold success. </p>

                <p>As the first designer at a venture-backed startup, I held fast to my romanticism through the disorganized fumblings, arbitrary firings, and playful flights of fancy. But I began to lose it piece by piece. I learned that in many ways the CEO was the least important person at a startup, not the most important. The omnipotent founder-CEO was an impossibility, but the pluripotent leader bringing adaptability, patience, and an appreciation for the talent and autonomy of others was a   necessity.</p>

                <p>And I learned that my own self-image as a highly skilled designer, who has all the answers, was also deeply flawed. As a design leader, I needed to listen more, subordinate my ego, use research to open conversations and not close them, underscore crucial alternatives, and carefully articulate my design rationale in the light of business, user, and engineering concerns. </p>

                <p>The skills and experience I gained at Treasure were some of the most important of my career. As the 6th employee at a high-growth company serving a crucial, definitional role, I gained messy insight into how ideas become reality, how to lead under uncertainty, and how to build relationships and communicate effectively under massive pressure.</p>

                <p>In some cases, I learned from success. In other cases, I learned these lessons through failure. As the old saying goes, experience is what you get right after you need it.</p>

                <p className="subtitle">PROCESS &  RESPONSIBILITIES</p>
                <p>As the first designer at Treasure I was responsible for getting us to MVP launch optimizing speed, product desirability, and ease of customer acquisition. What this amounted to was designing our core product’s interface and experience, conducting user research, designing our landing page and sales material, and standing up the design team’s processes and rituals. My range of work was very broad, however, I’ll share some key examples.</p>
                <p className="subtitle">CORE PRODUCT</p>
                <p>Our core offering was a cash flow analytics dashboard offering AI-powered recommendations, an idle cash identification algorithm, and an attractive, low-risk investment vehicle where you could invest your idle cash. We also provided the ability to aggregate information across bank accounts and provide real-time insights based on transaction data.</p>
                <img src={coreproduct} className="fwblog"/>
                <img src={coreproduct2} className="fwblog"/>
                There are several aspects of these designs that could be improved. Some points that come to mind: On the banking screen the allocated cash bar is confusing and calculated in a counter-intuitive way. Having withdrawal as a quick action but not deposits biases the user towards behavior that is neither in their best interest nor in ours. The idle cash indicator on the main dashboard could be behaviorally designed more effectively to prompt deposits. For example, we could have a   progress bar or "financial score" that the user strives to optimize, or an indicator of the loss to inflation that our user is suffering on an ongoing basis. Another ongoing research topic for us was which financial metrics are used at various intervals by CFOs to gauge the performance of their businesses. I learned textbook answer in my domain research, but what was the reality? Practice often diverges from the textbook ideal.
                <p className="subtitle">BRANDING</p>
                <p> </p>
                <img src={brand} className="ipo"/>
                <p>Through iteration we narrowed down to a more refined logo for our team, and came up with logos for each app as well, color categorized by use case. I also created other brand assets such as go-to-market materials, stickers, email headers, macro icons, desktop icons for on-prem users, and our team website.</p>
                <img src={brand1} className="ipo"/>
                <p className="subtitle">DESIGNING AND CODING THE WEBSITE</p>
                <p>I performed discovery interviews to figure out what would be the most impactful information and prioritization of content for our users, and then wireframed some mockups for the site. I did some usability testing with my wireframes, then I created a UI that was consistent with the branding and aesthetic of our apps. </p>
                <p>The site was coded using Ruby, HTML, CSS, javascript, and a CSS pre-processor called Sass. While I prefer the stack used to code this portfolio site, I did fall atleast partially in love with the bizarre quirks of Ruby, though it’ll take me a lot more reps to be able to effectively use monkey-patching and meta-programming to anywhere near their true potential.</p>
                <p>I had significant cross-browser and cross-platform challenges with coding this site, but using an emulator, and significantly refactoring the code to account for various contextual idiosyncrasies, we were able to launch the site. Sadly, I lost my wireframes and due to some technical issues, but the images below are good samples of what the site looks like in code.</p>
                <img src={fwblog} className="fwblog"/>
                <img src={fw2} className="fwblog"/>
                </div>
                </div>
              }
              </React.Fragment>
            )
          }
  }

export default Three
