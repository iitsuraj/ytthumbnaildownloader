import Layout from "../components/layout";
import Card from "../components/card";
import Modal from "../components/modal";
import AppInfo from "../components/appInfo";
import { lastDownloadedStorage, addANewDownload } from "../lib";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useState, useRef, useEffect } from "react";

const home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [lastDownloads, setLastDownloads] = useState([]);

  const checkUrl = () => {
    var res = url.match(
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
    );
    if (res == undefined) {
      alert("Please check the URL you have entered");
      return 0;
    }
    setVideoId(res[1]);
    setIsOpen(true);
    addANewDownload(res[1]);
  };

  const closeModal = () => {
    setLastDownloads([...new Set([...lastDownloads, videoId])]);
    setIsOpen(false);
    setVideoId("");
    setUrl("");
  };

  const setOldVideoId = (id) => {
    setVideoId(id);
    setIsOpen(true);
  };

  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
    const data = lastDownloadedStorage();
    if (data && Array.isArray(data)) {
      setLastDownloads(data);
    }
  }, []);

  const home = {
    title: "Youtube Thumbnail Downloader For PC / Mobile",
    description:
      "Save any Youtube Video thumbnail Image in all Sizes and Quality. You can download Youtube Video (HD, HQ, 1080p, 4K etc) Thumbnail in Just 1 Click for FREE. Youtube Thumbnail can be downloaded for PC, MAC, Android MObile Phone, iPhones and all Other Devices. You can also view HD Thumbnails of Youtube Video if You Want.",
    url: "https://ytthumbnaildownloader.itsuraj.com/",
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
      <nav className="bg-secondary sticky top-0">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-16">
            <input
              type="text"
              aria-label="Enter the youtube URL here"
              className="h-10 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
              placeholder="Enter the youtube URL here"
              autoFocus
              type="text"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  checkUrl();
                }
              }}
              ref={inputElement}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 focus:outline-none h-10 px-2 bg-white"
              onClick={checkUrl}
            >
              Download
            </button>
          </div>
        </div>
        <div className={"h-8 bg-gray-200 text-gray-900 flex"}>
          <h3 className={"my-auto px-4"}>Your recent downloads: </h3>
        </div>
      </nav>
      <div className={"container mx-auto mt-4 mb-16 px-4"}>
        {lastDownloads && Array.isArray(lastDownloads) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {lastDownloads.reverse().map((videoId) => (
              <Card
                videoId={videoId}
                key={videoId}
                setVideoId={setOldVideoId}
              />
            ))}
          </div>
        ) : null}
        <AppInfo />
      </div>
      {isOpen ? <Modal videoId={videoId} onClose={closeModal} /> : null}
      <div
        className={`fixed w-full h-screen top-0 left-0 transition-all bg-gray-500 bg-opacity-50 blur ${
          isOpen ? "animated fadeIn visible opacity-100" : "hidden opacity-0"
        }`}
        onClick={closeModal}
      ></div>
    </Layout>
  );
};
export default home;
