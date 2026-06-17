export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

export const EASE = [0.25, 0.1, 0.25, 1] as const;
