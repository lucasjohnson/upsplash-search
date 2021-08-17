import React, { useState } from "react";
import { motion } from "framer-motion";
import Portal from "./Portal";
import Modal from "./Modal";
import Image from "./Image";
import QueryElement from "../helpers/QueryElement";

interface ImageItemProps {
  image: any;
  key: number;
}

const ImageItem: React.FC<ImageItemProps> = ({ image, key }) => {
  const [isOpen, toggleIsOpen] = useState<boolean>(false);
  const body = QueryElement.selector("body");

  const toggleModal = (): void => {
    toggleIsOpen(!isOpen);

    !isOpen
      ? body?.classList.add("isFixed")
      : body?.classList.remove("isFixed");
  };

  const portalImage = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  const imageItem = {
    hidden: { opacity: 0, y: "10px" },
    show: { opacity: 1, y: 0 }
  };

  const { alt_description: description } = image;
  const { regular: imageDesktop, small: imageMobile } = image.urls;
  const { name: author } = image.user;
  const { html: url } = image.links;

  console.log(image.urls);

  return (
    <motion.li className="image-item" key={key} variants={imageItem}>
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
            <motion.div variants={portalImage}>
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
