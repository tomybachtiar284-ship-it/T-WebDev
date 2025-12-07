import React from 'react';
import { 
  LayoutTemplate, 
  Building2, 
  UserCircle, 
  HeartHandshake, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  X,
  Menu,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Code2
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const icons: Record<string, React.ReactNode> = {
    LayoutTemplate: <LayoutTemplate size={size} className={className} />,
    Building2: <Building2 size={size} className={className} />,
    UserCircle: <UserCircle size={size} className={className} />,
    HeartHandshake: <HeartHandshake size={size} className={className} />,
    Wrench: <Wrench size={size} className={className} />,
    CheckCircle2: <CheckCircle2 size={size} className={className} />,
    ArrowRight: <ArrowRight size={size} className={className} />,
    X: <X size={size} className={className} />,
    Menu: <Menu size={size} className={className} />,
    Phone: <Phone size={size} className={className} />,
    Mail: <Mail size={size} className={className} />,
    MapPin: <MapPin size={size} className={className} />,
    ChevronRight: <ChevronRight size={size} className={className} />,
    Code2: <Code2 size={size} className={className} />
  };

  return <>{icons[name] || <LayoutTemplate size={size} className={className} />}</>;
};
