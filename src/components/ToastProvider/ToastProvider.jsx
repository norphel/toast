import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addNewToast = React.useCallback(
    function (message, variant) {
      const newToast = {
        id: Math.random(),
        message,
        variant,
      };
      setToasts([...toasts, newToast]);
    },
    [toasts]
  );

  const removeToast = React.useCallback(
    function (id) {
      const remainingToasts = toasts.filter((toast) => toast.id !== id);
      setToasts(remainingToasts);
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={{ toasts, addNewToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
