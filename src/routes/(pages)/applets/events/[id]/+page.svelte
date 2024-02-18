<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Drawer from '$lib/components/Drawer.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import GenericPage from '$lib/components/GenericPage.svelte';

  import type { PageData } from './$types';
  import ButtonGroup from '$lib/components/ButtonGroup.svelte';

  export let data: PageData;

  let showQrDialog = false;
</script>

<GenericPage>
  <img
    class="thumbnail"
    src={data.event.thumbnailUrl ?? 'https://picsum.photos/seed/8888/768'}
    alt={data.event.thumnailAlt ?? 'Event'}
  />

  <Section title={data.event.title}>
    <div class="details">
      <span class="date"
        ><Icon name="calendar" variant="fill" /> {data.event.startsAt?.toLocaleString()}</span
      >
      <span class="location"><Icon name="map-pin" variant="fill" /> {data.event.location}</span>
    </div>

    <ButtonGroup>
      {#if data.event?.registrationRequired}
        <Button variant="primary">
          Anmelden
          <Icon slot="icon" name="user-add" />
        </Button>
      {/if}
      {#if data.canEdit}
        <Button variant={data.event?.registrationRequired ? null : 'secondary'} href="edit">
          Bearbeiten
          <Icon slot="icon" name="edit" />
        </Button>
      {/if}
      {#if data.icsCalendarBlob}
        <Button href={URL.createObjectURL(data.icsCalendarBlob)} download="{data.event.title}.ics">
          Zu Kalender hinzufügen
          <Icon slot="icon" name="calendar-event" />
        </Button>
      {/if}
      {#if data.canEdit && data.event.checkAttendance}
        <Button
          on:click={() => {
            showQrDialog = true;
          }}
        >
          Anwesenheit
          <Icon slot="icon" name="qr-code" />
        </Button>
      {/if}
    </ButtonGroup>
  </Section>

  {#if data.canEdit}
    <Section title="Teilnehmer:innen">
      <table>
        <tr>
          <th>Teilnehmer:in</th>
          <th>Anwesend</th>
        </tr>
        <tr>
          <td>Erika Muster</td>
          <td><input type="checkbox" name="" id="" /></td>
        </tr>
      </table>
    </Section>
  {/if}
</GenericPage>

<Drawer bind:show={showQrDialog}></Drawer>

<style lang="postcss">
  .thumbnail {
    border-radius: 1.25rem;
    max-inline-size: 100%;
    max-block-size: 10rem;
    object-fit: cover;
  }
</style>
