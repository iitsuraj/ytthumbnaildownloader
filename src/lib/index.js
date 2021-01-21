export const lastDownloadedStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("@last-downloaded");
    if (value) {
      const data = JSON.parse(value);
      return data.data;
    }
    return undefined;
  }
  return undefined;
};

export const addANewDownload = (videoId) => {
  if (typeof window !== "undefined") {
    let lastDownloaded = lastDownloadedStorage();
    if (lastDownloaded) {
      lastDownloaded = lastDownloaded || [];
      lastDownloaded.unshift(videoId);
      lastDownloaded = [...new Set(lastDownloaded)];
      localStorage.setItem(
        "@last-downloaded",
        JSON.stringify({ data: lastDownloaded })
      );
    } else {
      localStorage.setItem(
        "@last-downloaded",
        JSON.stringify({ data: [videoId] })
      );
    }
  }
  return false;
};
