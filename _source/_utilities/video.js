/* ----------------------------------------------------------------------------
creates a <video> element
---------------------------------------------------------------------------- */

function video(src, format = "mp4") {
  return `<video controls>
    <source src="https://static.danngalon.com/videos/${src}" type="video/${format}">
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="/assets/videos/${src}">link to the video</a> instead.
    </p>
  </video>`;
}

module.exports = video;
