import Image from "next/image";
import Link from "next/link";
import SubHead from "../../components/subHead/SubHead";
import styles from "../../styles/Blogs.module.css";

const SingleBlog = ({ data, blogs }) => {
  const blogsHead = {
    imgNumber: 4,
    heading: "Blogs",
    prevLink: "Home",
  };

  return (
    <section className="mainContainer">
      <SubHead data={blogsHead} />
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
          {blogs
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
    </section>
  );
};
export default SingleBlog;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/blogs`);
  const data = await res.json();

  const paths = data.map((obj) => {
    return { params: { blogid: `${obj.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://gymbd.netlify.app/api/blogs/${context.params.blogid}`
  );
  const data = await res.json();
  // get all blogs
  const response = await fetch(`https://gymbd.netlify.app/api/blogs`);
  const blogs = await response.json();

  return {
    props: {
      data,
      blogs,
    },
  };
}
