<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Drawer from '$lib/components/Drawer.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';

  let showQrDialog = false;
</script>

<div class="training">
  <Section title="Protesttraining">
    <div class="details">
      <span class="date"><Icon name="calendar" variant="fill" /> 1. Jännder</span>
      <span class="location"><Icon name="map-pin" variant="fill" /> Wien</span>
    </div>
    <div class="actions">
      <Button variant="secondary">
        Bearbeiten
        <Icon slot="icon" name="edit" />
      </Button>
      <Button
        variant="secondary"
        on:click={() => {
          showQrDialog = true;
        }}
      >
        QR Code
        <Icon slot="icon" name="qr-code" />
      </Button>
    </div>
  </Section>

  <Section title="Teilnehmer:innen">
    <table>
      <tr>
        <th>Name</th>
        <th>Anwesend</th>
      </tr>
      <tr>
        <td>Erika Muster</td>
        <td><input type="checkbox" name="" id="" /></td>
      </tr>
    </table>
  </Section>
</div>

<Drawer bind:show={showQrDialog}></Drawer>

<style lang="postcss">
  .training {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
