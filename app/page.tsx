import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div
        className="window
        flex
        flex-col
        text-center
        justify-items-center
      "
      >
        <div className="name">Name</div>
        <div className="pic">PICTURE</div>
        <div className="title">title</div>
        <div className="review">review</div>
      </div>
    </div>
  );
}
