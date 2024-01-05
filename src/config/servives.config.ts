export type Service = Readonly<{
  description: string;
  bold_text?: string;
}>;

export const SERVICES: Service[] = [
  {
    description: 'Διαφημιστείτε μέσα από τα Ελληνικά Δημητριακά'
  },
  {
    description: 'Προσελκύστε περισσότερους πελάτες αναθέτοντας τα social media της επιχείρησής σας στα Ελληνικά Δημητριακά',
    bold_text: 'social media'
  },
  {
    description: 'Κάλυψη επιχειρηματικής δραστηριότητας με drone',
    bold_text: 'drone'
  },
  {
    description: 'Πρόβλεψη αποδοτικότητας σοδειάς 2024',
    bold_text: 'Πρόβλεψη'
  }
];
