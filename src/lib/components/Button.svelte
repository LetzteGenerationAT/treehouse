<script lang="ts">
  import { page } from '$app/stores';

  import Icon from '$lib/components/Icon.svelte';

  import type { MouseEventHandler } from 'svelte/elements';

  import style from '$lib/styles/theme.module.pcss';

  export let variant: 'primary' | 'secondary' | 'ghost' | undefined = undefined;
  export let href: string | undefined = undefined;
  // export let click: MouseEventHandler<any> = hand
  export let type: string | undefined = undefined;
  export let size: 'default' | 'small' | undefined = undefined;
  export let vertical: boolean | undefined = undefined;
  export let useExternalIcon: boolean = false;
  export let autofocus: boolean | undefined = undefined;
  export let replaceState: boolean | undefined = undefined;

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

<!-- svelte-ignore a11y-autofocus -->
<svelte:element
  this={href ? 'a' : 'button'}
  role={href ? 'link' : 'button'}
  {href}
  {type}
  target={external ? '_blank' : ''}
  class={[
    style.typeLabel,
    variant ? variant : null,
    size ? size : null,
    vertical ? 'column' : null,
    external ? 'external' : null,
  ]
    .filter(Boolean)
    .join(' ')}
  on:click
  {autofocus}
  data-sveltekit-replacestate={replaceState}
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
  a,
  button {
    box-sizing: content-box;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    /* outline: var(--color-border) solid 0.0625rem;
    outline-offset: -0.0625rem; */
    border: none;
    border-radius: 4rem;
    padding: 0.675rem 1rem;

    font-weight: 500;
    text-decoration: none;
    text-align: center;

    color: var(--color-on-surface-variant);
    background-color: var(--color-surface-variant);

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

    &:hover {
      background-color: var(--color-surface-variant-hover);
    }

    &:focus-visible {
      outline: var(--color-focus) solid 0.25rem;
      outline-offset: -0.25rem;
    }

    &.small {
      padding: 0.325rem 0.75rem;
    }

    &.column {
      flex-direction: column;
      padding: 0.75rem 1.25rem;

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
        border-radius: 1rem;
        padding: 0.25rem;

        line-height: 1;

        color: var(--color-on-surface);
        background-color: var(--color-surface);
      }
    }

    &.primary {
      color: var(--color-on-primary);
      background-color: var(--color-primary);

      & .icon {
        color: var(--color-on-primary);
      }

      & .externalIcon {
        inset-inline-end: 0.375rem;
        inset-block-start: 0.375rem;
        color: var(--color-on-primary-variant);
        background-color: var(--color-primary-variant);
      }

      &:hover {
        background-color: var(--color-primary-hover);
      }

      &:focus-visible {
        /* Invert colors for better visibility */
        background-color: var(--color-on-primary);
        color: var(--color-primary);
      }
    }

    &.secondary {
      font-weight: 500;
      color: var(--color-on-secondary);
      background-color: var(--color-secondary);

      & .icon {
        color: var(--color-on-secondary);
      }

      & .externalIcon {
        color: var(--color-on-secondary-variant);
        background-color: var(--color-secondary-variant);
      }

      &:hover {
        background-color: var(--color-secondary-hover);
      }
    }

    /* &.ghost {
      outline: none;
      background-color: transparent;
    } */
  }
</style>
