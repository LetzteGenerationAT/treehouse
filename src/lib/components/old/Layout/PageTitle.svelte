<script lang="ts">
  import { env } from '$env/dynamic/public';

  export let title: string | undefined = undefined;
</script>

<svelte:head>
  {#if title}
    <title>{title} - {env.PUBLIC_ORG_NAME}</title>
  {:else}
    <title>{env.PUBLIC_ORG_NAME}</title>
  {/if}
</svelte:head>
