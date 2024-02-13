<script lang="ts">
  import Button from './Button.svelte';

  export let show: boolean;

  let dialog: HTMLDialogElement;
  let openDrawer = () => {
    dialog.showModal();
    setTimeout(() => {
      dialog.classList.add('show');
    });
  };
  let closeDrawer = () => {
    dialog.classList.remove('show');
    setTimeout(() => {
      dialog.close();
    }, 175);
  };

  $: if (dialog && show) openDrawer();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={() => (show = false)} on:click|self={() => closeDrawer()}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation class="inner">
    <!-- <div class="handle" /> -->
    <Button autofocus on:click={() => closeDrawer()}>Schließen</Button>
    <div class="slot">
      <slot />
    </div>
  </div>
</dialog>

<style lang="postcss">
  dialog {
    inset-inline: 0;
    inset-block-start: auto;
    inset-block-end: -100%;
    /* inset-block-end: 0; */
    z-index: 999;

    /* display: block; */
    margin: auto;
    padding: 0;
    border: none;
    border-start-start-radius: 1.5rem;
    border-start-end-radius: 1.5rem;
    inline-size: calc(100% - 1rem);
    max-width: unset;
    max-height: unset;
    max-inline-size: unset;
    max-block-size: unset;
    overflow: hidden;

    background-color: var(--color-surface);

    pointer-events: none;

    transition: inset-block-end var(--transition-duration) var(--transition-curve);

    &::backdrop {
      background-color: hsl(0 0% 0% / 0);
      transition: background-color var(--transition-duration) var(--transition-curve);
      pointer-events: none;
    }

    & .inner {
      inset-inline: 0;
      inset-block-end: -100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1rem 0;
      max-block-size: calc(100svh - 6rem);
      max-block-size: calc(100svh - 1rem);
      overflow: hidden;
    }

    &.show {
      inset-block-end: 0;
      pointer-events: revert;

      &::backdrop {
        background-color: hsl(0 0% 0% / 0.75);
      }
    }
  }

  /* .handle {
    margin: auto;
    border-radius: 1rem;
    block-size: 0.5rem;
    inline-size: 3rem;
    background-color: var(--color-surface-variant);
  } */

  .slot {
    padding-block: 1rem;
    overflow-y: auto;
  }
</style>
