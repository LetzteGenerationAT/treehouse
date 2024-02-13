<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';

  let navItems: {
    title: string;
    icon: string;
    href: string;
    active?: boolean;
  }[] = [
    {
      title: 'Home',
      icon: 'home',
      href: '/',
    },
    {
      title: 'Chats',
      icon: 'chat-1',
      href: '/chats',
    },
    {
      title: 'Apps',
      icon: 'function',
      href: '/apps',
    },
    {
      title: 'Profil',
      icon: 'user',
      href: '/profile',
    },
  ];
</script>

<div class="layout">
  <div class="slot">
    <slot />
  </div>
  <div class="navigation">
    <Navigation items={navItems} />
  </div>
</div>

<style lang="postcss">
  .layout {
    display: flex;
    flex-direction: column;
    block-size: 100vh;
  }

  .slot {
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    padding: 1rem 0.75rem 2rem;
    overflow-y: auto;

    @media (min-width: 512px) {
      padding: 2rem;
    }
  }

  .navigation {
    z-index: 99;
    border-top: 0.125rem solid var(--color-surface-variant);
    box-shadow: 0 0 1.5rem -0.5rem hsl(0 0% 0% / 0.25);
  }
</style>
