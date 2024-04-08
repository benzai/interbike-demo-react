import Link from "next/link"
import MiniReviewWidget from "@/views/blocks/MiniReviewWidget"
import FooterItem from "@/views/core/FooterItem"

type Props = {}

export default function Footer({}: Props) {
  const shopSection = (
    <div className="flex flex-col">
      <h3 className="font-bold text-sm text-theme-text-alternate-500 py-2">Onze winkel</h3>
      <FooterItem item={{ type: "info", value: "i-Aspect" }} />
      <FooterItem item={{ type: "info", value: "Predikherenstraat 31" }} />
      <FooterItem item={{ type: "info", value: "3512 TM Utrecht" }} />
      <FooterItem item={{ type: "keyValue", key: "Tel", value: "030 232 42 80", route: "tel:0302324280" }} />
      <FooterItem
        item={{ type: "keyValue", key: "Email", value: "info@i-aspect.com", route: "mailto:info@i-aspect.com" }}
      />
      <FooterItem item={{ type: "keyValue", key: "KvK", value: "123456789", route: "https://kvk.nl" }} />
      <FooterItem item={{ type: "keyValue", key: "BTW", value: "123456789B01", route: "https://kvk.nl" }} />
    </div>
  )

  const menuSection = (
    <div className="flex flex-col">
      <h3 className="font-bold text-sm text-theme-text-alternate-500 py-2">Service</h3>
      <FooterItem item={{ type: "link", title: "Fietsen", route: "/store/products/bikes" }} />
      <FooterItem item={{ type: "link", title: "Elektrische fietsen", route: "/store/products/ebikes" }} />
      <FooterItem item={{ type: "link", title: "Webshop", route: "/store" }} />
      <FooterItem item={{ type: "link", title: "Onze merken", route: "/information/brands" }} />
      <FooterItem item={{ type: "link", title: "Onze winkels", route: "/information/stores" }} />
      <FooterItem item={{ type: "link", title: "Contact", route: "/contact" }} />
    </div>
  )

  const openingTimesSection = (
    <div className="flex flex-col">
      <h3 className="font-bold text-sm text-theme-text-alternate-500 py-2">Openingstijden</h3>
      <FooterItem item={{ type: "table", key: "Maandag", value: "gesloten" }} />
      <FooterItem item={{ type: "table", key: "Dinsdag", value: "9:00 - 18:00" }} />
      <FooterItem item={{ type: "table", key: "Woensdag", value: "9:00 - 18:00" }} />
      <FooterItem item={{ type: "table", key: "Donderdag", value: "9:00 - 18:00" }} />
      <FooterItem item={{ type: "table", key: "Vrijdag", value: "9:00 - 21:00" }} />
      <FooterItem item={{ type: "table", key: "Zaterdag", value: "9:00 - 18:00" }} />
      <FooterItem item={{ type: "table", key: "Zondag", value: "gesloten" }} />
    </div>
  )

  const partnersSection = (
    <div className="flex flex-col gap-2 order-first lg:order-last">
      <Link href="/">
        <img
          className="w-auto h-16"
          src="https://benzai.github.io/staging-images/iaspect/logo-interbikes@2x.png"
          alt="InterBikes"
        />
      </Link>

      <MiniReviewWidget count={21} />
    </div>
  )

  const socialButtons = (
    <div className="flex justify-end md:justify-start gap-4 py-1">
      <Link href="https://facebook.com">
        <img className="w-6 h-6" src="https://benzai.github.io/staging-images/iaspect/facebook.svg" alt="Facebook" />
      </Link>
      <Link href="https://instagram.com">
        <img className="w-6 h-6" src="https://benzai.github.io/staging-images/iaspect/instagram.svg" alt="Instagram" />
      </Link>
      <Link href="https://twitter.com">
        <img className="w-6 h-6" src="https://benzai.github.io/staging-images/iaspect/twitter.svg" alt="X" />
      </Link>
    </div>
  )

  const footerLinks = (
    <div className="flex flex-col items-end">
      <div className="flex items-center gap-1.5">
        <FooterItem item={{ type: "link", title: "Algemene voorwaarden", route: "/terms" }} />
        <span className="text-xs text-theme-brand-primary-700 opacity-50">|</span>
        <FooterItem item={{ type: "link", title: "Retouren", route: "/information/returns" }} />
        <span className="text-xs text-theme-brand-primary-700 opacity-50">|</span>
        <FooterItem item={{ type: "link", title: "Privacy", route: "/privacy" }} />
      </div>

      <div className="flex items-center gap-1.5">
        <FooterItem item={{ type: "info", value: "Crossretail 4" }} />
        <span className="text-xs text-theme-brand-primary-700 opacity-50">-</span>
        <FooterItem item={{ type: "info", value: "Alle rechten voorbehouden" }} />
      </div>

      <div className="flex items-center gap-1.5">
        <FooterItem
          item={{ type: "keyValue", key: "Website realisatie", value: "i-Aspect", route: "https://i-aspect.com" }}
        />
      </div>
    </div>
  )

  return (
    <footer className="px-5 py-4 md:py-6 lg:py-10 bg-theme-surface-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 py-2">
          {shopSection}
          {menuSection}
          {openingTimesSection}
          {partnersSection}
        </div>

        <div className="flex justify-end gap-5 py-2">
          <div className="flex gap-4 py-1">
            <img
              className="w-auto h-10"
              src="https://benzai.github.io/staging-images/iaspect/logo-ideal.png"
              alt="iDeal"
            />

            <img
              className="w-auto h-10"
              src="https://benzai.github.io/staging-images/iaspect/logo-bancontact.png"
              alt="Bancontact"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 py-2 border-solid border-t border-theme-brand-primary-700-60">
          {socialButtons}
          {footerLinks}
        </div>
      </div>
    </footer>
  )
}
