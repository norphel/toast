import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import useEscapeKey from "../../hooks/useEscapeKey";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  useEscapeKey();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
