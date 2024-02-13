<div class="app">
  <slot />
</div>

<style lang="postcss">
  @import '$lib/styles/reset.pcss';
  @import '$lib/styles/default.pcss';
  @import '$lib/styles/fonts.pcss';

  .app {
    min-block-size: 100vh;
    overflow: hidden;

    font-family: 'Albert Sans';
    color: var(--color-on-background);

    background-color: var(--color-background);
  }
</style>
