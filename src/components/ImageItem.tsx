import React, { useState } from "react";
import { motion } from "framer-motion";
import Portal from "./Portal";
import Modal from "./Modal";
import Image from "./Image";
import LockViewport from "../helpers/LockViewport";

interface ImageItemProps {
  image: any;
  index: number;
}

const ImageItem: React.FC<ImageItemProps> = ({ image, index }) => {
  const [isOpen, toggleIsOpen] = useState<boolean>(false);

  const toggleModal = (): void => {
    toggleIsOpen(!isOpen);
    LockViewport.modal(isOpen);
  };

  const motionItem = {
    hidden: { opacity: 0, y: "10px" },
    show: { opacity: 1, y: 0 }
  };

  const motionImage = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  const { alt_description: description } = image;
  const { regular: imageDesktop, small: imageMobile } = image.urls;
  const { name: author } = image.user;
  const { html: url } = image.links;

  return (
    <motion.li className="image-item" key={index} variants={motionItem}>
      <button
        className="image-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleModal}
      >
        <Image
          imageDesktop={imageDesktop}
          imageMobile={imageMobile}
          description={description}
          author={author}
          url={url}
        />
      </button>
      {isOpen && (
        <Portal>
          <Modal isOpen={isOpen} toggleModal={toggleModal}>
            <motion.div variants={motionImage}>
              <Image
                imageDesktop={imageDesktop}
                imageMobile={imageMobile}
                description={description}
                author={author}
              />
            </motion.div>
          </Modal>
        </Portal>
      )}
    </motion.li>
  );
};

export default ImageItem;
