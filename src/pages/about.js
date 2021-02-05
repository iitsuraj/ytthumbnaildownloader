import Layout from "../components/layout";
import Head from "next/head";
import { NextSeo } from "next-seo";

const About = () => {
  const home = {
    title: "About - Youtube Thumbnail Downloader",
    description:
      "Save Youtube thumbnail in all Sizes and Quality. Learn more about how to download youtube thumbnail",
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
          <div className="my-10">
            <h1 className="font-semibold">Download YouTube Thumbnail</h1>
            <p>
              Is a Free online tool. With the help of it, you can download
              Youtube Video Thumbnails 🖼 in Different Sizes and Qualities.
            </p>
            <hr />
            <p>Supported image formates</p>
            <ol className="mx-2 list-decimal">
              <li>HD Image - 1280x720px</li>
              <li>SD Image - 640x480px</li>
              <li>HQ Image - 480x360px</li>
              <li>MQ Image - 320x180px</li>
              <li>Normal Image - 120x90px</li>
            </ol>
          </div>
          <div className="my-10">
            <h2 className="font-semibold">Note: </h2>
            <p>
              We never store your thumbnails on our server, Your entry is 100%
              private, we never track our user's searches.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
