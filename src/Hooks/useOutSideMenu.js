import { useRef } from "react"
import { useEffect } from "react"

const useOutSideMenu = (menuState, setMenuState) => {
  const refMenu = useRef();
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuState && refMenu.current && !refMenu.current.contains(e.target)) {
        setMenuState(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menuState, setMenuState]);
  return [refMenu];
}

export default useOutSideMenu;