import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./QnaItem.css";

const QnaItem = ({ item }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="qna-item">
      <div className="qna__question">
        <span>{item.question}</span>
        <span onClick={() => setIsExpand((prev) => !prev)}>
          <i className="fas fa-plus"></i>
        </span>
      </div>
      <AnimatePresence initial={false}>
        {isExpand && (
          <motion.div
            key="contents"
            className="qna__answer"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              expanded: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              className="answer-contents"
              variants={{
                collapsed: {
                  scale: 0.8
                },
                open: {
                  scale: 1
                }
              }}
              transition={{
                duration: 0.8
              }}
            >
              {item.answer.map((aItem, idx) => (
                <p key={idx}>{aItem}</p>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QnaItem;
