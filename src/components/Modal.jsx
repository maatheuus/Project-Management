import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";

import Button from "./Button";

const Modal = forwardRef(function (_, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-600 mb-4">
        Oops ... looks like you forgot to enter a value.
      </p>
      <p className="text-stone-600 mb-4">
        Please make sure you provide a valid value for every input field.
      </p>
      <form method="dialog" className="mt-4 text-right">
        <Button text="Okay" />
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
