import { v4 as uuidv4 } from "uuid";

export const defaultProjects = [
  {
    id: uuidv4(),
    name: "Mémoire Master IA",
    description: "Rédaction du mémoire en intelligence artificielle",
    files: [
      { name: "main.tex", content: "\\documentclass{report}\n\\begin{document}\nMémoire Master IA\n\\end{document}" },
      { name: "references.bib", content: "% Bibliographie" },
    ],
  },
  {
    id: uuidv4(),
    name: "Article Recherche Réseaux",
    description: "Soumission IEEE sur la performance des réseaux 5G",
    files: [
      { name: "main.tex", content: "\\documentclass{IEEEtran}\n\\begin{document}\nArticle sur la 5G\n\\end{document}" },
      { name: "figures.tex", content: "% Insertion figures" },
    ],
  },
  {
    id: uuidv4(),
    name: "Rapport de Stage",
    description: "Rapport de stage en entreprise de cybersécurité",
    files: [
      { name: "main.tex", content: "\\documentclass{article}\n\\begin{document}\nRapport de Stage\n\\end{document}" },
    ],
  },
  {
    id: uuidv4(),
    name: "Thèse Doctorat",
    description: "Rédaction de thèse en vision par ordinateur",
    files: [
      { name: "main.tex", content: "\\documentclass{book}\n\\begin{document}\nThèse Doctorat\n\\end{document}" },
      { name: "chapter1.tex", content: "\\chapter{Introduction}" },
      { name: "chapter2.tex", content: "\\chapter{Méthodologie}" },
    ],
  },
];
