import Layout from "../components/layout";
import Head from "next/head";
import { NextSeo } from "next-seo";

const About = () => {
  const home = {
    title: "About - Youtube Thumbnail Downloader 2021",
    description:
      "Save Youtube thumbnail with 2021 best thumbnail downloader. Learn more about how to download youtube thumbnail",
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
      <div className="container mx-auto">
        <div className="mt-10 mb-20">
          <h1 className="font-semibold">About Us</h1>
          <p>
            youtube thumbnail downloader tool created by suraj saini. You can
            read about suraj saini here{" "}
            <a href="https://itsuraj.com/about-us">
              Read more about suraj saini
            </a>
          </p>
          <h2 className="font-semibold">Write Us</h2>
          <p>
            Got user feedback? We’d love to hear from you, our users. For
            content related feedback, please provide to
            itsuraj.offical@gmail.com, details about the person who desires to
            give feedback along with the following: Full Name, Postal,
            residential address, Email address, Feedback or explanation in 500
            words.
          </p>
          <h2 className="font-semibold">Please Contact</h2>
          <p>
            For advertising and brand integration opportunities on one of
            India’s largest digital news publishing group.
            itsuraj.offical@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default About;
