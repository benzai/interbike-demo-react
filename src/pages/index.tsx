import { client } from "../constants/sanity/sanityClient"

import Layout from "@/views/layouts/Layout"
import HeaderSection from "@/views/sections/HeaderSection"
import FeatureSection from "@/views/sections/FeatureSection"
import ReviewsSection from "@/views/sections/ReviewsSection"
import ProductsSection from "@/views/sections/ProductsSection"
import DealsSection from "@/views/sections/DealsSection"
import GallerySection from "@/views/sections/GallerySection"

import type { IHomePage } from "@/constants/types"

type Props = {
  cmsData: IHomePage
}

/// HeaderSection and FeatureSection (2x) has been replaced by CMS data from Sanity CMS.
/// See the query in getStaticProps().

export default function Home({ cmsData }: Props) {
  return (
    <Layout>
      <HeaderSection
        heading={cmsData.homeHeaderSection.heading}
        text={cmsData.homeHeaderSection.text}
        coverImageUrl={cmsData.homeHeaderSection.coverImageUrl}
        buttonTo="/"
        buttonLabel="Bekijk ons aanbod"
      />

      <div className="flex flex-col py-6 md:py-8 lg:py-10">
        {cmsData.featureSections.map(section => (
          <FeatureSection
            type="primary"
            heading={section.heading}
            text1={section.text1}
            text2={section.text2}
            button={{
              type: "primary",
              size: "sm",
              title: section.buttonTitle,
              route: section.buttonRoute,
              showAccessoryIcon: true,
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
        products={[
          {
            id: 1,
            brand: "Gazelle",
            name: "Gazelle Esprit C 2021",
            category: "bike",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/gazelle.jpeg",
            price: 549,
            productUrl: "/",
            status: "inStock",
          },
          {
            id: 2,
            brand: "Lekker",
            name: "Jordaan Urban Ebike",
            category: "ebike",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/lekker.jpeg",
            price: 2495,
            productUrl: "/",
            status: "inStock",
          },
          {
            id: 3,
            brand: "Helliot",
            name: "Bicicleta Fixie Tribeca 18",
            category: "",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/helliot.jpeg",
            price: 229,
            salePct: 8,
            productUrl: "/",
            status: "soldOut",
          },
          {
            id: 4,
            brand: "Cortina",
            name: "Cortina U1 RN 2023 Heren",
            category: "",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/cortina.jpeg",
            price: 459,
            productUrl: "/",
            status: "soldOut",
          },
          {
            id: 5,
            brand: "Helliot",
            name: "Bicicleta Fixie Tribeca 24",
            category: "",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/helliot.jpeg",
            price: 349,
            salePct: 8,
            productUrl: "/",
            status: "inStock",
          },
          {
            id: 6,
            brand: "Lekker",
            name: "Jordaan Urban Ebike Max",
            category: "ebike",
            imageUrl: "https://benzai.github.io/staging-images/iaspect/lekker.jpeg",
            price: 1999,
            productUrl: "/",
            status: "inStock",
          },
        ]}
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
  const cmsDataArray: IHomePage[] = await client.fetch(`// groq
   *[_type == "homePage" && _id == "homePage"] {
      _id,
      homeHeaderSection {
        heading,
        text,
        "coverImageUrl": coverImageUrl.asset->url
      },
      featureSections[] {
        heading,
        text1,
        text2,
        "imageUrl": imageUrl.asset->url,
        isReversed,
        buttonTitle,
        buttonRoute
      }
    }
  `)

  return {
    props: {
      cmsData: cmsDataArray[0],
    },
  }
}
