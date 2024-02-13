<div class="shell">
  <slot />
</div>

<style lang="postcss">
  /* @import '$lib/styles/theme.pcss'; */

  :global(body) {
    margin: 0;

    font-family: var(--type-body-font-family);
    font-style: var(--type-body-font-style);
    font-weight: var(--type-body-font-weight);
    font-size: var(--type-body-font-size);
    line-height: var(--type-body-line-height);
    letter-spacing: var(--type-body-letter-spacing);
    color: var(--color-on-background);

    background-color: var(--color-background);
  }

  .shell {
    display: flex;
    flex-direction: column;
    block-size: 100dvh;
  }

  @media (--media-tablet-up) {
    .shell {
      display: grid;
    }
  }
</style>
