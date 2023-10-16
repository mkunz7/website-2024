import React, { Component } from "react";
import PunkMale from "../../static/images/punk/punk_male.png";
import PunkFemale from "../../static/images/punk/punk_female.png";
import Skyline from "../../static/images/punk/skyline.png";
import Speaker from "../../static/images/icons/speaker.png";
import Training from "../../static/images/icons/training.png";
import Arm from "../../static/images/icons/arm.png";
import Brain from "../../static/images/icons/brain.png";
import Fun from "../../static/images/icons/fun.png";
import wendy from "../../static/images/trainers/wendy.jpg";

import FullKernelconLogo from "../../static/images/logos/kernelcon_black.png"
import FullKernelconLogoDark from "../../static/images/logos/kernelcon_white.png"
import BackGround from '../../components/BackGround/BackGround';
import Button from '../../components/Button/Button';
// import ChemSet from '../../components/ChemSet/ChemSet';
import ChemSet from '../../static/images/chem-set.png';
// import bkg from '../../static/images/earth-day.jpg';

import Lecture from "../../static/images/icons/lecture.svg"
import Jetpack from "../../static/images/icons/jetpack.svg"
import Award from "../../static/images/icons/award.svg"
import Research from "../../static/images/icons/research.svg"
import Atom from "../../static/images/icons/atom.svg"
import Experiment from "../../static/images/icons/experiment.svg"
import ExperimentTable from "../../static/images/icons/experiment-table.svg"
import LabCoat from "../../static/images/icons/lab-coat.svg"
import BrainOutline from "../../static/images/icons/brain-outline.svg"
import Certificate from "../../static/images/icons/certificate-2.svg"

import "./Home.scss";
import TextScramble from "../../components/TextScramble/TextScramble";
import Terminal from "../../components/Terminal/Terminal";

export default class Home extends Component {
	static displayName = "Home";

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

  getRandomScientist(lengthOfArray, indexToExclude, secondLastKernelIndex) {
    // This function just grabs a random index that wasn't one of the last two.
    // Obviously, due to math, you need to send in at least an array of length 3.
    let rand = null;

    while (rand === null || rand === indexToExclude || rand === secondLastKernelIndex) {
      rand = Math.round(Math.random() * (lengthOfArray - 1));
    }
    return rand;
  }


	constructor(props) {
		super(props);
		this.state = {
			mode: "",
			isOpen: false,
		};
	}

  getScientist() {
    const randScientist = this.getRandomScientist(7, 0, 0);

    // If image DNE, assign the random Scientist we've generated.
    const img = `mad-scientists/mad_scientist_${randScientist}.png`;
    const imgSrc =  img ? require(`../../static/images/${img}`) : 'https://via.placeholder.com/150';
    return imgSrc;
  }
 


