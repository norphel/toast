import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";
import toast from "../../assets/toast.png";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  // console.log("ToastPlayground rendered!");
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  function submitToast(event) {
    event.preventDefault();

    if (message.trim() === "") {
      return;
    }
    const newToast = {
      id: Math.random(),
      message,
      variant,
    };
    setToasts([...toasts, newToast]);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  const removeToast = React.useCallback(
    function (id) {
      const remainingToasts = toasts.filter((toast) => toast.id !== id);
      setToasts(remainingToasts);
    },
    [toasts]
  );

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src={toast} />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} removeToast={removeToast} />

      <form
        onSubmit={(event) => submitToast(event)}
        className={styles.controlsWrapper}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((v) => (
              <label key={v} htmlFor={`variant-${v}`}>
                <input
                  id={`variant-${v}`}
                  type="radio"
                  name="variant"
                  value={v}
                  checked={variant === v}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
