import { useEffect, useRef } from "react";

// if the user want to listen to the event in the bubbling or captureing phase we set the true to another name
export function useOutSideClick(handlerClose, listenCapturing = true) {
  //selecting element by using ref hook
  const ref = useRef();

  // detect click outside the modal window, to close the window on click outside.
  useEffect(
    function () {
      function handleClick(e) {
        /*ref.current is the white modal window, its a dom element and we can call
         contain method that turn true whenever the element contains the element that we pass in
         e.target is where the click happens*/
        if (ref.current && !ref.current.contains(e.target)) {
          handlerClose();
        }
      }

      /* true: the event will actually be handled in the capturing phase so as the event moves
      down the tree*/
      document.addEventListener("click", handleClick, listenCapturing);
      // remove the event listnener after the component unmount. returning a callback function
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handlerClose, listenCapturing]
  );
  return ref;
}
