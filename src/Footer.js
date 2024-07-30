import mail from "./images/mail.png";

export default function Footer() {
  const textStyle = {
    fontFamily: '"Mulish", sans-serif',
    fontSize: "40px",
    color: "#242F65",
  };

  const box = {
    backgroundColor: "white",
    width: "max-content",
    color: "#242F65",
    fontFamily: '"Fraunces", serif',
  };

  const inside = {
    color: "white",
    fontFamily: '"Mulish", sans-serif',
    backgroundColor: "#242F65",
    fontSize: "10px",
  };
  return (
    <>
      <div className="footer">
        <div class="d-flex justify-content-center align-items-center p-5 gap-5">
          <p style={textStyle}>🖥️ Get In Touch</p>
          <p style={textStyle}>✌ Available For Work</p>
        </div>
        <div class="d-flex justify-content-evenly align-items-center">
          <div
            class="d-flex justify-content-center align-items-center py-3 px-5 rounded-2 gap-5 mb-5"
            style={box}
          >
            <p>Interested in working together? Drop a Mail</p>
            <div
              class="d-flex justify-content-around align-items-center gap-1 p-2 rounded-2"
              style={inside}
            >
              <img src={mail} />
              <a>contact@thinkinfinity.co.in</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
