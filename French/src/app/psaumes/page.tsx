'use client';

import Link from 'next/link';
import Image from 'next/image';
import { bibleBooks } from '../lib/bibleData'; // Import dynamique (ajuste chemin si besoin ; ajoute Psaumes id:23 dans bibleData.ts)

export default function PsaumesPage() {
  // Trouve le livre Psaumes (ID 23 dans Ancien Testament ; chapters: 150 psaumes)
  // Pour MVP, utilise placeholder si bibleData.ts n'a pas encore les 150 ; ajoute-les comme templates
  const psalmsBook = bibleBooks.find(b => b.id === 23); // ID standard pour Psaumes
  const psalmsChapters = psalmsBook?.chapters || []; // Chapters vides OK pour templates (ajoute via parse)

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
          <Link href="/ancien-testament" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
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

      {/* Titre + Description (Adapté pour Psaumes) */}
      <section className="px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-800">Livre des Psaumes</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Le Livre des Psaumes, cœur priant de l&apos;Ancien Testament, regroupe 150 cantiques inspirés par Dieu, attribués en grande partie au roi David. Il exprime les joies, les peines et les louanges du peuple de Dieu, et est central dans la liturgie chrétienne, chanté dans la prière quotidienne.
        </p>
      </section>

      {/* Grille Psaumes (Images + Numéro + Description courte ; Liens vers structure URL) */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {psalmsChapters.slice(0, 24).map((chapter) => (  // Limite à 24 pour MVP (ajuste pour pagination ou full 150)
            <div key={chapter.number} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <Image
                src={`/images/books/ps-${chapter.number.toString().padStart(3, '0')}.jpg`} // Dynamique : ex: ps-001.jpg pour Psaume 1 (ajoute images ou placeholder)
                alt={`Psaume ${chapter.number}`}
                width={200}
                height={150}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-800">Psaume {chapter.number}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {/* Description dynamique : Placeholder basé sur numéro ; ajoute champ 'description' dans Chapter si besoin */}
                  {chapter.number === 1 ? "Bienheureux l'homme qui ne marche pas selon le conseil des méchants..." :
                   chapter.number === 23 ? "Le Seigneur est mon berger : je ne manque de rien..." :
                   chapter.number === 51 ? "Aie pitié de moi, ô Dieu, dans ta grande miséricorde..." :
                   `Psaume ${chapter.number} : Prière de louange et de supplication à compléter.`}
                </p>
                <Link 
                  href={`/bible/ancien-testament/23/${chapter.number}`} // ← Nouvelle structure URL cohérente (ID 23 pour Psaumes)
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Lire le psaume →
                </Link>
              </div>
            </div>
          ))}
        </div>
        {psalmsChapters.length < 24 && (
          <div className="text-center text-gray-500 mt-8">
            <p></p>
          </div>
        )}
        {psalmsChapters.length >= 24 && (
          <div className="text-center mt-8">
            <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">Voir tous les 150 psaumes →</Link> {/* Pagination future */}
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