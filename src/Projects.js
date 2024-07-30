import p1 from "./images/phone1.png";
import p2 from "./images/phone2.png";
import p3 from "./images/phone3.png";
import p4 from "./images/phone4.png";
import p5 from "./images/phone5.png";
import p6 from "./images/phone6.png";

export default function Projects() {
  return (
    <div
      class="container d-flex justify-content-between"
      style={{ backgroundColor: "#E0DFE4", marginBottom: "90px" }}
    >
      <img src={p1}></img>
      <img src={p2}></img>
      <img src={p3}></img>
      <img src={p4}></img>
      <img src={p5}></img>
      <img src={p6} height="400"></img>
    </div>
  );
}
