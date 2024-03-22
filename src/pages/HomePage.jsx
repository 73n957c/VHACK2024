import HomeProgress from "../components/homeProgress";
import "../page-css/HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="page-title">
        <h5>Welcome to</h5>
        <h3>
          <span style={{ color: "#FFA800" }}>FINANCIAL</span> FRONTIER
        </h3>
      </div>
      <section className="progress-block">
        <HomeProgress></HomeProgress>
      </section>
    </>
  );
}
