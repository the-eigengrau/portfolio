import React, { Component } from 'react';
import '../SCSS/CaseStudy.scss'
import '../SCSS/DesktopCaseStudy.scss'
import '../SCSS/Design.scss'
import found1 from './images/found1.png'
import found2 from './images/found2.png'
import found3 from './images/found3.png'
import found4 from './images/found4.png'
import found5 from './images/found5.png'
import fw2 from './images/fw2.png'
import fwblog from './images/fwblog.png'
import fwhome from './images/fwhome.png'
import brand from './images/brand.png'
import brand1 from './images/brand2.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

class Four extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="caseStudy-container1">
          <p className="Backp"><Link className="Back" to="/design/casestudies"><ArrowBackIos className="Back"/></Link></p>
          <p className="caseTitle">Founding design on a skilled, technical team</p>

          <img src={found1} className="ipo"/>
          <div className="content2">
              <p>I love the thrill of the blank page, the feeling of boundless possibility that confronts you when you start something new. I took my role at KPMG Deal Advisory because I had a lot of ideas on how a great design practice should be run, and I knew I would be able to learn an unbelievable amount testing my ideas against the ambiguity, pace, and challenge of a small, inchoate technical team that had no design practice.</p>
              <p className="subtitle">MAJOR GOALS</p>
              <p>In founding the design discipline, I wanted to achieve several major goals. The first one was that I wanted the entire team to get significant exposure to our user-base on an ongoing basis: Specifically I wanted every person on the team to speak with atleast one user every eight weeks. For this to be effective, everyone on the team would need a basic understanding of how to conduct user research. Another major goal was taking a data-driven and systematic approach to design, leveraging event-based analytics, testing things rigorously, and focusing our design efforts on moving the needle on user outcomes as opposed to gratifying our artistic sensibilities. My final key objective was to create a nimble but rigorous process to evaluate the market potential and user impact of app ideas, and generate MVPs from the best ones.</p>
              <p className="subtitle">USER RESEARCH</p>
              <p>In terms of user research, I created and presented a handout to explain the value, context, and some major pitfalls of user research. Specifically, I wanted to hammer home to budding user researchers that it’s important not to ask the user to design the solution for you or say what will or won’t work in theory. I wanted everyone focused first on asking concrete questions about the areas that the user knows best: Their own personal experiences, problems, hopes, dreams, workarounds, quick fixes, and stories. Ideally, I wanted my researchers to go a step further and take specific notes on what the user actually does versus how they perceive themselves. Both are important at different levels of design, but it’s important to be able to separate the reflective from the visceral and behavioral.</p>
              <img src={found2} className="ipo"/>
              <p>On top of articulating the point, process, and context of user research I also gave my researchers a simple framework to figure out who to speak with and in what order. I had them list out all the potential research subjects that came to mind and classify them into gold, silver, and bronze buckets in accordance with this chart. </p>
              <img src={found3} className="ipo"/>
              <p>The most crucial task I had was integrating my net-new design practice into the existing team in a way that was effective, fostered engagement, and allowed for cross-disciplinary insight.
                 I began by examining the engineer’s workflow and attempting to integrate my knowledge of  design best practices into their development process in a way that was minimal and unobtrusive. I also read around ten books to ensure that I was up to date on the relevant best practices and wasn't propagating weak links in my process inadvertently. In the end, I wanted to ensure that we were coming up with clear product and problem theses, figuring out what assumptions underlie those theses, taking efforts to validate our assumptions directly with users, and iteratively designing great solutions to the right problems.
              </p>
              <img src={found5} className="ipo"/>
              <p className="subtitle">INTEGRATING DESIGN AND DEVELOPMENT</p>
              <p>The most crucial task I had was integrating my net-new design practice into the existing team in a way that was effective, fostered engagement, and allowed for cross-disciplinary insight.
              </p>
              <p>I began by examining the engineer’s workflow and attempting to integrate my knowledge of  design best practices into their development process in a way that was minimal and unobtrusive. I also read around ten books to ensure that I was up to date on the relevant best practices and wasn't propagating weak links in my process inadvertently. In the end, I wanted to ensure that we were coming up with clear product and problem theses, figuring out what assumptions underlie those theses, taking efforts to validate our assumptions directly with users, and iteratively designing great solutions to the right problems.</p>
              <p className="subtitle">DEVELOPING A PRODUCT STRATEGY</p>
              <p>Another crucial factor was speaking to partners at the firm and figuring out what our overarching strategy was and how we should judge new app ideas in the context of that broader vision. I won't disclose the details of that vision, but I'll say that essentially there are different types of deals within different verticals that have significantly different economics. I used Michael Porter's competitive strategy framework and other resources to assess each vertical, and read a reference book about M&A to help me understand our business more broadly.</p>
              <img src={found4} className="ipo"/>
              <p>Based on understanding of those market effects, we came up with a product strategy to use our apps to improve margins, enable new capabilities, and move the needle for our clients.</p>
              <p className="subtitle">REFINING OUR PROCESS</p>
              <p>The first process we engineered was over-wrought. It was too complex for our engineers to buy into. So we decided to begin with the end in mind and refactor it.</p>
              <p>By the time we launched an MVP for an app, we wanted to have 3-5 super high impact user benefits within a coherent and clearly defined product thesis. Along with that we wanted to have compelling, concrete, and impactful use cases that we could talk about to help users understand our products in an emotionally salient way. Working backwards from that, we find and validate critical user problems and then iterate until we devised a compelling and concise set of coherent user benefits.</p>
              <p>From there, we would develop wireframes, iteratively test our designs, and jump into development, where we would continually involve users in the testing and refinement process. If possible we would try to have users pilot our apps prior to full release and then use those experiences as concrete reference points for new users in our marketing materials.</p>
              <p className="subtitle">MENTORING AND MANAGEMENT</p>
              <p>In terms of mentoring, I used a qualitative traits framework from Stanford as a way to help people reflect on their performance and mine, held weekly mentoring meetings, and used consistency, positivity, and vulnerability to build authentic relationships.</p>
              <p>From a management stand-point, I leveraged a lot of tricks from Peter Drucker and Andy Grove: Maintain a span of control that is reasonable, clarify the purpose of communications/meetings, use clear agendas, be goal-oriented, give people as much agency as possible including occasionally letting them make mistakes so that they can learn, cultivate detachment, and try to see the bigger picture.</p>
              <p>Mind-blindness is the biggest obstacle stopping technical people from connecting with their users. When you have deep knowledge of a domain, it's easy to misperceive the level of understanding your users have. You have rich context, background, and a deep well of references that cause you to hear a symphony where non-technical people hear crickets.</p>
              <p>Helping my time connect more effectively with our users was a focus for me at KPMG Deal Advisory. I devised a content strategy, branding, and designed/coded a team website and blog.</p>
              <p>I based my communication strategy on Chip Heath's investigations into what makes ideas stick at Stanford and Jonathan Haidt's research into how moral intuitions color our perception of messaging at NYU. Our branding was based around brand attributes that we generated during branding exercises that I ran: Intelligence, speed, and simplicity.</p>
              <p className="subtitle">CONTENT STRATEGY</p>
              <p>The way I gained buy-in for my storytelling initiative was by having them participate directly in the process from the beginning. I picked two of our most respected senior engineers and had them co-develop and co-present materials with me to the team on the how and why of using my principles of good communication. We created examples that were directly relevant to the team like launch emails, blog posts, and feature updates and broke them down in terms of effectiveness and impact.</p>
              <p>I also made sure to describe and emphasize research that shows people can be taught to communicate more impactfully, because it can be daunting to take on an ambiguous task like telling your story more effectively, and I wanted to make sure people know they can learn how to be great at this. For reference, the principles we emphasized were simplicity, unexpectedness, concreteness, credibility, emotional salience, and story-centricity. I used examples from our own context and also great examples from companies such as Google, SpaceX, Apple, Stripe, and others.</p>
              <p className="subtitle">DESIGNING AND CODING THE WEBSITE</p>
              <p>I performed discovery interviews to figure out what would be the most impactful information and prioritization of content for our users, and then wireframed some mockups for the site. I did some usability testing with my wireframes, then I created a UI that was consistent with the branding and aesthetic of our apps. </p>
              <p>The site was coded using Ruby, HTML, CSS, javascript, and a CSS pre-processor called Sass. While I prefer the stack used to code this portfolio site, I did fall atleast partially in love with the bizarre quirks of Ruby, though it’ll take me a lot more reps to be able to effectively use monkey-patching and meta-programming to anywhere near their true potential.</p>
              <p>I had significant cross-browser and cross-platform challenges with coding this site, but using an emulator, and significantly refactoring the code to account for various contextual idiosyncrasies, we were able to launch the site. Sadly, I lost my wireframes and due to some technical issues, but the images below are good samples of what the site looks like in code.</p>
              <img src={fwhome} className="fwblog"/>
              <img src={fwblog} className="fwblog"/>
              <img src={fw2} className="fwblog" style={{display: 'none'}}/>
              <p className="subtitle">BRANDING</p>
              <p>I conducted mind-mapping exercises to help people think through the attributes we wanted users to associate with our brand. Once we narrowed down our attributes and brand colors, I generated a vast array of ideas for our brand identity. </p>
              <img src={brand} className="ipo"/>
              <p>Through iteration we narrowed down to a more refined logo for our team, and came up with logos for each app as well, color categorized by use case. I also created other brand assets such as go-to-market materials, stickers, email headers, macro icons, desktop icons for on-prem users, and our team website.</p>
              <img src={brand1} className="ipo"/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Four
