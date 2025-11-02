'use client'; // Pour interactions (hover, links)

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
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
          <Link href="/ancien-testament" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Ancien Testament
          </Link>
          <Link href="/nouveau-testament" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Nouveau Testament
          </Link>
          <Link href="/contact" className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
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

      <main className="flex-grow px-4 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-800">Bible Catholique Française</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Découvrez la version liturgique officielle de l&apos;Église catholique.
        </p>
        <Image
          src="/images/Croix_montage_acceuil.jpg"
          alt="Croix sur montagne"
          width={800}
          height={400}
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        />
      </main>

      <section className="px-4 py-8 bg-gray-50 pb-170">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto place-items-center">
          <Link href="/ancien-testament">
            <Image 
              src="/images/buttons/Ancien_testament_bouton.png" 
              alt="Ancien Testament"
              width={250}
              height={120}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </Link>
          <Link href="/nouveau-testament">
            <Image 
              src="/images/buttons/Nouveau_testament_bouton.png" 
              alt="Nouveau Testament"
              width={250}
              height={120}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </Link>
          <Link href="/psaumes">
            <Image 
              src="/images/buttons/Psaumes_bouton.png" 
              alt="Psaumes"
              width={250}
              height={120}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-white px-4 py-8 fixed bottom-0 left-0 right-0 z-10">
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