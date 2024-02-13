<script lang="ts">
  import style from '$lib/styles/theme.module.pcss';

  export let label: string;
  export let href: string;
  export let active = false;
</script>

<a {href} class:active class={style.typeLabel}>
  <div class="icon">
    <slot name="icon" />
  </div>
  <span>{label}</span>
</a>

<style lang="postcss">
  /* @import '$lib/styles/theme.pcss'; */

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0;
    gap: 0.25rem;
    padding: 0.5rem;

    border-radius: 0.125rem;

    color: var(--color-on-surface);
    text-decoration: none;

    transition: all var(--transition-duration) var(--transition-curve);

    & .icon {
      font-size: 1.25rem;
      color: var(--color-on-surface-variant);
    }

    &:hover {
      background-color: var(--color-surface-variant);
    }

    &:focus {
      outline: var(--color-primary) solid 0.125rem;
      outline-offset: -0.125rem;
    }

    &.active {
      color: var(--color-on-secondary);
      background-color: var(--color-secondary);

      & .icon {
        color: var(--color-primary);
      }

      &:hover {
        background-color: var(--color-secondary-variant);
      }
    }

    @media (--media-tablet-up) {
      border-radius: 0.25rem;
    }
  }
</style>
