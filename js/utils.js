/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

/**
 * Preloads a video from the provided source.
 * @function
 * @param {string} videoSrc - URL of the video file to preload.
 * @returns {Promise} - Resolves with the video element when the video is fully loaded.
 */
const preloadVideo = (videoSrc) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = videoSrc;

        // You may want to handle additional events such as 'onerror' or 'oncanplaythrough'
        video.addEventListener('loadeddata', () => {
            resolve(video);
        });

        video.load(); // Start loading the video

        // If the video fails to load, reject the promise
        video.onerror = () => {
            reject(new Error('Failed to load video'));
        };
    });
};

// Exporting utility functions for use in other modules.
export {
    preloadImages,
    preloadVideo,
};