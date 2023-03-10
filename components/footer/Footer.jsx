import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { blogsData } from "../../blogsData";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerWrapper}>
        <article className={styles.footerLeft}>
          <Link href={"/"}>
            <Image
              src={"/img/logo.svg"}
              className={styles.img}
              width={50}
              height={50}
              alt="logo"
            />
          </Link>

          <ul>
            <li>
              <small>Address:</small>
              <p>4578 Marmora Road, Glasgow</p>
            </li>
            <li>
              <small>Phones:</small>
              <p>+1-123-456-78-89</p>
              <p>+1-123-456-78-89</p>
            </li>
            <li>
              <small>Working Hours:</small>
              <p>Monday-Sunday: 07:00 - 22:00</p>
            </li>
            <li>
              <small>Email:</small>
              <p>blackfit@gmail.com</p>
            </li>
          </ul>
        </article>
        <article className={styles.footerMid}>
          <h2>BLOG POSTS</h2>
          {blogsData.slice(0, 3).map((blog) => {
            return (
              <Link
                href={`/blogs/${blog.id}`}
                key={blog.id}
                className={styles.blog}
              >
                <Image
                  src={blog.imgUrl}
                  className={styles.blogImg}
                  width={100}
                  height={70}
                  alt="blog"
                />
                <div className={styles.title}>
                  <h3>{blog.title} </h3>
                  <p> {blog.date} </p>
                </div>
              </Link>
            );
          })}
        </article>
        <article className={styles.footerRight}>
          <h2>ABOUS US</h2>
          <p>
            BLACKFIT ??? fitness health center where your body gets its shape!
            Start training now to stay fit and healthy all year round!
          </p>

          <h2 className={styles.iconsEl}>OUR SOCIALS</h2>
          <div className={styles.icons}>
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </div>
        </article>
      </div>
      <p className={styles.copyright}>
        ?? All rights reserved by WebDevHasnat | Bangladesh
      </p>
    </section>
  );
};

export default Footer;
