<script lang="ts">
  export let title: string;
</script>

<div class="section">
  <div class="heading">
    <h1>{title}</h1>
    <div class="actions"></div>
  </div>
  <slot />
</div>

<style lang="postcss">
  .section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-inline-size: 768px;
    inline-size: 100%; /* stops child grid layouts from shrinking */
  }

  h1 {
    margin: 0;

    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;

    color: var(--color-on-background);
  }
</style>
