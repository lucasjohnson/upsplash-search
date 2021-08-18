import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import ImageItem from "./ImageItem";
import Loader from "./Loader";

interface ImageItemsProps {
  handleFetchImages: () => void;
  images: any;
  isLoading: boolean;
}

const ImageItems: React.FC<ImageItemsProps> = ({
  images,
  handleFetchImages,
  isLoading
}) => {
  const imageItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={handleFetchImages}
      hasMore={true}
      loader={<Loader isLoading={isLoading} />}
    >
      <React.Fragment>
        <motion.ul
          className="image-items"
          variants={imageItems}
          initial="hidden"
          animate="show"
        >
          {images.map((image: any, index: number) => (
            <ImageItem image={image} index={index} key={index} />
          ))}
        </motion.ul>
      </React.Fragment>
    </InfiniteScroll>
  );
};

export default ImageItems;
