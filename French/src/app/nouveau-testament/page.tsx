'use client';

import Link from 'next/link';
import Image from 'next/image';
import { bibleBooks } from '../lib/bibleData'; // Import dynamique pour scaler (ajoute les livres NT dans bibleData.ts)

export default function NouveauTestamentPage() {
  // Filtre dynamique pour Nouveau Testament (27 livres : Évangiles, Actes, Épîtres, Apocalypse)
  // Pour MVP, utilise placeholders si bibleData.ts n'a pas encore tout ; ajoute-les comme templates (ex: id 47-73)
  const nouveauBooks = bibleBooks
    .filter(b => b.testament === 'Nouveau')
    .slice(0, 3); // Garde 1-3 comme templates pour modifier/ajouter (Matthieu, Marc, Luc par ex.)

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header (Même que Home) */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <Image
            src="/images/logos/Biblia_Catholica_Logo.jpg"
            alt="Biblia Catholica Logo"
            width={50}
            height={50}
            className="rounded-lg shadow-sm"
          />
          <Image
            src="/images/logos/Biblia_Catholica_Name.png"
            alt="Biblia Catholica Name"
            width={180}
            height={40}
            className="rounded-lg"
          />
        </div>
        <nav className="flex flex-col md:flex-row gap-4 mb-2 md:mb-0">
          <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Accueil
          </Link>
          <Link href="/ancien" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Ancien Testament
          </Link>
          <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Contact
          </Link>
        </nav>
        <Link href="/don" className="flex">
          <Image
            src="/images/buttons/Faire_don_bouton.png"
            alt="Faire un don"
            width={120}
            height={40}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
        </Link>
      </header>

      {/* Titre + Description (Adapté pour Nouveau Testament) */}
      <section className="px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-800">Nouveau Testament</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Le Nouveau Testament, seconde partie de la Bible catholique, regroupe 27 livres inspirés par Dieu. Il révèle l&apos;accomplissement des promesses de l&apos;Ancien Testament à travers la vie, la mort et la résurrection de Jésus-Christ, et la mission des Apôtres pour répandre l&apos;Évangile au monde entier.
        </p>
      </section>

      {/* Grille Livres (Images + Titre + Description, Comme Figma ; Liens vers nouvelle structure URL) */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {nouveauBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <Image
                src={`/images/books/${book.abbrev.toLowerCase()}.jpg`} // Dynamique : ex: /images/books/mt.jpg pour Matthieu (ajoute images)
                alt={book.name}
                width={200}
                height={150}
                className="w-full h-32 object-cover"
                //fallback={<div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">Image à ajouter</div>} // Fallback si image manquante
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{book.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {/* Description dynamique : Ajoute un champ 'description' dans Book interface si besoin ; pour MVP, placeholder basé sur nom */}
                  {book.name.includes('Matthieu') ? "Évangile de Matthieu, récit de la vie de Jésus pour les Juifs, avec les Béatitudes et le Notre Père." :
                   book.name.includes('Marc') ? "Évangile de Marc, le plus court, axé sur les actes de Jésus en Galilée, pour les païens." :
                   book.name.includes('Luc') ? "Évangile de Luc, pour les Grecs, avec paraboles comme le Bon Samaritain et la Nativité." :
                   "Description du livre à compléter dans bibleData.ts."}
                </p>
                <Link 
                  href={`/bible/nouveau-testament/${book.id}/1`} // ← Nouvelle structure URL cohérente
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Lire le livre →
                </Link>
              </div>
            </div>
          ))}
        </div>
        {nouveauBooks.length < 3 && (
          <div className="text-center text-gray-500 mt-8">
            <p></p>
          </div>
        )}
      </section>

      {/* Footer (Même que Home) */}
      <footer className="bg-gray-800 text-white px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="https://facebook.com">
              <Image src="/images/icons/FB_icon.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com">
              <Image src="/images/icons/Insta_icon.png" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com">
              <Image src="/images/icons/Lkd_icon.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://youtube.com">
              <Image src="/images/icons/YT_icon.png" alt="YouTube" width={24} height={24} />
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
            <Link href="/qui-sommes-nous" className="text-sm hover:text-yellow-300 transition-colors">
              Qui sommes-nous ?
            </Link>
            <Link href="/ressources" className="text-sm hover:text-yellow-300 transition-colors">
              Ressources
            </Link>
            <Link href="/contact" className="text-sm hover:text-yellow-300 transition-colors">
              Contact
            </Link>
            <Link href="/don" className="text-sm hover:text-yellow-300 transition-colors">
              Faire un don
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}