import React from "react";

export default function AboutPage() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Artwork</h1>
        <video
          src="https://video.wixstatic.com/video/f4e8fd_105bbf1c27f94a4f89599c51ce75cd9e/1080p/mp4/file.mp4"
          width="1000"
          height="750"
        />
        <video
          src="/image/nata2.mp4"
          width="750"
          height="1000"
        />
       <p>
        <a href="/Archive/work.html" target="_blank" rel="noopener noreferrer">
          Click for Resume (PDF)
        </a>
      </p>
    </div>
  );
}
