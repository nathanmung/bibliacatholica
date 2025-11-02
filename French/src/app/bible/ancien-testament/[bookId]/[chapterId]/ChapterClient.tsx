'use client';  // Client pour useRouter/onClick

import { useRouter } from 'next/navigation';
import Link from 'next/link';  // Pour bouton Accueil
import type { Book, Chapter } from '../../../../types/bible';

interface ChapterClientProps {
  book: Book;
  chapter: Chapter;
  bookId: number;
  currentChapter: number;
  totalChapters: number;
}

export default function ChapterClient({ book, chapter, bookId, currentChapter, totalChapters }: ChapterClientProps) {
  const router = useRouter();

  const prevChapter = currentChapter - 1;
  const nextChapter = currentChapter + 1;

  const audioSrc = `/audio/${book.abbrev}_${currentChapter}.mp3`;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-between">
        {book.name} Chapitre {currentChapter}
        <div className="flex space-x-2">
          {prevChapter >= 1 && (
            <button 
              onClick={() => router.push(`/bible/${bookId}/${prevChapter}`)} 
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-1 text-sm font-medium shadow-md"
            >
              <span>←</span>
              <span>Précédent</span>
            </button>
          )}
          {nextChapter <= totalChapters && (
            <button 
              onClick={() => router.push(`/bible/${bookId}/${nextChapter}`)} 
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-1 text-sm font-medium shadow-md"
            >
              <span>Suivant</span>
              <span>→</span>
            </button>
          )}
        </div>
      </h1>

      {/* Player Audio bleu */}
      <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2">
          ▶️ Écouter
        </button>
        <audio controls className="w-full">
          <source src={audioSrc} type="audio/mpeg" />
          Votre navigateur ne supporte pas l udio.
        </audio>
      </div>

      <div className="space-y-4">
        {chapter.verses.map(verse => (
          <div key={verse.number} className="p-2 bg-gray-100 dark:bg-gray-800 rounded cursor-pointer" onClick={() => navigator.clipboard.writeText(verse.text)}>
            <span className="font-bold mr-2">{verse.number}.</span>{verse.text}
          </div>
        ))}
      </div>
    </div>
  );
}