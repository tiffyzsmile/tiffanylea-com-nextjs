"use client";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

type Image = {
  thumbnail: string;
  original: string;
};

type Props = {
  images: Image[];
  showFullscreenButton: boolean;
  showThumbnails: boolean;
};

const ImageGallery = ({
  images,
  showFullscreenButton = false,
  showThumbnails = true,
}: Props) => {
  return (
    <ReactImageGallery
      items={images}
      thumbnailPosition="top"
      showPlayButton={false}
      showThumbnails={showThumbnails}
      showFullscreenButton={showFullscreenButton}
      useBrowserFullscreen={false}
    />
  );
};

export default ImageGallery;
