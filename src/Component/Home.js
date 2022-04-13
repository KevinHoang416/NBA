import React, { useState } from "react";
import Poll from "react-polls";
import { Container, Card, Row, Col, Alert} from 'react-bootstrap'
import './Style.css'
// use "npm install --legacy-peer-deps react-polls" to install poll package 

function Home() {
  return (
    <div>
      <Alert variant="success">

  <Alert.Heading className='heading'></Alert.Heading>

  <h1>Welcome to the NBA Fan page</h1>
  <p1>This is the NBA fan page for CPAN144 Final project. This is the home
        directory that will aid you in navigating you throughout the website. On this website
        you will be able to keep up to date with current NBA news, find information about your favorite NBA player, login/register to
        receive updates on the website and find information about us, the developers and give us any submission feedback.
      </p1>
  <hr />
</Alert>
      <h1 className='primary'>MVP 2022 Fan Voting</h1>
      <h1 className="mocksurvey"><MockSurvey /></h1><br /><br />
      <h1 className='primary'>Featured NBA News:</h1>
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="mb-5">
              <img class="card-img-top" src="/images/Giannis.jpeg" alt="" width="400" height="350"></img>
              <Card.Body className="cardbody">Ranking the 30 best NBA players entering 2022 playoffs: Giannis or Durant for No. 1?</Card.Body>
              <a href="https://www.sportingnews.com/ca/nba/news/ranking-best-nba-players-2022-playoffs/urt5c89p0hqnyo6lughrfl10" class="btn btn-primary">Link to Article</a>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="mb-5">
              <img class="card-img-top" src="/images/Draft.jpeg" alt="" width="400" height="350"></img>
              <Card.Body className="cardbody">NBA Mock Draft 2022: Did Paolo Banchero reclaim No. 1 overall pick from Chet Holmgren after Final Four run in NCAA tournament?</Card.Body>
              <a href="https://www.sportingnews.com/ca/nba/news/nba-mock-draft-2022-paolo-banchero-chet-holmgren-ncaa-tournament/hkfgqcmptagnclzwxbusvcxt" class="btn btn-primary">Link to Article</a>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="mb-5">
              <img class="card-img-top" src="/images/LebronSad.webp" alt="" width="400" height="350" ></img>
              <Card.Body className="cardbody">How many times has LeBron James missed the playoffs? Lakers on brink of elimination in 2021-22 season</Card.Body>
              <a href="https://www.sportingnews.com/ca/nba/news/lebron-james-missed-playoffs-lakers/wagerb24ur4wcxso571sffuh" class="btn btn-primary">Link to Article</a>
            </Card>
          </Col>


          <Col lg={6}>
            <Card className="mb-5">
              <img class="card-img-top" src="/images/Zion.jpeg" alt="" width="400" height="350"></img>
              <Card.Body>How long is Zion Williamson out? Injury timeline, return date, latest updates on Pelicans star</Card.Body>
              <a href="https://www.sportingnews.com/ca/nba/news/zion-williamson-injury-timeline-return-date-updates/1f31cgc7vzvov1dboapi67gsne" class="btn btn-primary">Link to Article</a>
            </Card>
          </Col>
        </Row>
      </Container> <br/>  
      <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Offical NBA Homepage</h5>
    <a href="https://www.sportingnews.com/ca/nba?gr=www" class="btn btn-primary">NBA</a>
  </div>
</div>
    </div>

  )
}
export default Home;


const StylePoll = {
  questionSeparator: true,
  questionSeparatorWidth: 'question',
  questionBold: true,
  questionColor: '#22551',
  align: 'center',
  theme: 'black'
}

const Options = [
  { option: "Lebron James", votes: 200 },
  { option: "Kevin Durant", votes: 120 },
  { option: "Stephen Curry", votes: 150 },
  { option: "Luka Doncic", votes: 90 },
  { option: "Ja Morant", votes: 40 },
  { option: "Other", votes: 20 },
];
const MockSurvey = () => {
  const [pollOptions, setPollOptions] = useState([...Options])
  const handleVotes = (voteOptions) => {
    setPollOptions((pollOptions) =>
      pollOptions.map((Options) =>
        Options.option === voteOptions
          ? {
            ...Options,
            votes: Options.votes + 1
          }
          : Options
      )
    );
  };
  return (
    <div>
      <Poll
        answers={pollOptions}
        onVote={handleVotes}
        customStyles={StylePoll}
      />
    </div>
  );
};
