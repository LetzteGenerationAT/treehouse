<div class="page">
  <slot />
</div>

<style lang="postcss">
  .page {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 2rem;
  }
</style>
