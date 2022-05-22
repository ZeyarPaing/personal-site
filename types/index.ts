export type Project = {
  name: string;
  logo: string;
  type: string;
  description: string;
  demoUrl: string;
  color: string;
};

export type Experience = {
  year: number;
  companyName: string;
  description: string;
  position: string;
};

export type Technology = {
  icon: string;
  name: string;
  specialized: boolean;
  color: string;
};

export type Education = {
  name: string;
  description: string;
};

export type Voluntary = {
  place: string;
  description: string;
  position: string;
};