	render() {
    const imgSrc = this.getScientist();

		return (
      <div id='main_hero' className='hero'>
        <BackGround />
        <div className="container">
          <div className="home-page">
            <div className="centered-top">
              <img src={FullKernelconLogoDark} className="light-mode-logo light-mode-kernel-logo"  alt="kernelcon-logo"/>
              <img src={FullKernelconLogoDark} className="dark-mode-logo dark-mode-kernel-logo"  alt="kernelcon-logo"/>
              <TextScramble />
            </div>

            <div className="col left">
              <div className="sizzle">
                <div className="sizzle-header">
                  <div className="sizzle-text-title">
                    Welcome to Kernelcon
                  </div>
                </div>
                <div className="sizzle-text-section">
                  <div className="sizzle-text">
                    Put your lab coat on and join us to test the hypothesis that Kernelcon is still one of the midwest's premier information security conferences.
                  </div>
                  <div className="sizzle-bullets">
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Lecture} alt="speaker-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Excellent Speakers
                        </div>
                        <div className='sizzle-bullet-desc'>
                          We are bringing in some of information security's top talents from the midwest and across the nation. Come learn from and network with our speakers!
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Certificate} alt="training-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Professional Training
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Some of the industry's leading trainers descend on Omaha, Nebraska to lead two days of intensive coursework for attendees. Interested in doing the training? Contact us through our open calls.
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Research} alt="hands-on-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Hands-On Villages
                        </div>
                        <div className='sizzle-bullet-desc'>
                        We have huge plans for our village area - including classics like Lockpicking and Hardware Hacking. Got an idea for a fun village? Check out our open calls.
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={BrainOutline} alt="competitions-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Challenging Competitions
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Our Capture-the-Flag event is always a big hit and this year promises to be no less than 8-bits of CTF fun! Join us in a quest to win an eternal kernel aka lifetime entry to Kernelcon!
                        </div>
                      </div>
                    </div>
                    <div className='sizzle-bullet-item'>
                      <div className='sizzle-icon'>
                        <img src={Experiment} alt="activities-logo"/>
                      </div>
                      <div className='sizzle-bullet'>
                        <div className='sizzle-bullet-title'>
                          Fun Activities
                        </div>
                        <div className='sizzle-bullet-desc'>
                          Join us at out raging party / social event Kernel Panic party.  Details to come but this event is always an attendee favorite!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='pop'>
                <img src={imgSrc} className="mad-scientist" alt="mad scientist in lab"/>
              </div>

            </div>
            <div className="col right">

            <span className='button-left-margin'>
              <div className='order-button'>
                <a
                  className="cybr-btn btn-bottom"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reg.kernelcon.org/e/2138619365">
                  Register Now
                  <span aria-hidden className="cybr-btn__glitch">
                    Register Now
                  </span>
                </a>
              </div>
                {/* <<img
                  className="img-responsive"
                  alt="future-is-now"
                  src="https://cdn0.vox-cdn.com/thumbor/O8IF6wSLdIz4JoG6abHHSn2qWhg=/cdn0.vox-cdn.com/uploads/chorus_asset/file/6274065/Apr_01__2016_09_25.0.gif"
                />
                <p className="photo-credit">
                  The Future Is Now by Josan Gonzalez
                </p> */}
              </span>

              <div className='pop'>

              {/* <center>
                <div className='order-button'>
                  <a
                    className="cybr-btn btn-bottom"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://reg.kernelcon.org/">
                    Register Now
                    <span aria-hidden className="cybr-btn__glitch">
                      Register Now
                    </span>
                  </a>
                </div>
              </center> */}

              

              {/* <div className='updates'>
                <h2>REGISTER</h2>
                <div className='update-text'>
                  <p>Registration is now open for tickets and all workshops!</p>
                  <p>On-site registration will also be available, but register now to secure your portion of the limited availability of electronic badges, t-shirts, and more!</p>
                </div>
                <div className='sign-up-btn'>
                  <Button href="/register" title="Register" />
                </div>
              </div> */}
              <Terminal />

              <div className='theme-description'>
                <h3>This year's theme is <span className='underline'>Science</span>.</h3> 
                <p>Look at any science-related discipline and you'll find hackers learning and iterating, making discoveries and proving theories that have shaped the world we live in today.</p>
                <br />
                <p>Whether you are into engineering, physics, biology, electronics, mathematics, or chemistry <b>you belong here at Kernelcon.</b></p>
              </div>

              {/* <img src={imgSrc} className="mad-scientist" alt="mad scientist in lab"/> */}
              
              {/* <img src={ChemSet} alt="chemistry set"/> */}
              
              {/* <div className='keynote'>
                <div className='keynote-header'>
                  <div className='keynote-title'>
                    Keynote Speaker:
                  </div>
                  <div className='keynote-speaker'>
                    <div className='keynote-speaker-name'>
                      Wendy Nather
                    </div>
                    <div className='keynote-speaker-info'>
                      <img src={wendy} className='keynote-image' alt="Wendy Nather"/>

                      <p className='keynote-para'>Wendy Nather leads the Advisory CISO team at Cisco.  She was previously Research Director at the Retail ISAC, where she was responsible for advancing the state of resources and knowledge to help organizations defend their infrastructure from attackers. Wendy was also Research Director of the Information Security Practice at independent analyst firm 451 Research, covering the security industry in areas such as application security, threat intelligence, security services, and other emerging technologies.</p>
                      <p className='keynote-para'>Wendy has served as a CISO in both the private and public sectors. She led IT security for the EMEA region of the investment banking division of Swiss Bank Corporation (now UBS), as well as for the Texas Education Agency. Wendy is co-author of <i>The Cloud Security Rules</i>, and was listed as one of SC Magazine's Women in IT Security "Power Players" in 2014, as well as an “Influencer” in the Reboot Leadership Awards in 2018; she was inducted into the Infosecurity Europe Hall of Fame in 2021. She is an advisory board member for the RSA Conference, and serves on the advisory board for Sightline Security, an organization that helps provide free security assessment services to nonprofit groups. Wendy is a Senior Fellow at the Atlantic Council's Cyber Statecraft Initiative, as well as a Senior Cybersecurity Fellow at the Robert Strauss Center for International Security and Law at the University of Texas at Austin. She is based in Fort Collins, Colorado.</p>

                    </div>
                  </div>
                </div>
              </div> */}



    {/* 
              <center>
              <div className='order-button'>
                <a
                  className="cybr-btn btn-bottom"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reg.kernelcon.org/">
                  Register Now
                  <span aria-hidden className="cybr-btn__glitch">
                    Register Now
                  </span>
                </a>
              </div>
                <img
                  className="img-responsive"
                  alt="future-is-now"
                  src="https://cdn0.vox-cdn.com/thumbor/O8IF6wSLdIz4JoG6abHHSn2qWhg=/cdn0.vox-cdn.com/uploads/chorus_asset/file/6274065/Apr_01__2016_09_25.0.gif"
                />
                <p className="photo-credit">
                  The Future Is Now by Josan Gonzalez
                </p>
              </center> */}
              </div>
            </div>

            {/* <a className='reg-button'
              href="https://reg.kernelcon.org"
              rel='noopener noreferrer'
              target='_blank'>
              Register Now
            </a>
            <a className='reg-button'
              onClick={this.toggleModal}
              href="#"
              rel='noopener noreferrer'>
              Sign up for updates
            </a>

            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}
              title='Subscribe for Updates'
              modalContentStyle={modalContentStyle}
              height='620'
              width='600'>
                <iframe src="https://mailchi.mp/4305c17b886e/kernelcon"
                  title="sign-up-form"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className='mail-form'
                  style={{'marginLeft': '0px', 'width': '580px', 'height': '720px'}}>
                  Loading...
                </iframe>
            </Modal> */}
          </div>
        </div>
      </div>
		);
	}
}
