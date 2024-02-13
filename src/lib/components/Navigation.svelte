<script lang="ts">
  import { page } from '$app/stores';

  $: pathname = $page.url.pathname;

  export let items: {
    title: string;
    icon: string;
    href: string;
    active?: boolean;
  }[];
</script>

<slot />

<nav>
  <div class="inner">
    {#each items as item}
      <a href={item.href} class={pathname === item.href ? 'active' : ''}>
        <i class="ri-{item.icon}-{pathname === item.href ? 'fill' : 'line'}" /><span
          >{item.title}</span
        >
      </a>
    {/each}
  </div>
</nav>

<style lang="postcss">
  nav {
    background-color: var(--color-surface);
  }

  .inner {
    display: flex;
    margin: auto;
    border-radius: 1.5rem;
    padding: 0.5rem;
    max-inline-size: 512px;
    gap: 0.5rem;
  }

  a {
    display: flex;
    flex: 1 1 0px;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    border-radius: 4rem;
    padding: 0.25rem;

    font-weight: 400;
    line-height: 1;
    text-decoration: none;
    color: var(--color-on-surface);

    transition: font-weight var(--transition-duration) var(--transition-curve);

    & i {
      position: relative;
      z-index: 1;

      padding: 0.25rem;
      inline-size: 75%;
      max-inline-size: 4rem;

      font-size: 1.5rem;
      text-align: center;

      overflow: hidden;

      &::after {
        content: '';

        position: absolute;
        inset: 0 calc(50% - 1rem);
        z-index: -1;

        border-radius: 1rem;

        background-color: transparent;
        transition:
          inset var(--transition-duration) var(--transition-curve),
          background-color calc(2 * var(--transition-duration)) var(--transition-curve);
      }
    }

    &:hover,
    &:focus-visible {
      & i {
        color: var(--color-on-surface-hover);

        &::after {
          background-color: var(--color-surface-hover);
          transition: background-color var(--transition-duration) var(--transition-curve);
        }
      }
    }

    &:focus-visible {
      outline: var(--color-focus) solid 0.25rem;
      outline-offset: -0.25rem;
    }

    &.active {
      & i {
        color: var(--color-on-surface-variant);
      }

      & i::after {
        inset: 0 0;
        background-color: var(--color-surface-variant);
        transition: all var(--transition-duration) var(--transition-curve);
      }
    }
  }

  span {
    font-size: 0.875rem;
  }
</style>
