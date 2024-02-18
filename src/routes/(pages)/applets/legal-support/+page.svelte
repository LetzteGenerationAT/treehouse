<script lang="ts">
  import { Content, EmptyState, Header, PageTitle } from '$lib/components/old/Layout';
  import { Button } from '$lib/components/old/Input';
  import Icon from '$lib/components/Icon.svelte';

  import style from '$lib/styles/theme.module.pcss';
</script>

<PageTitle title="Legal Support" />

<Header direction="column">
  <h1 class={style.typeTitle}>Legal Support</h1>
  <Button variant="secondary" size="small" href="legal-support/supporter">Verfahren Betreuen</Button
  >
</Header>

<Content>
  <EmptyState title="Noch keine Verfahren">
    Lade ein Dokument hoch oder kontaktiere die Legal AG für konkrete Fragen.
  </EmptyState>
  <Button slot="float" variant="tertiary"
    ><Icon slot="icon" name="file-upload" variant="fill" />Hochladen</Button
  >
</Content>

<style lang="postcss">
  .fabWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
