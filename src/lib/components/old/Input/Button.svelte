<script lang="ts">
  import { page } from '$app/stores';
  import { Icon } from '../Icon';

  import style from '$lib/styles/theme.module.pcss';

  export let variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | undefined = undefined;
  export let href: string | undefined = undefined;
  export let type: string | undefined = undefined;
  export let size: 'default' | 'small' | undefined = undefined;
  export let vertical: boolean | undefined = undefined;
  export let useExternalIcon: boolean = false;

  let external: boolean = false;

  if (useExternalIcon) {
    try {
      if (href) {
        if (new URL(href).hostname != $page.url.hostname) {
          external = true;
        }
      }
    } catch {
      external = false;
    }
  }
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  role={href ? 'link' : 'button'}
  {href}
  {type}
  target={external ? '_blank' : ''}
  class="{style.typeLabel} {variant ? variant : ''} {size ? size : ''} {vertical
    ? 'column'
    : ''} {external ? 'external' : ''}"
>
  {#if $$slots.icon}
    <span class="icon">
      <slot name="icon" />
    </span>
  {/if}
  <span class="content">
    <slot />
  </span>
  {#if external}
    <span class="externalIcon">
      <Icon name="external-link" />
    </span>
  {/if}
</svelte:element>

<style lang="postcss">
  /* @import '$lib/styles/theme.pcss'; */

  a,
  button {
    box-sizing: content-box;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    outline: var(--color-border) solid 0.0625rem;
    outline-offset: -0.0625rem;
    border: none;
    border-radius: 0.25rem;
    padding: 0.675rem 1rem;

    text-decoration: none;
    text-align: center;

    color: inherit;
    background-color: var(--color-surface);

    cursor: pointer;

    transition: background-color var(--transition-duration) var(--transition-curve);

    & .icon {
      font-size: 1rem;
      color: var(--color-on-surface-variant);
    }

    & .content {
      flex-grow: 1;
      display: flex;
      align-items: center;
    }

    &.small {
      padding: 0.325rem 0.75rem;
    }

    &.column {
      flex-direction: column;
      padding: 0.675rem 0.5rem;

      & .icon {
        font-size: 1.5rem;
      }
    }

    &.external {
      position: relative;

      & .externalIcon {
        position: absolute;
        inset-inline-end: 0.25rem;
        inset-block-start: 0.25rem;
        border-radius: 0.25rem;
        /* border-start-end-radius: 0.25rem;
        border-end-start-radius: 0.25rem; */
        padding: 0.25rem;

        line-height: 1;

        color: var(--color-on-surface-variant);
        background-color: var(--color-surface-variant);
      }
    }

    &.primary {
      color: var(--color-on-primary);
      background-color: var(--color-primary);
      outline: none;

      & .icon {
        color: var(--color-on-primary-variant);
      }

      & .externalIcon {
        inset-inline-end: 0.375rem;
        inset-block-start: 0.375rem;
        color: var(--color-on-primary-variant);
        background-color: var(--color-primary-variant);
      }

      &:hover {
        background-color: var(--color-primary-variant);
      }
    }

    &.secondary {
      color: var(--color-on-secondary);
      background-color: var(--color-secondary);
      outline: none;

      & .icon {
        color: var(--color-on-secondary-variant);
      }

      & .externalIcon {
        color: var(--color-on-secondary-variant);
        background-color: var(--color-secondary-variant);
      }

      &:hover {
        background-color: var(--color-secondary-variant);
      }
    }

    &.tertiary {
      color: var(--color-on-tertiary);
      background-color: var(--color-tertiary);
      outline: none;

      & .icon {
        color: var(--color-on-tertiary-variant);
      }

      & .externalIcon {
        color: var(--color-on-tertiary-variant);
        background-color: var(--color-tertiary-variant);
      }

      &:hover {
        background-color: var(--color-tertiary-variant);
      }
    }

    &.ghost {
      outline: none;
      background-color: transparent;
    }

    &:hover {
      background-color: var(--color-surface-variant);
    }

    &:focus {
      outline: var(--color-primary) solid 0.125rem;
      outline-offset: -0.125rem;
    }

    &.primary:focus {
      outline: var(--color-on-primary) solid 0.125rem;
      outline-offset: -0.25rem;
    }
  }
</style>
