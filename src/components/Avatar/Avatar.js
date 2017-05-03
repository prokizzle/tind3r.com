// @flow

import './Avatar.scss';

import React from 'react';

type PropsType = {
  url: string,
  width?: number,
  height?: number,
};

const Avatar = ({ url, width, height }: PropsType) => {
  const style = {
    width, height,
  };

  return (
    <div className="avatar" style={width && height && style}>
      <img src={url} className="avatar__image" />
    </div>
  );
};

export default Avatar;
