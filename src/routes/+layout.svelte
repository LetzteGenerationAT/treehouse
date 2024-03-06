<div class="app">
  <slot />
</div>

<style lang="postcss">
  @import '$lib/styles/reset.pcss';
  @import '$lib/styles/default.pcss';
  @import '$lib/styles/fonts.pcss';

  :global(a) {
    text-decoration-thickness: 0.125rem;
    text-underline-offset: 0.125rem;
    text-decoration-color: var(--color-secondary-variant);
    color: var(--color-on-surface);
    background-color: var(--color-surface);
  }

  .app {
    min-block-size: 100vh;
    overflow: hidden;

    font-family: 'Albert Sans';
    line-height: 1.4;
    color: var(--color-on-background);

    background-color: var(--color-background);
  }
</style>
