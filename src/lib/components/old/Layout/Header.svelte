<script lang="ts">
  import { fly } from 'svelte/transition';
  import { tokens } from '$lib/styles/tokens';

  export let direction: 'row' | 'column' = 'row';
</script>

<header
  class={direction === 'column' ? 'column' : ''}
  in:fly={{
    y: -10,
    duration: tokens.transitionDurationMs,
    easing: tokens.transitionCurveSvelte,
    delay: tokens.transitionDurationMs,
  }}
>
  <slot />
</header>

<style lang="postcss">
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;

    color: var(--color-on-surface);
    background-color: var(--color-surface);

    &.column {
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
