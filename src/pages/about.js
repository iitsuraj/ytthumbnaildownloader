import Layout from "../components/layout";
import Head from "next/head";
import { NextSeo } from "next-seo";

const About = () => {
  const home = {
    title: "About - Youtube Thumbnail Downloader",
    description:
      "Save any Youtube Video thumbnail Image in all Sizes and Quality. You can download Youtube Video (HD, HQ, 1080p, 4K etc) Thumbnail in Just 1 Click for FREE. Youtube Thumbnail can be downloaded for PC, MAC, Android MObile Phone, iPhones and all Other Devices. You can also view HD Thumbnails of Youtube Video if You Want.",
    url: "https://ytthumbnaildownloader.itsuraj.com/about/",
    image: "https://ytthumbnaildownloader.itsuraj.com/social-1200x800.png",
  };
  return (
    <Layout>
      <NextSeo
        title={home.title}
        description={home.description}
        canonical={home.url}
        openGraph={{
          title: home.title,
          description: home.description,
          url: home.url,
          images: [
            {
              url: home.image,
            },
          ],
        }}
      />
      <Head>
        <meta name="twitter:title" content={home.title} />
        <meta name="twitter:description" content={home.description} />
        <meta name="twitter:image" content={home.image} />
      </Head>
      <h1>About</h1>
    </Layout>
  );
};
export default About;
