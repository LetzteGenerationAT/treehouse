<script>
  import { Content, EmptyState, Header, PageTitle } from '$lib/components/old/Layout';
  import { Button } from '$lib/components/old/Input';
  import Icon from '$lib/components/Icon.svelte';

  import style from '$lib/styles/theme.module.pcss';
</script>

<Content>
  <EmptyState title="No Tickets">
    <p>You haven't created any tickets yet.</p>
  </EmptyState>

  <Button slot="float" variant="tertiary">
    <Icon slot="icon" name="questionnaire" variant="fill" />New Ticket</Button
  >
</Content>

<style lang="postcss">
</style>
