<script lang="ts">
  import Icon from './Icon.svelte';

  export let title: string;
  export let description: string | null | undefined = undefined;
  export let date: Date | string | null | undefined = undefined;
  export let location: string | null | undefined = undefined;
  export let thumbnailUrl: string | null | undefined = undefined;
  export let href: string;
</script>

<a {href} class="post" data-thumbnail-url={thumbnailUrl}>
  <h2 class="title">{title}</h2>
  {#if description}
    <p>{description}</p>
  {/if}
  <div class="details">
    {#if date}
      <span class="date"><Icon name="calendar" variant="fill" /> {date.toLocaleString()}</span>
    {/if}
    {#if location}
      <span class="location"><Icon name="map-pin" variant="fill" /> {location}</span>
    {/if}
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
