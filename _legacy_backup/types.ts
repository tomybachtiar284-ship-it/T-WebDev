export interface ServicePackage {
  id: string;
  title: string;
  shortDescription: string;
  icon: string; // Icon name reference
  priceRange: string;
  details: {
    structure: string[];
    features: string[];
    dummyContent: string[];
    designStyle: string;
    techStack: string;
    editingGuide: string;
  };
}
