import "../component-css/homeProgress.css";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Image,
  Button,
  ButtonGroup,
} from "react-bootstrap";

function HomeProgress() {
  const awardList = [
    {
      id: 1,
      src: "../../Resources/award1.png",
    },
    {
      id: 2,
      src: "../../Resources/award2.png",
    },
    {
      id: 3,
      src: "../../Resources/award3.png",
    },
    {
      id: 4,
      src: "../../Resources/award2.png",
    },
    {
      id: 5,
      src: "../../Resources/awardchevron.png",
    },
  ];
  return (
    <>
      <Container className="progress-container">
        <Row>
          <Col sm={4} className="progress-left">
            <Image
              src="../../Resources/progressprofile.png"
              id="profile-pic"
            ></Image>
            <h3>Jonathan Leon</h3>
            <div className="profile-desc">
              <p>Beginner level</p>
              <p>
                Current Plan:{" "}
                <span style={{ color: "#FFA800", fontWeight: "bold" }}>
                  Premium
                </span>
              </p>
            </div>
            <div className="awards-container">
              {awardList.map((item) => {
                return (
                  <Button variant="award" key={item.id}>
                    <img src={item.src} className="award-img" />
                  </Button>
                );
              })}
            </div>
          </Col>
          <Col sm={8} className="progress-right">
            <div className="current-status">
              <h3>Level 2</h3>
              <div className="current-progress">
                <p>Current task 3/5</p>
                <ProgressBar now={60} variant="success"></ProgressBar>
              </div>
            </div>
            <div className="goal-progress-item">
              <div className="item-text">
                <p>Set a goal</p>
                <h5>Wealth Compass: Goal Planner</h5>
                <Button size="sm" id="goal-btn">
                  Open
                </Button>
              </div>
            </div>
            <div className="tradequest-progress-item">
              <div className="item-text">
                <i className="bi bi-lock-fill"></i>
                <p>Complete Chapter 1.</p>
                <h5>TradeQuest: Basic Knowledge</h5>
                <Button size="sm" id="goal-btn">
                  Open
                </Button>
              </div>
            </div>
            <div className="challenge-progress-item">
              <div className="item-text">
                <i className="bi bi-unlock-fill"></i>
                <p>Level 3</p>
                <h5>
                  Weekly Challenge{" "}
                  <span style={{ fontWeight: "lighter" }}>Unlock</span>
                </h5>
                <Button size="sm" id="pending-btn">
                  Open
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HomeProgress;
