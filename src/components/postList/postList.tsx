import { type } from "@testing-library/user-event/dist/type";
import { time } from "console";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { parseIsolatedEntityName } from "typescript";
import { PostCard } from "../postCard";
import { NavBar } from "../navBar";
import "./postList.css";
import { Button } from "../Button";
import { PageNavigator } from "../pageNavigator";
import { SortingBar } from "../sortingBar";
import { ThemContext } from "../../App";
type Posts = {
  size: string;
  cardName: string;
  text: string;
  img: string;
  time: string;
};

type PostListProps = {
  PostsFrom: any;
};

export const PostList = ({ PostsFrom }: PostListProps) => {
  const [posts, setPosts]: any[] = useState([]);
  const theme = useContext(ThemContext);
  useEffect(() => {
    setTimeout(() => {
      setPosts(PostsFrom);
    }, 1000);
  }, []);

  return (
    <div className={`postList postlist--${theme}`}>
      <NavBar />
      <div className="postListPage">
        <h1>Blog</h1>

        <SortingBar></SortingBar>
        <div className="horizondalLine"></div>
        <div className="postListBlog">
          <div className="postListLeftBlog">
            <div className="postListLeftUp">
              {
                posts.map(({ size, cardName, text, img, time }: Posts) => (
                  <PostCard
                    size={size}
                    cardName={cardName}
                    text={text}
                    img={img}
                    time={time}
                    className="internalFirstCard"
                  />
                ))[0]
              }
            </div>
            <div className="postListLeftDown">
              {posts
                .slice(1, 5)
                .map(({ size, cardName, text, img, time }: Posts) => (
                  <PostCard
                    size={size}
                    cardName={cardName}
                    text={text}
                    img={img}
                    time={time}
                    className="internalCard"
                  />
                ))}
            </div>
          </div>
          <div className="postListRigthBlog">
            {posts
              .slice(5, 11)
              .map(({ size, cardName, text, img, time }: Posts) => (
                <PostCard
                  size={size}
                  cardName={cardName}
                  text={text}
                  img={img}
                  time={time}
                  className="internalSmalCard"
                />
              ))}
          </div>
        </div>
        <PageNavigator></PageNavigator>
      </div>
    </div>
  );
};
