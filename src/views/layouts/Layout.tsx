import NavBar from "@/views/panels/NavBar"
import Footer from "@/views/panels/Footer"

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative bg-theme-surface-100">
      <NavBar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  )
}
