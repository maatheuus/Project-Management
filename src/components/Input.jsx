import { forwardRef, useImperativeHandle, useRef } from "react";

const className =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

const Input = forwardRef(function ({ title, type }, ref) {
  const valueText = useRef();
  const valueTextarea = useRef();
  const date = useRef();

  useImperativeHandle(ref, () => {
    return {
      text() {
        return valueText.current.value;
      },
      textarea() {
        return valueTextarea.current.value;
      },
      date() {
        return date.current.value;
      },
    };
  });

  return (
    <>
      <label className="text-sm font-bold uppercase text-stone-500">
        {title}
      </label>
      {type === "text" && (
        <input ref={valueText} type={type} className={className} />
      )}
      {type === "textarea" && (
        <textarea ref={valueTextarea} type={type} className={className} />
      )}
      {type === "date" && (
        <input ref={date} type={type} className={className} />
      )}
    </>
  );
});

export default Input;
