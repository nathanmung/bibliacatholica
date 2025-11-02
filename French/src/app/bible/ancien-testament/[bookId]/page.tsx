'use client'; // Pour useState

import { useState } from 'react';
import Link from 'next/link';
import { bibleBooks } from '../../../lib/bibleData';  // Import bibleBooks pour fixé undefined
import type { Book, Chapter, Verse } from '../../../types/bible';  // Import types pour b, ch, v

export default function BookPage({ params }: { params: { bookId: string } }) {
  const bookId = parseInt(params.bookId);

  const book = bibleBooks.find((b: Book) => b.id === bookId);  // Type Book pour b

  const [query, setQuery] = useState('');  // useState AVANT l'if (maintenant unconditional)

  if (!book) return <div>Livre non trouvé (ID {bookId}).</div>;  // Early return APRÈS useState

  const filteredChapters = book.chapters.filter((ch: Chapter) =>  // Type Chapter pour ch
    ch.verses.some((v: Verse) => v.text.toLowerCase().includes(query.toLowerCase()))  // Type Verse pour v
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{book.name}</h1>
      <input
        type="text"
        placeholder="Rechercher dans chapitres..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4 dark:bg-gray-800"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredChapters.map((chapter: Chapter) => (  // Type Chapter pour chapter
          <Link key={chapter.number} href={`/bible/${bookId}/${chapter.number}`} className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-center">
            Chapitre {chapter.number}
          </Link>
        ))}
      </div>
    </div>
  );
}