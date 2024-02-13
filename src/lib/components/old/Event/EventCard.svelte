<script lang="ts">
  import { Icon } from '../Icon';

  import style from '$lib/styles/theme.module.pcss';

  export let name: string;
  export let date: Date;
  export let location: string;
  export let href: string;
  export let thumbnailUrl: string;
  export let thumbnailAlt: string;
</script>

<a class="card" {href}>
  <div class="info">
    <span class="name {style.typeDisplay}">{name}</span>
    <span class="date {style.typeLabel}"
      ><Icon name="calendar" />
      <time datetime={date.toLocaleString()}>{date.toLocaleString()}</time></span
    >
    <span class="location {style.typeLabel}"><Icon name="map-pin" /> {location}</span>
    <slot />
  </div>
  <img class="thumbnail" src={thumbnailUrl} alt={thumbnailAlt} />
</a>

<style lang="postcss">
  .card {
    --radius: 1.5rem;
    position: relative;
    z-index: 1;

    border-radius: var(--radius);
    flex: 0 0 auto;
    max-inline-size: 80svw;
    inline-size: 20rem;
    block-size: 12rem;
    overflow: hidden;

    & img {
      position: inherit;
      z-index: 0;
      object-fit: cover;
      block-size: 100%;
      inline-size: 100%;
    }

    & .info {
      --inset: 0.5rem;

      position: absolute;
      inset-inline-start: var(--inset);
      inset-block-end: var(--inset);
      z-index: 1;

      display: flex;
      flex-direction: column;
      border-radius: calc(var(--radius) - var(--inset));
      padding: 0.75rem;
      gap: 0.5rem;

      line-height: 1;

      color: var(--color-on-tertiary);
      background-color: var(--color-tertiary);
      box-shadow: 0 1rem 2rem var(--color-shadow);

      & * {
        line-height: inherit;
      }

      & [class^='ri-'],
      & [class*=' ri-'] {
        color: red !important;
      }
    }

    &:focus {
      outline: var(--color-primary) solid 0.125rem;
      outline-offset: -0.125rem;
    }
  }
</style>
