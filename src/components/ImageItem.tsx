import React, { useState } from "react";
import { motion } from "framer-motion";
import Portal from "./Portal";
import Modal from "./Modal";
import Image from "./Image";
import QueryElement from "../helpers/QueryElement";

interface ImageItemProps {
  imageDesktop: string;
  imageMobile: string;
  description: string;
  author: string;
  url: string;
}

const ImageItem: React.FC<ImageItemProps> = ({
  imageDesktop,
  imageMobile,
  description,
  author,
  url
}) => {
  const [isOpen, toggleIsOpen] = useState<boolean>(false);
  const body = QueryElement.selector("body");
  const toggleModal = (): void => {
    toggleIsOpen(!isOpen);

    !isOpen
      ? body?.classList.add("isFixed")
      : body?.classList.remove("isFixed");
  };

  const image = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <React.Fragment>
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
            <motion.div variants={image}>
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
    </React.Fragment>
  );
};

export default ImageItem;
