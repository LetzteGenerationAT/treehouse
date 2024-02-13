<script lang="ts">
  import { fly } from 'svelte/transition';
  import { tokens } from '$lib/styles/tokens';
</script>

<main
  in:fly={{
    y: 10,
    duration: tokens.transitionDurationMs,
    easing: tokens.transitionCurveSvelte,
  }}
>
  <slot />
  {#if $$slots.float}
    <div class="float">
      <slot name="float" />
    </div>
  {/if}
</main>

<style lang="postcss">
  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;

    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-gutter: stable both-edges;

    & > :global(*) {
      /* Stop children from collapsing */
      flex: 0 0 auto;
    }
  }

  .float {
    position: sticky;
    align-self: end;
    inset-inline-end: 0;
    inset-block-end: 0;
    z-index: 9;

    margin-block-start: auto;

    & > :global(*:not([data-fall-through])),
    & > :global([data-fall-through]) > :global(*) {
      /* Apply shadow to (grand-)child */
      box-shadow: 0 0.125rem 0.5rem -0.125rem var(--color-shadow);
    }
  }
</style>
