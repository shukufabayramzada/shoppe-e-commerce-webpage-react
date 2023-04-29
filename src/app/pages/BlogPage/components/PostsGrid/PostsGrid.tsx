import "./PostsGrid.scss";
interface PostsGridProps {
  imageSrc: string;
  date: string;
  subhead: string;
  title: string;
  linkTitle: string;
}

export const PostsGrid = (props: PostsGridProps) => {
  const { imageSrc, date, title, subhead, linkTitle } = props;
  const className = `box`;
  return (
    <div className={className}>
      <img src={imageSrc} />
      <div className="date">{date}</div>
      <div className="subhead">{subhead}</div>
      <div className="text">{title}</div>
      <nav>
        <a href="#" className="nav-link">
          {linkTitle}
        </a>
      </nav>
    </div>
  );
};
