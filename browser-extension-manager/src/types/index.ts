export interface ExtensionType {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface ExtensionTypeProps extends ExtensionType {
  onToggleActive: () => void;
  onRemove: () => void;
}
