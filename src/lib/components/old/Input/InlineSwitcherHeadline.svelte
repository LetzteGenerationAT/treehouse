<script>
  import Icon from '../Icon.svelte';
</script>

<span class="switcher">
  <slot />
  <span class="icon">
    <Icon name="expand-up-down" />
  </span>
</span>

<style lang="postcss">
  .switcher {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;

    font-weight: 700;
    color: var(--color-primary);

    cursor: pointer;

    & .icon {
      font-size: 75%;
      /* font-weight: 600; */
      color: var(--color-primary);
    }
  }
</style>
