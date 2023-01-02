import Image from "next/image";
import Link from "next/link";
import SubHead from "../../components/subHead/SubHead";
import styles from "../../styles/Blogs.module.css";
import { blogsData } from "../../blogsData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SingleBlog = () => {
  const router = useRouter();
  const id = router.query.blogid;

  const [data, setData] = useState({});

  useEffect(() => {
    const obj = blogsData.find((blog) => blog.id === Number(id));
    setData(obj);
  }, []);

  const blogsHead = {
    imgNumber: 4,
    heading: "Blogs",
    prevLink: "Home",
  };

  return (
    <section className="mainContainer">
      <SubHead data={blogsHead} />
      {data.id && (
        <>
          <main className={styles.blogs}>
            <h1> {data.title} </h1>
            <Image
              src={`${data.imgUrl}`}
              className={styles.image}
              width={500}
              height={500}
              alt="blog image"
            />
            <div className={styles.miniData}>
              <small>By : {data.author} </small>
              <small>Date : {data.date} </small>
            </div>
            <p> {data.body} </p>
          </main>
          <section className={styles.otherBlogs}>
            <h1>More Blogs :</h1>
            <div className={styles.otherBlogsWrapper}>
              {blogsData
                .filter((blog) => blog.id != data.id)
                .map((blog) => {
                  return (
                    <Link
                      href={`/blogs/${blog.id}`}
                      className={styles.blogArticle}
                      key={blog.id}
                    >
                      <Image
                        src={`${blog.imgUrl}`}
                        className={styles.images}
                        width={500}
                        height={500}
                        alt="blog image"
                      />
                      <h1> {blog.title} </h1>
                      <h2> {blog.id} </h2>
                      <div className="overlay"></div>
                    </Link>
                  );
                })}
            </div>
          </section>
        </>
      )}
    </section>
  );
};
export default SingleBlog;
