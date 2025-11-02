import Link from 'next/link';
import Image from 'next/image';

const ancienBooks = [
  {
    id: 1,
    name: "Livre de la Genèse",
    image: "/images/books/genese.jpg",
    description: "Dans le livre de la Genèse, Dieu crée le monde en six jours et pose les fondements de l'Alliance avec Abraham, père des croyants, et son peuple élu."
  },
  {
    id: 2,
    name: "Livre de l'Exode",
    image: "/images/books/exode.jpg",
    description: "Livre de l'Exode, des Hébreux délivrés de l'esclavage en Égypte par Moïse, traversent la mer Rouge et reçoivent les Dix Commandements sur le mont Sinaï."
  },
  {
    id: 3,
    name: "Livre du Lévitique",
    image: "/images/books/levitique.jpg",
    description: "Livre du Lévitique, de la sainteté du peuple élu : sacrifices, lois de pureté et de sainteté, pour être un peuple saint comme le Seigneur."
  },
  {
    id: 4,
    name: "Livre des Nombres",
    image: "/images/books/nombres.jpg",
    description: "Livre des Nombres, du pèlerinage des Israélites dans le désert, entre recensements et épreuves, vers la Terre Promise."
  },
  {
    id: 5,
    name: "Livre du Deutéronome",
    image: "/images/books/deuteronome.jpg",
    description: "Livre du Deutéronome, de Moïse rappelant l'Alliance et la Loi à son peuple avant d'entrer en Terre Promise."
  },
  {
    id: 6,
    name: "Livre de Josué",
    image: "/images/books/josue.jpg",
    description: "Livre de Josué, de la conquête de la Terre Promise par Josué, successeur de Moïse, avec les victoires miraculeuses."
  },
  {
    id: 7,
    name: "Livre des Juges",
    image: "/images/books/juges.jpg",
    description: "Livre des Juges, du cycle de délivrance des Israélites par les juges envoyés par Dieu, comme Débora et Samson."
  },

  {
    id: 8,
    name: "Livre de Ruth",
    image: "/images/books/ruth.jpg",
    description: "Dans le Livre de Ruth, une idylle émouvante illustre la loyauté et la providence divine au sein d'une famille moabite intégrée à Israël, préfigurant la lignée davidique. Attribué à un auteur anonyme post-exilique vers le Ve siècle av. J.-C., il célèbre l'hesed fidèle : « Où tu iras, j'irai ; où tu demeureras, je demeurerai ; ton peuple sera mon peuple, et ton Dieu sera mon Dieu » (Rt 1,16). Ce récit touchant invite à la générosité et à la rédemption, semence d'espérance pour les étrangers et les veuves, où la grâce de Dieu tisse des liens indissolubles au-delà des tribus."
  },

  {
    id: 9,
    name: "Premier Livre de Samuel",
    image: "/images/books/1_samuel.jpg",
    description: "Dans le Premier Livre de Samuel, la transition de la théocratie à la monarchie est marquée par la vocation de Samuel et l'ascension de Saül puis de David, illustrant la souveraineté de Dieu sur ses élus. Attribué à Samuel et ses disciples vers le VIe siècle av. J.-C., il relate : « Le Seigneur a cherché un homme selon son cœur » (1 S 13,14). Ce récit épique invite à l'obéissance royale et à la confiance en Dieu, semence d'espérance pour Israël, où l'onction divine forge des leaders au milieu des épreuves."
  },

  {
    id: 10,
    name: "Deuxième Livre de Samuel",
    image: "/images/books/2_samuel.jpg",
    description: "Dans le Deuxième Livre de Samuel, l'ascension et les épreuves de David comme roi d'Israël mettent en lumière la miséricorde de Dieu face aux péchés humains, de la danse devant l'Arche à l'adultère avec Bethsabée. Attribué à un disciple de Samuel vers le VIe siècle av. J.-C., il affirme : « Tu es mon fils ; moi, aujourd'hui, je t'ai engendré » (2 S 7,14). Ce récit royal invite à la repentance et à l'alliance renouvelée, semence d'espérance pour la dynastie davidique, où la grâce divine relève les tombés."
  },

  {
    id: 11,
    name: "Premier Livre des Rois",
    image: "/images/books/1_rois.jpg",
    description: "Dans le Premier Livre des Rois, la splendeur du règne de Salomon et la fidélité d'Élie face à l'idolâtrie illustrent la sagesse divine et le jugement de Dieu sur Israël. Attribué à un prophète anonyme vers le VIe siècle av. J.-C., il proclame : « Dieu donna à Salomon sagesse et intelligence en abondance » (1 R 4,29). Ce récit historique invite à la quête de la justice et à la lutte contre l'apostasie, semence d'espérance pour le royaume divisé, où la prière sur le Carmel ravive la flamme du Seigneur."
  },

  {
    id: 12,
    name: "Deuxième Livre des Rois",
    image: "/images/books/2_rois.jpg",
    description: "Dans le Deuxième Livre des Rois, le ministère prophétique d'Élie et Élisée, ainsi que la chute du royaume du Nord, soulignent le jugement divin sur l'idolâtrie et la fidélité des prophètes. Attribué à un disciple d'Élie vers le VIe siècle av. J.-C., il relate : « Un char de feu et des chevaux de feu les séparèrent. Et Élie monta au ciel dans la tempête » (2 R 2,11). Ce récit prophétique invite à la persévérance dans la foi au milieu des crises royales, semence d'espérance pour l'exil, où l'Esprit de Dieu ravive les cœurs."
  },

  {
    id: 13,
    name: "Premier Livre des Chroniques",
    image: "/images/books/1_chroniques.jpg",
    description: "Dans le Premier Livre des Chroniques, les généalogies d'Israël et les préparatifs de David pour le Temple soulignent l'héritage sacré du peuple élu et la piété du roi psalmiste. Attribué à un lévite post-exilique vers le IVe siècle av. J.-C., il affirme : « Cherche à connaître le Dieu de ton père et sers-le de tout ton cœur et de toute ton âme » (1 Ch 28,9). Ce récit généalogique invite à la fidélité ancestrale et à la louange, semence d'espérance pour la restauration, où les listes vivantes tissent la mémoire divine."
  },

  {
    id: 14,
    name: "Deuxième Livre des Chroniques",
    image: "/images/books/2_chroniques.jpg",
    description: "Dans le Deuxième Livre des Chroniques, les règnes de Salomon et des rois de Juda mettent en lumière la fidélité au culte du Temple et les réformes des bons rois comme Josias, face aux idolâtries récurrentes. Attribué à un lévite post-exilique vers le IVe siècle av. J.-C., il proclame : « Si mon peuple s'humilie, prie et cherche ma face, je pardonnerai leur péché et guérirai leur pays » (2 Ch 7,14). Ce récit réformateur invite à la sanctification collective et à la prière, semence d'espérance pour l'exil, où la gloire du Temple ravive l'alliance éternelle."
  },

  {
    id: 15,
    name: "Livre d’Esdras",
    image: "/images/books/esdras.jpg",
    description: "Dans le Livre d'Esdras, le retour d'exil et la reconstruction du Temple sous la guidance du scribe Esdras illustrent la restauration de l'alliance par la Parole de Dieu et la réforme morale d'Israël. Attribué à Esdras lui-même vers le Ve siècle av. J.-C., il relate : « Esdras ouvrit le livre aux yeux de toute l'assemblée, des hommes, des femmes et de tous les enfants capables de comprendre » (Esd 8,2). Ce récit de renaissance invite à la redécouverte de la Loi et à la pureté cultuelle, semence d'espérance pour les déportés, où la lecture publique ravive l'identité juive."
  },

  {
    id: 16,
    name: "Livre de Néhémie",
    image: "/images/books/nehemie.jpg",
    description: "Dans le Livre de Néhémie, la reconstruction des murailles de Jérusalem sous la direction du gouverneur Néhémie symbolise la renaissance d'Israël post-exil, unie à la réforme d'Esdras pour la fidélité à la Loi. Attribué à Néhémie lui-même vers le Ve siècle av. J.-C., il relate : « Debout ! Bénissez le Seigneur votre Dieu, depuis toujours et pour toujours. » (Ne 9,5). Ce récit de résilience invite à l'action collective et à la louange, semence d'espérance pour les restaurés, où les pierres relevées fortifient l'identité covenantale."
  },

  {
    id: 17,
    name: "Livre de Tobie",
    image: "/images/books/tobie.jpg",
    description: "Dans le Livre de Tobie, un père pieux en exil et son fils Tobias, guidés par l'ange Raphaël déguisé, affrontent un voyage périlleux semé d'épreuves, de guérisons miraculeuses et d'un mariage providentiel, semence d'espérance dans la fidélité à la loi, la charité fraternelle et la confiance en la providence divine."
  },

  {
    id: 18,
    name: "Livre de Judith",
    image: "/images/books/judith.jpg",
    description: "Dans le Livre de Judith, une veuve pieuse et rusée, mue par la prière et la confiance en Dieu, s'infiltre au cœur de l'armée assyrienne pour séduire et décapiter le général Holofernes, libérant Israël de la menace d'invasion, semence de courage féminin, de ruse divine et de victoire par la foi sur la tyrannie."
  },

  {
    id: 19,
    name: "Livre d'Esther",
    image: "/images/books/esther.jpg",
    description: "Dans le Livre d'Esther, une jeune juive orpheline, élevée par son cousin Mardochée, devient reine de Perse par la providence divine et, au péril de sa vie, intercède auprès du roi Assuérus pour déjouer le complot d'Haman contre son peuple, semence de courage sacrificiel, d'inversion des destinées et de joie purim éternelle."
  },

  {
    id: 20,
    name: "Premier Livre des Maccabées",
    image: "/images/books/1_maccabees.jpg",
    description: "Dans le Premier Livre des Maccabées, la révolte des prêtres hasmonéens, initiée par Mattathias et menée par son fils Judas le Marteau, défie l'empire séleucide d'Antiochus IV, reconquiert Jérusalem, purifie le Temple souillé d'idoles et restaure la souveraineté juive, semence de fidélité à la Torah, de triomphe sur la persécution et de joie hanoukkite immortelle."
  },

  {
    id: 21,
    name: "Deuxième Livre des Maccabées",
    image: "/images/books/2_maccabees.jpg",
    description: "Dans le Deuxième Livre des Maccabées, une chronique théologique des persécutions séleucides, des visions célestes aux martyres héroïques des sept frères et leur mère torturés pour fidélité à la Loi, inspire la résistance de Judas Maccabée, purifiant le Temple par miracles et prières, semence de martyre rédempteur, de résurrection promise et de victoire divine sur l'oppression païenne."
  },

  {
    id: 22,
    name: "Livre de Job",
    image: "/images/books/job.jpg",
    description: "Dans le Livre de Job, un juste intègre, dépouillé de tout—richesses, enfants, santé—par l'adversaire avec permission divine, endure le deuil et la plaie purulente, puis affronte les discours péremptoires de ses amis sur le châtiment mérité, jusqu'à l'irruption de Yahvé depuis la tempête qui révèle les abîmes de la création, semence d'humilité cosmique, de révolte pieuse et de double restauration par la grâce insondable."
  },

  {
    id: 23,
    name: "Livre des Psaumes",
    image: "/images/books/psaumes.jpg",
    description: "Dans le Livre des Psaumes, recueil vibrant de prières, hymnes et supplications forgées par David le psalmiste et les voix du peuple en exil ou en triomphe, oscillant du cri de détresse à l'extase cosmique, anime la liturgie du Temple et l'âme d'Israël, semence de louange universelle, de repentance ardente et d'espérance messianique éternelle."
  },

  {
    id: 24,
    name: "Livre des Proverbes",
    image: "/images/books/proverbes.jpg",
    description: "Dans le Livre des Proverbes, recueil sapiential attribué à Salomon le sage, distille en sentences ciselées et images vives les voies de la Sagesse personnifiée appelant à la porte de la ville, opposée à la Folie aux lèvres mielleuses, forgeant la crainte de Yahvé en école de vertu pour le roi et le simple, semence de discernement quotidien, de justice proverbiale et d'harmonie cosmique par la Torah incarnée."
  },

  {
    id: 25,
    name: "Livre de l'Ecclésiaste",
    image: "/images/books/ecclesiaste.jpg",
    description: "Dans le Livre de l'Ecclésiaste, le Qohelet, fils de David, scrute la vanité des choses sous le soleil—richesse évanouie, sagesse amère, plaisirs éphémères—dans un cycle éternel où l'homme ne saisit point l'œuvre de Dieu, l'exhortant à savourer le pain quotidien et à révérer le Créateur comme unique profit, semence de sagesse désabusée, de joie mesurée et d'espérance au-delà du temps fugace."
  },

  {
    id: 26,
    name: "Cantique des Cantiques",
    image: "/images/books/cantique.jpg",
    description: "Dans le Cantique des Cantiques, dialogue enflammé d'amour entre l'Épouse shulammite aux seins de gazelle et l'Époux salomonien aux vignes gardées, traversant jardins de nard, vergers de grenades et nuits où l'amour est sceau sur le cœur, exaltant la beauté du corps aimé et l'union mystique, semence d'extase charnelle, d'allégorie sponsale et de louange nuptiale éternelle."
  },

  {
    id: 27,
    name: "Livre de la Sagesse",
    image: "/images/books/sagesse.jpg",
    description: "Dans le Livre de la Sagesse, hymne sapiential attribué à Salomon le roi, personnifie la Sagesse divine comme souffle éternel de Dieu, artisan cosmique aux sept colonnes et épouse vigilante des justes, plus désirable que le sceptre ou la pourpre, exhortant à fuir l'iniquité des impies et à embrasser l'immortalité par la vertu, semence de quête lumineuse, de justice royale et d'espérance immortelle au banquet des saints."
  },

  {
    id: 28,
    name: "Livre de l'Ecclésiastique",
    image: "/images/books/ecclesiastique.jpg",
    description: "Dans le Livre de l'Ecclésiastique, Jésus ben Sirac, scribe de Jérusalem, compile en proverbes ciselés et hymnes vibrants la sagesse ancestrale puisée à la source de la Loi, exaltant la crainte de Yahvé comme principe de science, la femme avisée comme joie du foyer et l'aumône comme trésor inaltérable, semence de vertu quotidienne, de mémoire des ancêtres et d'espérance en la justice divine éternelle."
  },

  {
    id: 29,
    name: "Livre d'Isaïe",
    image: "/images/books/isaie.jpg",
    description: "Dans le Livre d'Isaïe, le prophète visionnaire du VIIIe siècle dénonce l'idolâtrie de Juda et l'injustice sociale, annonce le jugement divin sur les nations orgueilleuses et l'exil babylonien, mais proclame aussi la consolation de Sion, le Serviteur souffrant et la venue du Prince de la Paix, semence de repentance ardente, de salut messianique et d'espérance eschatologique éternelle."
  },

  {
    id: 30,
    name: "Livre de Jérémie",
    image: "/images/books/jeremie.jpg",
    description: "Dans le Livre de Jérémie, le prophète au cœur brisé, fils de Hilkija, clame contre l'infidélité de Juda et l'imminence de l'exil babylonien, jette le vase brisé en signe de ruine, mais murmure aussi la promesse d'une nouvelle alliance gravée dans les cœurs, semence de lamentation prophétique, de conversion ardente et d'espérance restaurée éternelle."
  },

  {
    id: 31,
    name: "Livre des Lamentations",
    image: "/images/books/lamentations.jpg",
    description: "Dans le Livre des Lamentations, acrostiches funèbres attribués à Jérémie le pleureur, Jérusalem la veuve en haillons gémit sur son tas de fumier, princes affamés errant comme cerfs, filles violées, murailles profanées par le bélier, mais au cœur des sept hymnes de deuil, un cri d'espérance : les entrailles de Yahvé se souviennent, semence de lamentation viscérale, de repentance collective et de fidélité restaurée éternelle."
  },

  {
    id: 32,
    name: "Livre de Baruch",
    image: "/images/books/baruch.jpg",
    description: "Dans le Livre de Baruch, le scribe fidèle de Jérémie confesse les péchés d'Israël en exil babylonien, exhorte à la sagesse divine contre les idoles vaines, et proclame la gloire de Dieu et la restauration de Sion, semence de repentance exilique, de quête sapientielle et d'espérance messianique éternelle."
  },

  {
    id: 33,
    name: "Livre d'Ézéchiel",
    image: "/images/books/ezechiel.jpg",
    description: "Dans le Livre d'Ézéchiel, le prêtre-prophète exilé au bord du Kebar contemple la gloire de Yahvé sur son char-vortex aux roues ailées, dénonce les abominations du Temple souillé et l'idolâtrie des anciens, mais prédit aussi les ossements desséchés revivifiés par l'Esprit, les eaux jaillissant du sanctuaire pour verdir le désert, semence de vision apocalyptique, de jugement purificateur et d'espérance résurrectionnelle éternelle."
  },

  {
    id: 34,
    name: "Livre de Daniel",
    image: "/images/books/daniel.jpg",
    description: "Dans le Livre de Daniel, jeune exilé à Babylone, interprète des songes nébuleux de Nabuchodonosor—colosse d'argile et de fer—survit aux flammes de la fournaise et aux lions affamés par fidélité à Yahvé, tandis que les visions apocalyptiques du vieillard au bord du fleuve dépeignent les bêtes hybrides des empires et le Fils de l'homme sur les nuées, semence de résistance courtoise, de jugement eschatologique et d'espérance messianique éternelle."
  },

  {
    id: 35,
    name: "Livre d'Osée",
    image: "/images/books/osee.jpg",
    description: "Dans le Livre d'Osée, le prophète épouse Gomer l'infidèle par commandement divin, allégorie poignante de l'amour jaloux de Yahvé pour Israël l'adultère, alternant oracles de jugement sur les autels sanglants d'Israël et promesses de fiançailles éternelles dans le désert fleuri, semence de miséricorde blessée, de repentance aride et d'espérance nuptiale éternelle."
  },

  {
    id: 36,
    name: "Livre de Joël",
    image: "/images/books/joel.jpg",
    description: "Dans le Livre de Joël, le prophète sonne la trompette d'alarme contre l'invasion dévorante des sauterelles, ombre du Jour de Yahvé, exhorte à la repentance collective au Temple et au jeûne, promet la restauration des champs et l'effusion de l'Esprit sur toute chair, semence de lamentation agricole, de conversion urgente et d'espérance pentecôtale éternelle."
  },

  {
    id: 37,
    name: "Livre d'Amos",
    image: "/images/books/amos.jpg",
    description: "Dans le Livre d'Amos, le berger de Tekoa, prophète tonnant contre les autels sanglants de Béthel et les injustices criantes de Samarie—riches repus de veaux d'engraissement tandis que les pauvres foulés gisent à la porte—, déploie visions de sauterelles voraces, de feu dévorant et de corbeille de fruits mûrs pour l'exil imminent, mais murmure aussi la promesse d'un David restauré, semence de justice sociale, de jugement oraculaire et d'espérance restaurée éternelle."
  },

  {
    id: 38,
    name: "Livre d'Abdias",
    image: "/images/books/abdias.jpg",
    description: "Dans le Livre d'Abdias, oracle fulgurant contre Édom le frère perfide, traître aux portes de Sion lors de la chute de Jérusalem, dont les monts orgueilleux et les trésors enfouis seront ravagés par le feu divin et les oiseaux de proie, tandis qu'Israël recouvrira son domaine des nations, semence de vengeance fraternelle, de jugement géopolitique et d'espérance restauratrice éternelle."
  },

  {
    id: 39,
    name: "Livre de Jonas",
    image: "/images/books/jonas.jpg",
    description: "Dans le Livre de Jonas, le prophète fuyant Ninive sur un navire ballotté par la tempête divine est englouti par le grand poisson aux entrailles nauséeuses pendant trois jours de prière, puis crache sur le rivage pour clamer le jeûne aux Ninivites repentants, semence de miséricorde cosmique, de conversion païenne et d'espérance salvatrice éternelle."
  },

  {
    id: 40,
    name: "Livre de Michée",
    image: "/images/books/michee.jpg",
    description: "Dans le Livre de Michée, le prophète de Moréshet tonne contre les chefs corrompus de Samarie et Jérusalem qui dévorent le peuple comme des lions, prédit la ruine des hauts lieux et l'exil, mais esquisse aussi la venue du souverain de Bethléem qui paîtra son troupeau en paix, semence de justice rurale, de jugement social et d'espérance messianique éternelle."
  },

  {
    id: 41,
    name: "Livre de Nahum",
    image: "/images/books/nahum.jpg",
    description: "Dans le Livre de Nahum, oracle triomphal contre Ninive la sanglante, lionne des nations, dont les chars tourbillonnent en vain sous la crue du Tigre et les flammes divines, tandis qu'Israël respire la vengeance accomplie et la joie de Juda, semence de fureur apocalyptique, de chute impériale et d'espérance libératrice éternelle."
  },

  {
    id: 42,
    name: "Livre d'Habacuc",
    image: "/images/books/habacuc.jpg",
    description: "Dans le Livre d'Habacuc, le prophète interroge Yahvé sur la violence des Chaldéens qu'il suscite comme vent furieux, veille sur sa tour en attendant la réponse gravée sur tablette : le juste vivra par sa foi. Et entonne un psaume de tremblement cosmique où le figuier stérile n'altère point l'allégresse, semence de plainte dialoguée, de fidélité patiente et d'espérance jubilatoire éternelle."
  },

  {
    id: 43,
    name: "Livre de Sophonie",
    image: "/images/books/sophonie.jpg",
    description: "Dans le Livre de Sophonie, le descendant d'Ézéchias clame le Jour de Yahvé comme fournaise dévorante sur Juda l'idolâtre et les nations orgueilleuses, mais sauve les humbles de la crue et purifie les lèvres des peuples pour invoquer le Nom, semence de colère eschatologique, de repentance universelle et d'espérance joyeuse éternelle."
  },

  {
    id: 44,
    name: "Livre d'Aggée",
    image: "/images/books/aggee.jpg",
    description: "Dans le Livre d'Aggée, le prophète postexilique exhorte Zorobabel le gouverneur et Josué le grand prêtre à rebâtir le Temple délaissé pour les vignes flétries, promettant une gloire future surpassant Salomon sous la nuée divine, semence d'appel reconstructeur, de priorité cultuelle et d'espérance glorieuse éternelle."
  },

  {
    id: 45,
    name: "Livre de Zacharie",
    image: "/images/books/zacharie.jpg",
    description: "Dans le Livre de Zacharie, visions nocturnes d'anges messagers, de femme-enfermée Péché, de chandelier aux sept branches et de chars-volcans déploient le jugement des nations et la purification de Josué, annonçant le Berger percé et les cloches d'or sur les chevaux, semence d'apocalypse symbolique, de royauté messianique et d'espérance cosmique éternelle."
  },

  {
    id: 46,
    name: "Livre de Malachie",
    image: "/images/books/malachie.jpg",
    description: "Dans le Livre de Malachie, le messager du Seigneur fustige les prêtres corrompus qui boitent entre Yahvé et les idoles, dénonce les divorces et les dîmes négligées, mais annonce l'ange de l'alliance comme fournaise à épurer l'argent, et le retour d'Élie avant le Jour redoutable, semence de reproche sacerdotal, de purification ardente et d'espérance éliatique éternelle."
  },

];

export default function AncienTestament() {
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
          <Link href="/bible/nouveau" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
            Nouveau Testament
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

      {/* Titre + Description */}
      <section className="px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-800">Ancien Testament</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          L&apos;Ancien Testament, première partie de la Bible catholique, regroupe 46 livres inspirés par Dieu. Il forme le cœur de l&apos;Alliance éternelle, enseignant la loi morale et annonçant le Messie, illuminant la venue du Christ. Il est indivisible du Nouveau Testament, révélant le plan salvifique de Dieu depuis la Création jusqu&apos;à la Rédemption.
        </p>
      </section>

      {/* Grille Livres (Images + Titre + Description, Comme Figma) */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ancienBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <Image
                src={book.image}
                alt={book.name}
                width={200}
                height={150}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{book.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{book.description}</p>
                <Link href={`/bible/ancien-testament/${book.id}/1`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Lire le livre →
                </Link>
              </div>
            </div>
          ))}
        </div>
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