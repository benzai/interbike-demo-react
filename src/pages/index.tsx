import { client } from "@/constants/sanity/sanityClient"

import Layout from "@/views/layouts/Layout"
import HeaderSection from "@/views/sections/HeaderSection"
import FeatureSection from "@/views/sections/FeatureSection"
import ReviewsSection from "@/views/sections/ReviewsSection"
import ProductsSection from "@/views/sections/ProductsSection"
import DealsSection from "@/views/sections/DealsSection"
import GallerySection from "@/views/sections/GallerySection"

import type { IHomePage, IProduct } from "@/constants/types"

type Props = {
  homePageData: IHomePage
  products: IProduct[]
}

/// HeaderSection, FeatureSection and products has been replaced by CMS data from Sanity CMS.
/// See the query in getStaticProps().

export default function Home({ homePageData, products }: Props) {
  return (
    <Layout>
      <HeaderSection
        heading={homePageData.homeHeaderSection.heading}
        text={homePageData.homeHeaderSection.text}
        button={homePageData.homeHeaderSection.callToActionButton}
        coverImageUrl={homePageData.homeHeaderSection.coverImageUrl}
      />

      <div className="flex flex-col py-6 md:py-8 lg:py-10">
        {homePageData.featureSections.map(section => (
          <FeatureSection
            type="primary"
            heading={section.heading}
            text1={section.text1}
            text2={section.text2}
            button={{
              type: section.callToActionButton.type,
              size: "sm",
              title: section.callToActionButton.title,
              route: section.callToActionButton.route,
              showAccessoryIcon: section.callToActionButton.showAccessoryIcon,
            }}
            imageUrl={section.imageUrl}
            isReversed={section.isReversed}
          />
        ))}
      </div>

      <ReviewsSection
        type="secondary"
        heading="Alles voor een tevreden klant!"
        text1="Als klantgerechte ondernemer vinden wij het belangrijk om met de hoogst mogelijke service voor u klaar te staan, te weten wat er bij u speelt en hoe u onze hulp en advies ervaren hebt. Uw mening stellen wij erg op prijs en nemen wij dagelijks mee om onze dienstverlening nog aangenamer te maken."
        text2="Wil je weten wat anderen van onze service vinden? Kijk dan eens naar de beoordelingen van onze klanten."
        button={{
          type: "primary",
          size: "md",
          title: "Schrijf review",
          route: "/reviews/create",
          showAccessoryIcon: true,
        }}
        customerReview={{
          name: "Dhr. Bormotov",
          imageUrl: "https://benzai.github.io/staging-images/iaspect/profile-image.png",
          message:
            "Ik ben zeer tevreden over Interbikes en goed geholpen met juiste keuzes van mijn nieuwe elektrische fiets.",
        }}
      />

      <ProductsSection
        heading="Top 12 best verkochte fietsen"
        products={products}
        button={{
          type: "secondary",
          size: "sm",
          title: "Bekijk alle fietsen",
          route: "/store/products/bikes",
          showAccessoryIcon: true,
          frameless: true,
        }}
      />

      <DealsSection
        heading="Soldenactie Speed Pedelecs"
        text1="15% korting op al onze Gazelle en Specialized speed pedelecs zolang de voorraad strekt!"
        text2="OP = OP!"
        button={{
          type: "primary",
          size: "md",
          title: "Bekijk ons aanbod",
          route: "/store/products",
          showAccessoryIcon: true,
        }}
        imageUrl="https://benzai.github.io/staging-images/iaspect/iaspect-deal.png"
      />

      <GallerySection
        galleryImages={[
          {
            caption: "Winkel",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/iaspect-shop.png",
          },
          {
            caption: "Werkplaats",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/iaspect-gears.png",
          },
          {
            caption: "360° 3D Bodyscanning",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/iaspect-training.png",
          },
          {
            caption: "Actie",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/iaspect-deal.png",
          },
          {
            caption: "Home",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/istockphoto-113215945-612x612-edited.png",
          },
        ]}
        button={{
          type: "primary",
          title: "Kom langs in de winkel",
          route: "/contact",
          showAccessoryIcon: true,
        }}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const homePageData: IHomePage = await client.fetch(`// groq
    *[_type == "homePage" && _id == "homePage"][0] {
      homeHeaderSection {
        heading,
        text,
        "coverImageUrl": coverImageUrl.asset->url,
        callToActionButton
      },
      featureSections[] {
        heading,
        text1,
        text2,
        "imageUrl": imageUrl.asset->url,
        isReversed,
        callToActionButton
      }
    }
  `)

  const products: IProduct[] = await client.fetch(`// groq
    *[_type == "product"][0..5] {
      _id,
      brand,
      name,
      "slug": slug.current,
      "imageUrl": imageUrl.asset->url,
      price,
      salesPct,
      status
    }
  `)

  return {
    props: {
      homePageData,
      products,
    },
  }
}
