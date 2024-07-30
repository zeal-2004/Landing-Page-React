import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";
import icon6 from "./images/icon6.png";
import bg from "./images/bg2.png";

export default function Card() {
  const services = [
    {
      img: icon1,
      title: "Mobile App",
      content:
        "Elevate user engagement with innovative mobile app solutions tailored to your needs.",
    },
    {
      img: icon2,
      title: "UX/UI design",
      content:
        "Design intuitive and visually stunning user interfaces for an exceptional user experience.",
    },
    {
      img: icon3,
      title: "Interaction Design",
      content:
        "Create meaningful interations that enhance user engagement and satisfaction.",
    },
    {
      img: icon4,
      title: "Digital Prototyping",
      content:
        "Bring ideas to life through digital prototypes, ensuring a tangible vision of your concept.",
    },
    {
      img: icon5,
      title: "Motion Graphics",
      content:
        "Infuse dynamic visual elements to captivate users through fluid and engaging motion graphics.",
    },
    {
      img: icon6,
      title: "Illustrations & Iconography",
      content:
        "Craft unique visual identities with custom illustrations and iconic design elements.",
    },
  ];
  return (
    <>
      <div class="wrapper" style={{ zIndex: "1" }}>
        <div class="row img">
          {services.map((service) => (
            <div class="col-4">
              <div class="card card-width mx-auto mb-5">
                <img src={service.img} class="card-img-size" alt="Icon" />
                <div class="card-body">
                  <h5 class="card-title">{service.title}</h5>
                  <p class="card-text">{service.content}</p>
                </div>
              </div>
            </div>
          ))}
          <div class="d-flex justify-content-center align-items-center"></div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="line">
          <p class="break">
            <span> O T H E R &ensp; P R O J E C T S </span>
          </p>
        </div>
      </div>
    </>
  );
}
