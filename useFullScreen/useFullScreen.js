export const useFullscreen = (callback) => {
    const element = useRef();
  
    const triggerFull = () => {
      if (element.current) {
        const { current } = element;
        current.requestFullscreen();
        if (callback && typeof onFullS === "Function") {
          callback(true);
        }
      }
    };
  
    const exitFull = () => {
      const checkFullScreen = document.fullscreenElement;
      if (checkFullScreen !== null) {
        document.exitFullscreen();
        if (callback && typeof onFullS === "Function") {
          callback(false);
        }
      }
    };
  
    return { element, triggerFull, exitFull };
  };