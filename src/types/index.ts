
export interface Term {
  id: string;
  term: string;
  definition: string;
  example?: string;
  related?: string[];
}

export interface Profession {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  terms: Term[];
}
