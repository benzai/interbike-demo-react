import cx from "classnames"
import Link from "next/link"
import Icon from "@/views/core/Icon"
import MenuButton from "@/views/core/MenuButton"
import IconButton from "@/views/core/IconButton"
import SearchBar from "@/views/core/SearchBar"
import MiniReviewWidget from "@/views/blocks/MiniReviewWidget"

type Props = {}

export default function NavBar({}: Props) {
  const uspItem = (title: string) => {
    return (
      <li className="flex items-center gap-1">
        <Icon iconName="check" styleOverride="text-theme-status-positive" />
        <span className="text-2xs text-theme-text-alternate-300">{title}</span>
      </li>
    )
  }

  const subBar = (
    <div className="flex px-2 md:px-4 lg:px-5 py-1 bg-theme-surface-700">
      <div className="flex flex-1 justify-between items-center">
        <div className="block md:hidden">
          <IconButton type="primary" size="md" to="/" iconName="bars" />
        </div>

        <ul className="hidden md:flex gap-4">
          {uspItem("Twee vestigingen in Leuven en Tienen")}
          {uspItem("Officieel Shimano Service Center")}
          {uspItem("E-Bike Specialist")}
          {uspItem("Professionele Eigen Werkplaats")}
        </ul>
      </div>

      <div className="flex items-center">
        <ul className="flex gap-1">
          <MenuButton type="secondary" to="/register" title="Register" />
          <MenuButton type="secondary" to="/login" title="Inloggen" />
        </ul>
      </div>
    </div>
  )

  const mainBar = (
    <div className="flex gap-3 md:gap-4 lg:gap-5 px-2 md:px-4 lg:px-5 py-1">
      <div className="lg:w-48">
        <Link href="/">
          <img
            className="w-auto h-12 md:h-16"
            src="https://benzai.github.io/staging-images/iaspect/logo-interbikes@2x.png"
            alt="InterBikes"
          />
        </Link>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <SearchBar />
      </div>

      <div className="hidden lg:flex justify-center items-center">
        <MiniReviewWidget count={21} />
      </div>

      <div className="flex justify-center items-center">
        <div className="hidden md:flex">
          <IconButton type="tertiaire" size="md" to="/settings" iconName="sliders" />
          <IconButton type="tertiaire" size="md" to="/favorites" iconName="heart" />
        </div>
        <div className="flex">
          <IconButton type="tertiaire" size="md" to="/cart" iconName="cart" />
        </div>
      </div>
    </div>
  )

  const menuBar = (
    <nav className="hidden md:flex justify-center px-2 md:px-4 lg:px-5 py-1">
      <ul className="flex gap-2 lg:gap-4">
        <MenuButton to="/store/products/bikes" title="Fietsen" showAccessoryIcon={true} />
        <MenuButton to="/information/financing" title="Financiering" showAccessoryIcon={true} />
        <MenuButton to="/information/bodyscanning" title="360° 3D Bodyscanning" />
        <MenuButton to="/shops" title="Winkels" />
        <MenuButton to="/information/workspace" title="Werkplaats" showAccessoryIcon={true} />
        <MenuButton to="/store" title="Webshop" showAccessoryIcon={true} />
        <MenuButton to="/news" title="Nieuws" showAccessoryIcon={true} />
        <MenuButton to="/contact" title="Contact" />
      </ul>
    </nav>
  )

  return (
    <header className="flex flex-col bg-theme-surface-900 border-solid border-b border-theme-brand-primary-700-60">
      {subBar}
      {mainBar}
      {menuBar}
    </header>
  )
}
