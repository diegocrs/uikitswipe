
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ComponentSection {
  id: string;
  title: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon?: string;
}
