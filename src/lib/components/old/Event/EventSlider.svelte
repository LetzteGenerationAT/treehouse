<script lang="ts">
  export let inset = false;

  let slider: HTMLDivElement;
  let dragging = false;
  let initialScrollLeft: number;
  let initialMouseX: number;
  let pointerId: number;

  let stopDragging = (event: PointerEvent) => {
    dragging = false;
    slider.releasePointerCapture(event.pointerId);
  };
</script>

<div
  bind:this={slider}
  class="slider {inset ? 'inset' : ''}"
  role="presentation"
  on:pointermove={(event) => {
    if (!dragging) return;
    event.preventDefault();
    slider.scrollLeft = initialScrollLeft - (event.clientX - slider.offsetLeft - initialMouseX);
  }}
  on:pointerup={stopDragging}
  on:dragstart={(event) => {
    event.preventDefault();
  }}
>
  <div
    class="content"
    role="presentation"
    on:pointerdown={(event) => {
      dragging = true;
      pointerId = event.pointerId;
      slider.setPointerCapture(pointerId);
      initialMouseX = event.clientX - slider.offsetLeft;
      initialScrollLeft = slider.scrollLeft;
    }}
  >
    <slot />
  </div>
</div>

<style lang="postcss">
  .slider {
    scrollbar-gutter: stable;
    overflow-x: auto;

    cursor: move;
    cursor: grab;
    user-select: none;

    & .content {
      display: flex;
      flex-wrap: nowrap;
      padding-block-end: 1rem; /* scrollbar-gutter does nothing with overlay-scrollbars */
      gap: 1rem;
    }

    &.inset {
      margin-inline: -1rem;
      padding-inline: 1rem;
    }

    &:active {
      cursor: grabbing;

      & .content > :global(*) {
        cursor: inherit;
      }
    }
  }
</style>
