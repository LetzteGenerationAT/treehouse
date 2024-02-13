<script lang="ts">
  export let type: 'text' | 'email' | 'tel' | 'url' | 'time' | 'hidden' = 'text';
  export let name: string;
  export let label: string;
  export let helperText: string | null | undefined = undefined;
  export let required: boolean = false;
</script>

<label>
  <span class="labelText">{label}</span>
  <input {type} {name} {required} />
  {#if helperText}<span class="helperText">{helperText}</span>{/if}
</label>

<style lang="postcss">
  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  input {
    /* outline: var(--color-surface-variant) solid 0.125rem;
    outline-offset: -0.125rem; */
    border: none;
    border-block-end: 0.125rem solid var(--color-surface-variant);
    border-start-start-radius: 0.25rem;
    border-start-end-radius: 0.25rem;
    padding: 0.75rem 1rem;

    font-size: 1rem;
    color: var(--color-on-surface);

    background-color: var(--color-surface);

    &:focus-visible {
      outline: var(--color-focus) solid 0.25rem;
      outline-offset: -0.25rem;
      border-radius: 0.25rem;
    }
  }

  .labelText,
  .helperText {
    /* padding-inline-start: 0.5rem; */
    font-size: 0.875rem;
    font-weight: 500;
  }

  .labelText {
  }

  .helperText {
    color: var(--color-on-surface-dim);
  }
</style>
