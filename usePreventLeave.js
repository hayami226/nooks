export const usePreventLeave = () => {
    const listenr = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
  
    const enablePrevent = () => {
      window.addEventListener("beforeunload", listenr);
    };
  
    const disablePrevent = () => {
      window.removeEventListener("beforeunload", listenr);
    };
  
    return { enablePrevent, disablePrevent };
  };