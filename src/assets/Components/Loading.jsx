import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = ({ onFinish }) => {

  const [show, setShow] = useState(true);
  const [startExit, setStartExit] = useState(false);

  const displayDuration = 2500; 
  const exitAnimationDuration = 600;
  const totalDuration = displayDuration + exitAnimationDuration; 

  useEffect(() => {
    // Start the exit animation after displayDuration
    const exitTimer = setTimeout(() => {
      setStartExit(true);
    }, displayDuration);

    // Call onFinish after the exit animation completes
    const finishTimer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, totalDuration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, displayDuration, totalDuration]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={
            startExit
              ? { opacity: 0 }
              : { opacity: 1 }
          }
          exit={{ opacity: 0 }}
          transition={{ 
            duration: exitAnimationDuration / 1000, 
            ease: "easeInOut" 
          }}
          className="fixed bg-black inset-0 z-50 flex items-center justify-center"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src="/fingerLoading.gif"
              alt="Loading..."
              className="w-auto invert-100 object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;