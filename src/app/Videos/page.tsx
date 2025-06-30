
export default function VideosPage() {
  return (
    <section className="videos-container">
      <h1 className="text-2xl font-bold mb-4">My Videos</h1>
      <p className="mb-6">Watch my latest videos and tutorials below. Click on a video to play!</p>
      <div className="video-list grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="video-item">
          <iframe width="100%" height="220" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video 1" allowFullScreen></iframe>
          <p className="mt-2">Video Title 1</p>
        </div>
        <div className="video-item">
          <iframe width="100%" height="220" src="https://www.youtube.com/embed/3JZ_D3ELwOQ" title="Video 2" allowFullScreen></iframe>
          <p className="mt-2">Video Title 2</p>
        </div>
      </div>
    </section>
  );
}
