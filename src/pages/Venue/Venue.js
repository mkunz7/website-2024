import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import MediaQuery from "react-responsive";
import "./Venue.scss";

export default class Venue extends Component {
	static displayName = "Venue";

	constructor(props) {
		super(props);
		this.state = {
			defaultTab: "hotel",
		};
	}

	componentWillMount() {
		const defaultTab = this.props.location.hash
			? this.props.location.hash.split("#")[1]
			: "hotel";
		this.setState({
			defaultTab: defaultTab,
		});
		//window.history.pushState(this.props.location.pathname, '', `#${defaultTab}`);
	}

	changeTab(tabId) {
		window.history.pushState(this.props.location.pathname, "", `#${tabId}`);
	}

	getTabs(vert) {
		return (
			<Tabs
				defaultTab={this.state.defaultTab}
				onChange={(tabId) => {
					this.changeTab(tabId);
				}}
				vertical={vert}>
				<TabList>
					<Tab tabFor="hotel">Hotel</Tab>
					<Tab tabFor="omaha">Omaha</Tab>
					<Tab tabFor="parking">Parking</Tab>
				</TabList>
				<TabPanel tabId="hotel">
					<div className="text-area">
						{/* <div className="tab-title">Book Now</div> */}
						<div className="tab-title">Room Block</div>
						<div className="venue-hotel">
							{/* <div className="venue-text">
								We have a room block reserved at the conference
								hotel from Apr 13 to Apr 15 at a rate of
								$165/night. Book directly with the hotel{" "}
								<a
									className="text-highlight"
									href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=OMADTES&arrivalDate=2023-04-13&departureDate=2023-04-15&groupCode=KCA&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink"
									rel="noopener noreferrer"
									target="_blank">
									HERE
								</a>
								.{" "}  Please book by March 24th for our group rate.
							</div> */}
							<div className="venue-text">
								We will have a block of rooms available again this year for those wanting to stay on site.  Check back soon!
							</div>
						</div>
					</div>
					<div className="text-area">
						<div className="tab-title">
							Hotel & Location Information
						</div>
						<div className="venue-hotel">
							<div className="venue-location">
								<div className="venue-hotel-book">
									<div className="venue-hotel-info">
										<div className="venue-text">
											Embassy Suites by Hilton Omaha
											Downtown Old Market
										</div>
										<div className="hotel-sub-text">
											555 South 10th Street, Omaha,
											Nebraska, 68102, USA
										</div>
										<div className="hotel-sub-text">
											TEL: +1-402-346-9000
										</div>
									</div>
								</div>
								<div className="map-container">
									<iframe
										title="hotel-map"
										id="hotelMap"
										src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11997.840403876991!2d-95.928505!3d41.255317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938fa5b998d90d%3A0x5a8be450ef2d97cd!2s555+S+10th+St%2C+Omaha%2C+NE+68102!5e0!3m2!1sen!2sus!4v1530595511583"
										width="446"
										height="640"
										frameBorder="0"
										allowFullScreen
										style={{ marginTop: "-150px" }}>
										Loading...
									</iframe>
								</div>
							</div>
						</div>
					</div>
				</TabPanel>

				<TabPanel tabId="omaha">
					<div className="tab-title">Why Omaha?</div>
					<p className="about-sub-text">
						Kernelcon was founded with one goal in mind:
					</p>
					<p className="venue-hightlight-text">
						{" "}
						To be the midwest's premier information security
						conference.
					</p>
					<p className="about-sub-text">
						Therefore, the event needs to be centrally located, with
						a large local infosec community. Omaha has three
						universities certified as Centers of Academic Excellence
						through the NSA, multiple local cyber security groups
						such as{" "}
						<a
							className="text-highlight"
							href="http://dc402.org"
							rel="noopener noreferrer"
							target="_blank">
							DEF CON 402
						</a>
						,{" "}
						<a
							className="text-highlight"
							href="https://www.nebraskacert.org/"
							rel="noopener noreferrer"
							target="_blank">
							NebraskaCERT
						</a>
						, and{" "}
						<a
							className="text-highlight"
							href="https://www.unomaha.edu/college-of-information-science-and-technology/school-of-interdisciplinary-informatics/student-involvement/index.php"
							rel="noopener noreferrer"
							target="_blank">
							NULLify
						</a>
						, and plenty of opportunities in the information
						security field.
					</p>
					<p className="about-sub-text">
						Kernelcon will be held in the heart of Omaha’s historic
						Old Market, alongside the Missouri River. The Old Market
						is the hub of Omaha’s nightlife, with excellent bars,
						breweries, restaurants and shops all around.
					</p>
					<p className="about-sub-text">
						Our venue, the Embassy Suites Omaha, is a quick
						drive/shuttle ride from Omaha Eppley Airfield. Omaha is
						less than a day’s drive from many large cities in the
						Midwest and is an easy flight from both coasts. Pack
						your bags and plan for a trip where the people are
						friendly, the steaks are fresh, and hacking goes all
						night.
					</p>
				</TabPanel>
				<TabPanel tabId="parking">
					<div className="tab-title">Where to Park</div>
					<p className="about-sub-text">For hotel guests:</p>
					<p className="about-sub-text">
						Hotel lot surface parking is an additional charge for hotel guests. It is not included with the conference room rate.
					</p>
					<p className="about-sub-text">For commuters:</p>
					<p className="about-sub-text">
						We're happy to say that the conference parking is
						readily available. There is metered parking all along 10th street
						and several lots in the vicinity with affordable daily rates.{" "}
						<a
							className="text-highlight"
							href="https://www.parkomaha.com/map/"
							rel="noopener noreferrer"
							target="_blank">
							Park Omaha
						</a>{" "} is a fantastic resource.
					</p>
					{/* <p className="about-sub-text">
						<b>More information coming soon!</b>
					</p> */}
				</TabPanel>
			</Tabs>
		);
	}

	render() {
		return (
			<div id="main_hero" className="">
				<div className="container">
					<div className="venue-section">
						<h3 className="title">Venue</h3>
						<MediaQuery minDeviceWidth={1000}>
							{this.getTabs(true)}
						</MediaQuery>
						<MediaQuery maxDeviceWidth={999}>
							{this.getTabs(false)}
						</MediaQuery>
					</div>
				</div>
			</div>
		);
	}
}
