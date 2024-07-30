import screen from "./images/screen2.png";

export default function Work2({ title, content, btnback, btncolor }) {
  const buttonStyle = {
    backgroundColor: btnback,
    color: btncolor,
    fontFamily: '"Mulish", sans-serif',
  };

  const viewStyle = {
    backgroundColor: "#FF774C",
    fontFamily: '"Mulish", sans-serif',
    fontSize: "15px",
  };
  return (
    <div
      class="d-flex justify-content-center custom2 mx-auto d-block mb-5 rounded-5
    "
    >
      <div class="py-5 ps-5">
        <p className="font-f pb-3 lh-sm">{title}</p>
        <div class="d-flex gap-2">
          <button type="button" class="btn" style={buttonStyle}>
            User Research
          </button>
          <button type="button" class="btn" style={buttonStyle}>
            UI Design
          </button>
        </div>
        <p className="font-m pt-3 lh-sm">{content}</p>
        <button type="button" class="btn px-5 py-2" style={viewStyle}>
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            View More ↗
          </a>
        </button>
      </div>
      <div>
        <img
          src={screen}
          height="448.5"
          width="490"
          class="rounded-end-5"
        ></img>
      </div>
    </div>
  );
}
