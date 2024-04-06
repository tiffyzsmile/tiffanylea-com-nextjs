"use client";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import "./ImageGallery.scss";
import { getCdnImage } from "@/utils/aws";

type Props = {
  images: Array<string | null> | null;
  showFullscreenButton: boolean;
  showThumbnails: boolean;
  alt: string;
};

const ImageGallery = ({
  images,
  showFullscreenButton = false,
  showThumbnails = true,
  alt,
}: Props) => {
  const imageObjects = images.map((image) => {
    return {
      original: getCdnImage(image),
      originalAlt: alt,
      thumbnail: getCdnImage(image),
    };
  });
  return (
    <ReactImageGallery
      items={imageObjects}
      thumbnailPosition="top"
      showPlayButton={false}
      showThumbnails={showThumbnails}
      showFullscreenButton={showFullscreenButton}
      useBrowserFullscreen={false}
    />
  );
};

export default ImageGallery;
