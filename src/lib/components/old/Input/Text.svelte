<script lang="ts">
  import style from '$lib/styles/theme.module.pcss';

  export let name: string | undefined = undefined;
  export let type: 'text' | 'password' | string = 'text';
  export let label: string | undefined = undefined;
  export let helperText: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let required: boolean = false;
</script>

<label class={style.typeLabel}
  ><span class="label {required ? 'required' : ''}">{label}</span><input
    {type}
    {name}
    {required}
    {placeholder}
  /><span class="helper">{helperText ? helperText : ''}</span></label
>

<style lang="postcss">
  label {
    display: flex;
    flex-direction: column;
    inline-size: auto;
    gap: 0.375rem;
  }

  input {
    inline-size: auto;
  }

  .helper {
    color: var(--color-on-surface-variant);
  }

  .label.required::after {
    content: ' *';
  }
</style>
