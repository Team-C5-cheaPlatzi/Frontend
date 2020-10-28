// import react
import React, { useState, useEffect } from 'react';
// import card skeleton
import CardStructure from './CardStructure/index.jsx';
// import card skeleton
import CardSkeleton from './CardSkeleton/index.jsx';
// import styles
import './styles.styl';

const Card = ({ image, title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <CardSkeleton />
    )
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <CardStructure image={image} title={title}/>
    );
  }
};

export default Card;
