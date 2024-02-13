<script lang="ts">
  import Icon from './Icon.svelte';

  export let title: string;
  export let tags: string[] = [];
  export let href: string;
  // export let published: Date | undefined = undefined;
</script>

<a {href} class="post">
  <h2 class="title">{title}</h2>
  <div class="excerpt">
    <slot />
  </div>
  <div class="tags">
    {#each tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
  <!-- {#if published}
    <span class="date">
      <Icon name="calendar" variant="fill" />
      {published.toLocaleDateString()}
    </span>
  {/if} -->
</a>

<style lang="postcss">
  a.post {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    outline: var(--color-surface-variant) solid 0.125rem;
    outline-offset: -0.125rem;
    border-radius: 1.25rem;
    padding: 1.5rem;

    text-decoration: none;
    color: var(--color-on-surface);

    background-color: var(--color-surface);

    transition: background-color var(--transition-duration) var(--transition-curve);

    &:hover {
      background-color: var(--color-surface-hover);
    }

    &:focus-visible {
      z-index: 9999;

      outline-color: var(--color-accent);
      outline-width: 0.25rem;
      outline-offset: -0.25rem;
    }
  }

  /* .date {
    text-align: end;
    font-size: 0.875rem;
    font-weight: 500;

    color: var(--color-on-surface-variant);
  } */

  .title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
  }

  .excerpt {
    max-block-size: calc(4rem * 1.2);

    line-height: 1.2;

    mask-image: linear-gradient(to bottom, #000000ff calc(2rem * 1.2), transparent);

    overflow: hidden;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;

    line-height: 1;
    font-size: 0.875rem;

    color: var(--color-on-surface-variant);

    background-color: var(--color-surface-variant);
  }
</style>
