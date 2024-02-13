<script lang="ts">
  import { enhance } from '$app/forms';

  import GenericPage from '$lib/components/GenericPage.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextEntry from '$lib/components/Input/TextEntry.svelte';
  import Combobox from '$lib/components/Input/Combobox.svelte';
  import Button from '$lib/components/Button.svelte';
</script>

<GenericPage>
  <Section title="Profil erstellen">
    <form method="post" use:enhance>
      <TextEntry
        name="name"
        label="Name"
        helperText="Wie möchtest du angesprochen werden?"
        required
      />
      <TextEntry
        name="zip"
        label="Bundesland"
        helperText="Welcher Region fühlst du dich zugehörig?"
        required
      />
      <TextEntry name="phone" type="tel" label="Telefon" />
      <TextEntry name="email" type="email" label="E-Mail" />
      <div class="actions">
        <Button type="submit" variant="primary">Registrieren</Button>
        <Button href="/login" replaceState>Ich habe bereits ein Profil</Button>
      </div>
    </form>
  </Section>
</GenericPage>

<style lang="postcss">
  form {
    display: contents;
  }

  .actions {
    display: flex;
    /* flex-direction: row-reverse; */
    /* align-content: start; */
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-block-start: 1rem;
  }
</style>
