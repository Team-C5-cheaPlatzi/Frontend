// import react
import React from 'react';
//import react-loading-skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ArticleSkeleton = () => {
  return (
    <SkeletonTheme color="#36404e" highlightColor="#2E2E32">
      <article className="post">
        <section className="post__content">
          <div className="post__content--headline">
            <h1>
              <Skeleton width={800} height={80}/>
              <Skeleton width={800} height={50}/>
            </h1>
          </div>
          <Skeleton width={800} height={400}/>
          <div className="post__content--text">
            <p>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </p>
            <br/>
            <p>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </p>
            <br/>
            <p>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </p>
          </div>
        </section>
      </article>
    </SkeletonTheme>
  )
};

export default ArticleSkeleton;
