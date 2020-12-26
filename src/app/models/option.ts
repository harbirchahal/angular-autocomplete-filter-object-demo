export interface Option {
  id: number;
  label: string;
}

export function filterOptionsByLabel(options: Option[], label: string): Option[] {
  const value = label.trim().toLowerCase();
  return options.filter((option: Option) => {
    return option.label.toLowerCase().includes(value);
  });
}
