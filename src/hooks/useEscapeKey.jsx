import React from "react";
import { ToastContext } from "../components/ToastProvider";

function useEscapeKey() {
  const { dismissAllToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        dismissAllToasts();
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export default useEscapeKey;
