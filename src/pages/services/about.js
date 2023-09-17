import React, { useEffect, useState } from 'react';

export default function AboutPage() {
  const [lines] = useState([
    "Natasha Muluswela, born in 1995, is a self-taught, Zimbabwean-born visual artist based in the United Kingdom.< She graduated in 2017 with a degree in French and Spanish from Nottingham Trent University.",
    "Natasha's intricately detailed paintings probe and examine how clothing is policed on the bodies of minorities. She is inspired by the Black Lives Matter movement, personal experiences, and the tragic killings of young,< unarmed, Black men wearing hoodies. Natasha delves into the politicization, criminalization, and the demonization of hoodies and tracksuits< on the bodies of Black people.",
    "Another central facet of Natasha's work focuses on body positivity, exploring what it means to be deemed as beautiful< in our society. She explores skin conditions such as vitiligo, stretch marks, and ageism. While deemed as imperfections to some or outright shameful to others, Natasha highlights how these unique markings are< what makes us human.",
    "As of recently, Natasha's work has taken more of a conceptual standpoint by integrating moving images,< imagination, and fine art. She has always had a keen interest in how these three things can intertwine together to tell a different narrative. She uses symbolism of faceless figures to challenge the viewers’ preconceived perceptions and ideologies of what it means,< to occupy space as a migrant. Natasha sheds light on the deep-rooted realities of racism, discrimination, and marginalization in a post-colonial< oppressive system. Challenging her views on not only Africa's political past and present but its potential and future through her art."
  ]);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [revealedLines, setRevealedLines] = useState([]);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timer = setTimeout(() => {
        setRevealedLines((prevLines) => [...prevLines, lines[currentLineIndex]]);
        setCurrentLineIndex((prevIndex) => prevIndex + 1);
      }, 3000); // Adjust the timing (in milliseconds) between lines

      return () => clearTimeout(timer);
    } else {
      setIsTypingFinished(true);
    }
  }, [currentLineIndex, lines]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>About Me</h1>
      <img
        src="/https://static.wixstatic.com/media/f4e8fd_609cd1c6dc2f4cffad2553d0676dc21f~mv2.png"
        width="500"
        height="375"
      />
      {revealedLines.map((line, index) => (
        <div key={index} className="typewriter-text">
          {/* Insert paragraphs after commas and dots */}
          {line.split(/[<.]/).map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
        </div>
      ))}
      {isTypingFinished && (
        <p>
          {/* Link to PDF Resume */}
          <a href="/image/resume.pdf" target="_blank" rel="noopener noreferrer">
            Click for Resume (PDF)
          </a>
        </p>
      )}
    </div>
  );
}
