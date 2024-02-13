<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';

  export let backFunction = () => history.back();
</script>

<div class="layout">
  <div class="header">
    <div class="headerContent">
      <Button size="small" on:click={backFunction}>
        Zurück
        <Icon slot="icon" name="arrow-left" />
      </Button>
    </div>
  </div>
  <div class="slot">
    <slot />
  </div>
</div>

<style lang="postcss">
  .layout {
    display: flex;
    flex-direction: column;
    block-size: 100vh;
  }

  .header {
    padding: 1rem 0.75rem;
    background-color: var(--color-surface);

    & .headerContent {
      margin: auto;
      max-inline-size: 768px;
    }
  }

  .slot {
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    padding: 1rem 0.75rem;
    overflow-y: auto;
  }

  @media (min-width: 512px) {
    .slot {
      padding: 2rem;
    }
  }
</style>
