import hand from "./images/hand.png";

export default function Home() {
  return (
    <>
      <div class="container home d-flex justify-content-center align-items-baseline rounded-4">
        <div className="custom-container d-flex justify-content-center align-items-center">
          <p className="font-fraunces">Hi, Welcome to Thinkinfinity!</p>
          <img clasname="hand align-self-center" src={hand} height="70"></img>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="line">
          <p class="break">
            <span> ✏️ W O R K </span>
          </p>
        </div>
      </div>
    </>
  );
}
