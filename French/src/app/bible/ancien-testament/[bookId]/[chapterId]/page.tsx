'use client';

import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState, useRef } from 'react';
import { Book, Chapter, Verse } from '../../../../types/bible';
import { bibleBooks } from '../../../../lib/bibleData';

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const { bookId, chapterId } = params as { bookId: string; chapterId: string };

  const bookIndex = bibleBooks.findIndex(b => b.id === parseInt(bookId, 10));
  const book: Book | undefined = bibleBooks[bookIndex];
  const chapterNum = parseInt(chapterId, 10);
  const chapter: Chapter | undefined = book?.chapters.find(c => c.number === chapterNum);

  const [currentChapter, setCurrentChapter] = useState(chapterNum);
  const totalChapters = book?.chapters.length || 0;

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePrevChapter = () => {
    if (currentChapter > 1) {
      setCurrentChapter(currentChapter - 1);
      router.push(`/bible/ancien-testament/${bookId}/${currentChapter - 1}`);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const handleNextChapter = () => {
    if (currentChapter < totalChapters) {
      setCurrentChapter(currentChapter + 1);
      router.push(`/bible/ancien-testament/${bookId}/${currentChapter + 1}`);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const copyVerse = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!book || !chapter) {
    return <div>Chapitre non trouvé.</div>;
  }

  // Chemin audio dynamique avec abbrev existant
  const audioSrc = `/audio/${book.abbrev}_${chapter.number}-enhanced-v2.wav`; // Ex: /audio/Gn_1-enhanced-v2.wav
  console.log('Audio Src généré:', audioSrc);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Top Header Bar - Black background */}
      <header className="bg-black text-white px-4 py-2 flex justify-between items-center text-sm">
        <div className="font-bold">BIBLE CATHOLIQUE</div>
        <div className="flex space-x-4">
          <button className="hover:underline">Ancien Testament</button>
          <button className="hover:underline">Nouveau Testament</button>
          <button className="hover:underline">Contact</button>
          <button className="hover:underline">Faire un don</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        {/* Book and Chapter Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold uppercase tracking-wide mb-2">{book.name}</h1>
          <h2 className="text-xl font-semibold">CHAPITRE {chapter.number}</h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mb-4">
          <button
            onClick={handlePrevChapter}
            disabled={currentChapter === 1}
            className="mx-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNextChapter}
            disabled={currentChapter === totalChapters}
            className="mx-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Audio Player Bar */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg w-full max-w-md">
            <button
              onClick={handlePlay}
              className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              <Play size={20} />
            </button>
            <audio
              ref={audioRef}
              src={audioSrc}
              className="flex-1 mx-4"
              controls
              preload="metadata"
              onEnded={() => {
                // Optionnel: auto-next chapter après fin
              }}
            >
              Votre navigateur ne supporte pas audio HTML5.
              <a href={audioSrc} download>Télécharger audio</a>
            </audio>
          </div>
        </div>

        {/* Verses List */}
        <ol className="space-y-4 mb-8">
          {chapter.verses.map((verse: Verse) => (
            <li
              key={verse.number}
              className="flex cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded transition-colors"
              onClick={() => copyVerse(verse.text)}
            >
              <span className="font-bold text-sm mr-2 min-w-[2rem] text-right">{verse.number}</span>
              <span className="flex-1">{verse.text}</span>
            </li>
          ))}
        </ol>

        {/* Chapter Pagination Bottom */}
        <div className="flex justify-center items-center space-x-1 mb-6">
          <button
            onClick={handlePrevChapter}
            disabled={currentChapter === 1}
            className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            Précédent
          </button>
          {Array.from({ length: Math.min(totalChapters, 10) }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => {
                  setCurrentChapter(page);
                  router.push(`/bible/ancien-testament/${bookId}/${page}`);
                }}
                className={`px-2 py-1 text-sm rounded ${
                  page === currentChapter
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {page}
              </button>
            );
          })}
          {totalChapters > 10 && (
            <>
              <span>...</span>
              <button
                className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {totalChapters}
              </button>
            </>
          )}
          <button
            onClick={handleNextChapter}
            disabled={currentChapter === totalChapters}
            className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            Suivant →
          </button>
        </div>
      </main>

      {/* Bottom Navigation Bar - Black background */}
      <nav className="bg-black text-white px-4 py-2 flex justify-center space-x-8 text-sm">
        <button className="hover:underline">ANCIEN TESTAMENT</button>
        <button className="hover:underline">NOUVEAU TESTAMENT</button>
      </nav>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-4 py-4 text-sm border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="font-bold">BIBLE CATHOLIQUE</div>
          <div className="flex space-x-4">
            <button className="hover:underline">A propos</button>
            <button className="hover:underline">Livres</button>
            <button className="hover:underline">Autres</button>
          </div>
          <div className="flex space-x-4">
            <button className="hover:underline">Ancien Testament</button>
            <button className="hover:underline">Nouveau Testament</button>
            <button className="hover:underline">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
}