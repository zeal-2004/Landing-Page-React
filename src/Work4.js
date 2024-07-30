import screen from "./images/screen4.png";

export default function Work4({ title, content, btnback, btncolor }) {
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
    <>
      <div
        class="d-flex justify-content-center custom4 mx-auto d-block gap-4 rounded-5
    "
      >
        <div class="p-5">
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
        <img src={screen} height="431" class="rounded-end-5"></img>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="line">
          <p class="break">
            <span> ⚙️ S E R V I C E S </span>
          </p>
        </div>
      </div>
    </>
  );
}
