export interface Experience {
  company: string;
  role: string;
  description: string;
}

export interface Education {
  title: string;
  school: string;
  description: string;
}

export interface CV {
  experience: Experience[];
  education: Education[];
}
