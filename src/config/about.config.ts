export type About = Readonly<{
  description: string;
  bold_text?: string;
}>;

export const ABOUT: About[] = [
  {
    description: new Date().getFullYear() - 1950 + ' χρόνια',
    bold_text: 'εμπειρίας'
  },
  {
    description: '3 γενιές',
  },
  {
    description: 'Γεωπονία',
  },
  {
    description: 'Social Media',
  },
  {
    description: 'Video Edit',
  },
  {
    description: 'Website development',
  }
];
