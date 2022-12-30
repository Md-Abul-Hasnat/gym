import Image from "next/image";
import Link from "next/link";
import SubHead from "../../components/subHead/SubHead";
import styles from "../../styles/Blogs.module.css";

const index = ({ data }) => {
  const blogsHead = {
    imgNumber: 4,
    heading: "Blogs",
    prevLink: "Home",
  };

  const firstBlog = data[3];

  return (
    <section className="mainContainer">
      <SubHead data={blogsHead} />
      <main className={styles.blogs}>
        <h1> {firstBlog.title} </h1>
        <Image
          src={`${firstBlog.imgUrl}`}
          className={styles.image}
          width={500}
          height={500}
          alt="blog image"
        />
        <div className={styles.miniData}>
          <small>By : {firstBlog.author} </small>
          <small>Date : {firstBlog.date} </small>
        </div>
        <p> {firstBlog.body} </p>
      </main>
      <section className={styles.otherBlogs}>
        <h1>More Blogs :</h1>
        <div className={styles.otherBlogsWrapper}>
          {data
            .filter((blog) => blog.id != firstBlog.id)
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
    </section>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`/api/blogs`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
