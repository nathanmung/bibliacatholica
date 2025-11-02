export interface Verse {
  number: number;
  text: string;
}

export interface Chapter {
  number: number;
  verses: Verse[];
}

export interface Book {
  id: number;
  abbrev: string;
  name: string;
  testament: string;  // Change en string (pas littéral 'Ancien' | 'Nouveau'—plus flexible pour hardcode)
  chapters: Chapter[];
}