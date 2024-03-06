<script lang="ts">
  import GenericPage from '$lib/components/GenericPage.svelte';
  import Section from '$lib/components/Section.svelte';
  import Checklist from '$lib/components/Checklist.svelte';
  import ChecklistItem from '$lib/components/ChecklistItem.svelte';
  import Event from '$lib/components/Event.svelte';
  import Post from '$lib/components/Post.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';

  import type { PageData } from './$types';
  import { onMount } from 'svelte';

  export let data: PageData;

  let installed = false;
  let relatedApps: object[] | undefined | never;
  onMount(async () => {
    relatedApps = await window.navigator.getInstalledRelatedApps?.();
    if (relatedApps && relatedApps.length > 0) {
      installed = true;
    }
  });
</script>

<GenericPage>
  <!--
    Show relevant next steps if profile hasn't completed onboarding
  -->
  {#if !data.profile?.roles.includes('community.baumhaus.roles.onboarding.completed')}
    <Section title="Mitmachen">
      <p>
        Schön, dass du zu uns gefunden hast! Hier sind auch schon die nächsten Schritte, um deine
        Rolle im friedlichen Widerstand zu finden.
      </p>
      <Checklist>
        <ChecklistItem
          title="Komm zum Infoabend"
          description="Ein Vortrag über die Klimakatastrophe und die Letzte Generation – mit Fragen und Antworten"
          href="/applets/events"
          value={data.profile?.roles.includes(
            'community.baumhaus.groups.letztegenerationat.roles.onboarding.infoabend',
          )}
        />
        <ChecklistItem
          title="Profil vervollständigen"
          description="Erzähl uns doch ein bisschen von dir"
          href="/profile"
          value={data.profile?.roles.includes(
            'community.baumhaus.groups.letztegenerationat.onboarding.profile',
          )}
        />
        {#if data.profile}
          {#if data.profile?.roles.includes('community.baumhaus.groups.letztegenerationat.roles.onboarding.interesse-protest')}
            <ChecklistItem
              title="Protesttraining"
              description="Infos zu Zivilem Widerstand. Hier lernst du auch, wie du dich auf der Straße richtig verhälst."
              value={data.profile.roles.includes(
                'community.baumhaus.groups.letztegenerationat.roles.biene',
              )}
            />
          {/if}
          {#if data.profile?.roles.includes('community.baumhaus.groups.letztegenerationat.roles.onboarding.interesse-ag')}
            <ChecklistItem
              title="AG Call"
              description="Lerne die Menschen in deiner Arbeitsgruppe kennen"
              value={data.profile.roles.includes(
                'community.baumhaus.groups.letztegenerationat.roles.ag',
              )}
            />
          {/if}
          <ChecklistItem
            title="App installieren"
            description="Offline-Zugriff, Benachrichtigungen zu Fristen und Terminen"
            value={installed}
          />
        {/if}
      </Checklist>
      {#if !data.profile}
        <Button href="/login" replaceState
          ><Icon slot="icon" name="login-box" />Ich habe bereits ein Profil</Button
        >
      {/if}
    </Section>
  {/if}

  <!--
    Events
  -->
  {#if data.events.length > 0}
    <Section title="Events">
      {#each data.events as event}
        <Event
          title={event.title}
          date={event.startsAt}
          location={event.location}
          href="/applets/events/{event.id}"
          thumbnailUrl={event.thumbnailUrl}
        />
      {/each}
    </Section>
  {/if}

  <!--
    Posts
  -->
  <Section title="Neuigkeiten">
    <Post
      title="🧡🦺 Protesttage & Massenbesetzung in Wien im Februar 🦺🧡"
      href=""
      tags={['Broadcast', 'Protestankündigung', 'Wien']}
    >
      2023 war mit Abstand das heißeste Jahr seit Messbeginn. Ein Land nach dem anderen ist massiv
      von der Klimakatastrophe betroffen. Wir wissen, dass es immer schlimmer wird, unsere Zukunft
      auf dem Spiel steht und die Regierung ihrer Verantwortung nicht nachkommt. Und wir haben die
      Möglichkeit zu Handeln – nutzen wir sie gemeinsam!
    </Post>
  </Section>
</GenericPage>
