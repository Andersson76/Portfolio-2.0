import { Url } from "url";

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}
export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "technology";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    name: string;
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Experience extends SanityBody {
  companyName: ReactNode;
  points: ReactNode;
  dateEnded: string | number | Date;
  isCurrentlyWorkingHere: boolean;
  dateStarted: string | number | Date;
  _type: 'experience'
  image: Image
  title: string
  summary: string
  technologies: Technology[]
  companyImage: Image
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
    url: string;
}

export interface Social extends SanityBody {

    _type: "social";
    title: string;
    url: string;

}
