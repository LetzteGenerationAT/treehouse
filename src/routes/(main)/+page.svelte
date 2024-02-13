<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Checklist from '$lib/components/Checklist.svelte';
  import ChecklistItem from '$lib/components/ChecklistItem.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import Event from '$lib/components/Event.svelte';
  import Post from '$lib/components/Post.svelte';
</script>

<div class="page">
  <Section title="Mitmachen">
    <p>
      Schön, dass du zu uns gefunden hast. Das sind die nächsten Schritte, um deine Rolle im
      friedlichen Widerstand zu finden.
    </p>
    <Checklist>
      <ChecklistItem
        title="Komm zum Infoabend"
        description="Ein Vortrag über die Klimakatastrophe und die Letzte Generation – mit Fragen und Antworten"
      />
      <Divider />
      <ChecklistItem
        title="Profil vervollständigen"
        description="Erzähl uns doch ein bisschen von dir"
        href="/signup"
      />
      <!-- <Divider />
      <ChecklistItem
        title="Protesttraining"
        description="Infos zu Zivilem Widerstand. Hier lernst du auch, wie du dich auf der Straße richtig verhälst."
      />
      <Divider />
      <ChecklistItem
        title="AG Call"
        description="Lerne die Menschen in deiner Arbeitsgruppe kennen"
      />
      <Divider />
      <ChecklistItem
        title="App installieren"
        description="Offline-Zugriff, Benachrichtigungen zu Fristen und Terminen"
      /> -->
    </Checklist>
  </Section>

  <Section title="Events">
    <Event
      title="Protesttraining"
      date="1. Jänner"
      location="Praterstern, Wien"
      href=""
      thumbnailUrl="https://picsum.photos/200"
    />
  </Section>

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
</div>

<style lang="postcss">
  .page {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 3rem;
  }
</style>
