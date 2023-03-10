import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const SubHead = ({ data }) => {
  return (
    <section className="subHead">
      <div className="subHead-wrapper">
        <Image
          className="subHead-img"
          src={`/img/bg${data.imgNumber}.jpg`}
          layout="fill"
          priority={true}
          alt="subhead image"
        />
        <h1 className="subHeading"> {data.heading} </h1>
        <div>
          <Link href={"/"}> {data.prevLink} </Link>
          <FontAwesomeIcon className="icon" icon={faAnglesRight} />
          <Link href={`${data.heading}`}>{data.heading} </Link>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default SubHead;
