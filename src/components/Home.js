const Home = () => {
  return (
    <>
      <div className="anime-background" id="home">
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>

        {/* ============ HEADER ============ */}

        <div className="header-text">
          <h1>
            Hi, <br /> I'm <span className="welc-t-blue">Jude,</span>
            <br /> A Freelance Developer.
          </h1>
          <button className="head-btn">
            <a href="#projects">view projects</a>
            <svg
              className="bounce"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="92px"
              height="92px"
              viewBox="0 0 92 92"
              enableBackground="new 0 0 92 92"
              xmlSpace="preserve">
              <path
                id="XMLID_467_"
                d="M46,63c-1.1,0-2.1-0.4-2.9-1.2l-25-26c-1.5-1.6-1.5-4.1,0.1-5.7c1.6-1.5,4.1-1.5,5.7,0.1l22.1,23l22.1-23c1.5-1.6,4.1-1.6,5.7-0.1c1.6,1.5,1.6,4.1,0.1,5.7l-25,26C48.1,62.6,47.1,63,46,63z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
