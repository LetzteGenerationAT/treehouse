<script lang="ts">
  import Icon from './Icon.svelte';

  export let title: string;
  export let date: Date | string;
  export let location: string;
  export let thumbnailUrl: string | undefined = undefined;
  export let href: string;
</script>

<a {href} class="post" data-thumbnail-url={thumbnailUrl}>
  <h2 class="title">{title}</h2>
  <div class="details">
    <span class="date"><Icon name="calendar" variant="fill" /> {date}</span>
    <span class="location"><Icon name="map-pin" variant="fill" /> {location}</span>
  </div>
  <div class="background">
    <img src={thumbnailUrl} alt="" />
  </div>
</a>

<style lang="postcss">
  a.post {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    outline: var(--color-primary) solid 0.125rem;
    outline-offset: -0.125rem;
    border-radius: 1.25rem;
    padding: 1.5rem;
    max-inline-size: 512px;

    text-decoration: none;
    color: var(--color-on-primary);

    background-color: var(--color-primary);

    overflow: hidden;

    &:focus-visible {
      outline-color: var(--color-accent);
      outline-width: 0.25rem;
      outline-offset: -0.25rem;
    }
  }

  .title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1;
  }

  .background {
    position: absolute;
    inset: 0;
    z-index: -1;

    & img {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      object-position: center;
      opacity: 0.375;
      filter: brightness(0.375);
    }
  }
</style>
