<script lang="ts">
  import style from '$lib/styles/theme.module.pcss';

  export let title: string;
</script>

<div class="emptyState">
  <h2 class={style.typeDisplay}>{title}</h2>
  <slot />
</div>

<style lang="postcss">
  .emptyState {
    padding: 1.5rem;
    text-align: center;
  }
</style>
