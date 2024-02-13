<script lang="ts">
</script>

<nav>
  <slot />
</nav>

<style lang="postcss">
  /* @import '$lib/styles/theme.pcss'; */

  nav {
    z-index: 1;
    display: flex;
    justify-content: space-around;
    gap: 0.25rem;
    padding: 0.25rem;
    max-inline-size: var(--breakpoint-tablet-up);

    background-color: var(--color-surface);

    @media (--media-tablet-up) {
      border-radius: 0.5rem;
    }
  }
</style>
