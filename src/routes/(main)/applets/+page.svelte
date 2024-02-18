<script lang="ts">
  import { page } from '$app/stores';
  import { env } from '$env/dynamic/public';

  import Section from '$lib/components/Section.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';

  let apps = [
    {
      name: 'Admin',
      icon: 'admin',
      href: `${$page.url.pathname}/admin`,
    },
    {
      name: 'Events',
      icon: 'survey',
      href: `${$page.url.pathname}/events`,
    },
    {
      name: 'Emo-Support',
      icon: 'empathize',
      href: `${$page.url.pathname}/emo`,
    },
    {
      name: 'Rechtsbeihilfe',
      icon: 'government',
      href: `${$page.url.pathname}/legal-support`,
    },
    {
      name: 'Wiki',
      icon: 'globe',
      href: `${$page.url.pathname}/wiki`,
    },
    {
      name: 'Rebel Ringing',
      icon: 'phone',
      href: `${$page.url.pathname}/rebel-ringing`,
    },
    {
      name: 'Helpdesk',
      icon: 'lifebuoy',
      href: `${$page.url.pathname}/helpdesk`,
    },
    {
      name: 'Info-Seite',
      icon: 'information',
      href: `https://info.letztegeneration.at/`,
    },
    {
      name: 'Google Drive',
      icon: 'drive',
      href: 'https://drive.google.com/',
    },
    {
      name: 'GMail',
      icon: 'mail',
      href: 'https://gmail.com/',
    },
  ];
</script>

<div class="page">
  <Section title="Meine Apps">
    <div class="appgrid">
      {#each apps.sort((a, b) => a.name.localeCompare(b.name)) as app}
        <Button href={app.href} vertical useExternalIcon>
          <Icon slot="icon" name={app.icon} variant="fill" />
          {app.name}
        </Button>
      {/each}
    </div>
  </Section>
</div>

<style lang="postcss">
  .page {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 3rem;
  }

  .appgrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-auto-rows: 1fr;
    gap: 1rem;
  }
</style>
