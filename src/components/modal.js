import { useState, useEffect } from "react";
const Modal = ({ videoId, onClose }) => {
  const [isHd, setIsHd] = useState(false);
  const [isSd, setIsSd] = useState(false);
  const isMaxResAvailable = (videoId) => {
    var img = new Image();
    img.src = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
    img.onload = function () {
      if (this.width < 1280) {
        setIsHd(false);
      } else {
        setIsHd(true);
      }
    };
    img.onerror = function () {
      setIsHd(false);
    };
  };
  const isSDAvailalbe = (videoId) => {
    var img = new Image();
    img.src = "https://img.youtube.com/vi/" + videoId + "/sddefault.jpg";
    img.onload = function () {
      if (this.width === 120 && this.height === 90) {
        setIsSd(false);
      } else {
        setIsSd(true);
      }
    };
    img.onerror = function () {
      setIsSd(false);
    };
  };

  useEffect(() => {
    isMaxResAvailable(videoId);
    isSDAvailalbe(videoId);
  }, []);
  const download = (url, name) => {
    var element = document.createElement("a");
    var file = new Blob([`${url}`], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = name;
    element.click();
  };

  let backgroundUrl;
  if (isHd) {
    backgroundUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  } else {
    if (isSd) {
      backgroundUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    } else {
      backgroundUrl = `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    }
  }

  return (
    <div
      className={`w-full h-screen md:h-auto max-w-screen-sm fixed overflow-hidden z-50 modal`}
    >
      <div className={`animated fadeInUp rounded-lg rounded-t-none bg-white `}>
        <div className="relative">
          <div
            className="h-48 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${backgroundUrl})`,
            }}
          ></div>
        </div>
        <div className="md:px-10 py-10">
          <div className="text-base">
            <div className="py-4 flex w-full text-center">
              <div className={"w-1/2 sm:w-1/3"}>
                <p>HD Image</p>
              </div>
              <div className={"w-1/3 hidden sm:block"}>1280x720</div>
              <div className={"w-1/2 sm:w-1/3"}>
                <button
                  onClick={() =>
                    download(
                      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                      "HD-1200x720.jpg"
                    )
                  }
                  disabled={!isHd}
                  className={`bg-gray-100 hover:bg-gray-300 text-gray-darkest focus:outline-none font-bold py-2 px-4 rounded inline-flex items-center ${
                    !isHd ? "disabled:opacity-50" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
            <div className="py-4 flex w-full text-center">
              <div className={"w-1/2 sm:w-1/3"}>
                <p>SD Image</p>
              </div>
              <div className={"w-1/3 hidden sm:block"}>640x480</div>
              <div className={"w-1/2 sm:w-1/3"}>
                <button
                  onClick={() =>
                    download(
                      `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,

                      "SD-640x480.jpg"
                    )
                  }
                  disabled={!isSd}
                  className={`bg-gray-100 hover:bg-gray-300 text-gray-darkest focus:outline-none font-bold py-2 px-4 rounded inline-flex items-center ${
                    !isHd ? "disabled:opacity-50" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
            <div className="py-4 flex w-full text-center">
              <div className={"w-1/2 sm:w-1/3"}>
                <p>Normal Image</p>
              </div>
              <div className={"w-1/3 hidden sm:block"}>480x360</div>
              <div className={"w-1/2 sm:w-1/3"}>
                <button
                  onClick={() =>
                    download(
                      `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,

                      "480x360.jpg"
                    )
                  }
                  className="bg-gray-100 hover:bg-gray-300 text-gray-darkest focus:outline-none font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
            <div className="py-4 flex w-full text-center">
              <div className={"w-1/2 sm:w-1/3"}>
                <p>Normal Image</p>
              </div>
              <div className={"w-1/3 hidden sm:block"}>320x180</div>
              <div className={"w-1/2 sm:w-1/3"}>
                <button
                  onClick={() =>
                    download(
                      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,

                      "320x180.jpg"
                    )
                  }
                  className="bg-gray-100 hover:bg-gray-300 text-gray-darkest focus:outline-none font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
            <div className="py-4 flex w-full text-center">
              <div className={"w-1/2 sm:w-1/3"}>
                <p>Normal Image</p>
              </div>
              <div className={"w-1/3 hidden sm:block"}>120x90</div>
              <div className={"w-1/2 sm:w-1/3"}>
                <button
                  onClick={() =>
                    download(
                      `https://img.youtube.com/vi/${videoId}/default.jpg`,

                      "120x90.jpg"
                    )
                  }
                  className="bg-gray-100 hover:bg-gray-300 text-gray-darkest focus:outline-none font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 focus:outline-none text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

const isMaxResAvailable = (videoId) => {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.src = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
    img.onload = function () {
      if (this.width < 1280) {
        resolve(false);
      } else {
        resolve(true);
      }
    };
    img.onerror = function () {
      resolve(false);
    };
  });
};
const isSDAvailalbe = (videoId) => {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.src = "https://img.youtube.com/vi/" + videoId + "/sddefault.jpg";
    img.onload = function () {
      if (this.width === 120 && this.height === 90) {
        resolve(false);
      } else {
        resolve(true);
      }
    };
    img.onerror = function () {
      resolve(false);
    };
  });
};
