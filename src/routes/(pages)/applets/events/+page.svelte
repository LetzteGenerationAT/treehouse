<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import ButtonGroup from '$lib/components/ButtonGroup.svelte';
  import Event from '$lib/components/Event.svelte';
  import GenericPage from '$lib/components/GenericPage.svelte';
  import Section from '$lib/components/Section.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<GenericPage>
  <ButtonGroup>
    <Button>Neues Event planen</Button>
  </ButtonGroup>
  <Section title="In Planung">
    {#each data.events as event}
      <Event
        title={event.title}
        date={event.startsAt}
        location={event.location}
        href="events/{event.id}"
        thumbnailUrl={event.thumbnailUrl}
      />
    {/each}
  </Section>
  <Section title="Veröffentlicht">
    <Event
      title="Protesttraining"
      date="1. Jänner"
      location="Praterstern, Wien"
      href="training/0"
      thumbnailUrl="https://picsum.photos/200"
    />
  </Section>
</GenericPage>
