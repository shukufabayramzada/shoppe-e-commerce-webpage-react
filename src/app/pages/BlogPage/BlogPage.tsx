import "./BlogPage.scss";
import blogSearchIcon from "../../../assets/icons/blog search icon.svg";
import firstPost from "../../../assets/images/image 1.png";
import secondPost from "../../../assets/images/image 2.png";
import thirdPost from "../../../assets/images/image 3.png";
import fourthPost from "../../../assets/images/image 4.png";
import { PostsGrid } from "./components/PostsGrid/PostsGrid";

export const BlogPage = () => {
  const posts = [
    {
      imageSrc: firstPost,
      date: "Fashion - October 8, 2020",
      subhead: "Top Trends From Spring",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus augue, a maximus elit ex vitae libero...",
      linkTitle: "Read More",
    },
    {
      imageSrc: secondPost,
      date: "Fashion - October 8, 2020",
      subhead: "Top Trends From Spring",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus augue, a maximus elit ex vitae libero...",
      linkTitle: "Read More",
    },
    {
      imageSrc: thirdPost,
      date: "Fashion - October 8, 2020",
      subhead: "Top Trends From Spring",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus augue, a maximus elit ex vitae libero...",
      linkTitle: "Read More",
    },
    {
      imageSrc: fourthPost,
      date: "Fashion - October 8, 2020",
      subhead: "Top Trends From Spring",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus augue, a maximus elit ex vitae libero...",
      linkTitle: "Read More",
    },
  ];
  return (
    <div className="blog-page">
      <div className="subhead">Blog</div>
      <div className="hero-container">
        <div className="first-hero-part">
          <div className="input-form">
            <input
              type="text"
              className="input-field"
              placeholder="Search..."
            />
            <button>
              <img src={blogSearchIcon} />
            </button>
          </div>
          <div className="category-nav">
            <div className="categories">Categories</div>
            <nav>
              <nav>
                <a href="#" className="nav-link">
                  Fashion
                </a>
                <a href="#" className="nav-link">
                  Style{" "}
                </a>
                <a href="#" className="nav-link">
                  Accessories
                </a>
                <a href="#" className="nav-link">
                  Season
                </a>
              </nav>
            </nav>
          </div>
        </div>
        <div className="hero-huge-part">
          <div className="second-hero-part">
            {posts.map((post) => (
              <PostsGrid
                key={`post -${post.imageSrc}`}
                imageSrc={post.imageSrc}
                date={post.date}
                subhead={post.subhead}
                title={post.title}
                linkTitle={post.linkTitle}
              />
            ))}
          </div>
          <div className="hero-last-part">
            <div className="buttons">
              <button className="first-button">1</button>
              <button className="next-button">2</button>
              <button className="next-button">{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
