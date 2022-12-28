import React from "react";
import SubHead from "../../components/subHead/SubHead";

const Trainers = () => {
  const trainersHead = {
    imgNumber: 1,
    heading: "Trainers",
    prevLink: "home",
  };

  return (
    <section className="mainContainer">
      <SubHead data={trainersHead} />
    </section>
  );
};

export default Trainers;
