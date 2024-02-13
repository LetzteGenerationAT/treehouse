import { sineInOut } from 'svelte/easing';
import type { EasingFunction } from 'svelte/transition';

export const tokens: {
  transitionDurationMs: number;
  transitionCurve: string;
  transitionCurveSvelte: EasingFunction;
} = {
  transitionDurationMs: 175,
  transitionCurve: 'ease',
  transitionCurveSvelte: sineInOut,
};
