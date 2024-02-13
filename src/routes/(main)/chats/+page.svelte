<script lang="ts">
  import GenericPage from '$lib/components/GenericPage.svelte';
  import Section from '$lib/components/Section.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
</script>

<GenericPage>
  <Section title="Bundesweit">
    <Button href="https://t.me/+7RqfCSV92ktmYTQ0" useExternalIcon>
      <Icon slot="icon" name="megaphone" />
      Broadcast
    </Button>
    <Button href="https://t.me/+7RqfCSV92ktmYTQ0" useExternalIcon>
      <Icon slot="icon" name="discuss" />
      Plaudertasche
    </Button>
  </Section>

  <Section title="IT AG">
    <Button>LG IT Intern</Button>
    <Button>LG Datenbanken</Button>
    <Button>LG Website</Button>
  </Section>
</GenericPage>
