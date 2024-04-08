import cx from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngleDown,
  faArrowLeft,
  faArrowRight,
  faPlus,
  faMinus,
  faCheck,
  faSearch,
  faShoppingCart,
  faHeart,
  faSliders,
  faBars,
} from "@fortawesome/free-solid-svg-icons"
import type { ILineIcon } from "@/constants/types"

type Props = {
  size?: "xs" | "sm"
  iconName: ILineIcon
  styleOverride?: string
}

export default function Icon({ size = "xs", iconName, styleOverride }: Props) {
  const icons = {
    angleLeft: faAngleLeft,
    angleRight: faAngleRight,
    angleUp: faAngleUp,
    angleDown: faAngleDown,
    arrowLeft: faArrowLeft,
    arrowRight: faArrowRight,
    plus: faPlus,
    minus: faMinus,
    check: faCheck,
    search: faSearch,
    cart: faShoppingCart,
    heart: faHeart,
    sliders: faSliders,
    bars: faBars,
  }

  const sizes = {
    xs: "w-4 h-4",
    sm: "w-5 h-5",
  }

  return (
    <div className={cx("flex justify-center items-center", sizes[size], styleOverride)}>
      <FontAwesomeIcon icon={icons[iconName]} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
