<script lang="ts">
  import Icon from './Icon.svelte';

  export let title: string;
  export let description: string = '';
  export let value: boolean = false;
  export let href: string | undefined = undefined;
  export let disabled: boolean = false;
</script>

<a
  {href}
  class="checklistItem {value || disabled ? 'disabled' : ''}"
  aria-disabled={value || disabled}
>
  <Icon icon={value ? 'ri-checkbox-circle-line' : 'ri-checkbox-blank-circle-line'} />
  <div class="content">
    <span class="title">{title}</span>
    <span class="description">{description}</span>
  </div>
  <div class="end">
    <Icon name="arrow-right-s" />
  </div>
</a>

<style lang="postcss">
  a {
    list-style: none;

    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.75rem;
    gap: 1.125rem;

    text-decoration: unset;
    color: var(--color-on-surface);

    cursor: pointer;

    transition: background-color var(--transition-duration) var(--transition-curve);

    &:hover {
      background-color: var(--color-surface-hover);
    }

    &.disabled {
      color: var(--color-on-surface-disabled);
      pointer-events: none;
      cursor: initial;
    }

    & i {
      font-size: 1.5rem;
    }

    & .end {
      margin-inline-start: auto;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
  }
</style>
