<script lang="ts">
  import { page } from '$app/stores';
  import GenericPage from '$lib/components/GenericPage.svelte';

  import Icon from '$lib/components/Icon.svelte';
  import Section from '$lib/components/Section.svelte';
  import { Content, Navbar, NavbarItem, PageTitle, Shell } from '$lib/components/old/Layout';

  import style from '$lib/styles/theme.module.pcss';
  import Layout from './(pages)/+layout.svelte';
</script>

<Layout
  backFunction={() => {
    if ($page.status !== 404) {
      location.replace('/');
    } else {
      history.back();
    }
  }}
>
  <GenericPage>
    <Section title="{$page.status} – {$page.error?.message}">
      <div class="icon">
        <Icon name="robot-2" variant="fill" />
      </div>
      <div>
        {#if $page.status === 404}
          <p>
            Diese Seite existiert nicht. This page does not exist. Check if the URL is correct.
            Maybe the page has been deleted.
          </p>
        {:else}
          <p>Oops, das sollte nicht passieren.</p>
        {/if}
        {#if $page.status !== 404}
          <ul>
            <li>
              <a href="https://codeberg.org/mint/Treehouse/issues" target="_blank">Issue tracker</a>
            </li>
            <li>
              <a
                href="mailto:m1n7mail@proton.me?subject=Treehouse%20Issue&body=Status%3A%20{$page.status}%0D%0AMessage%3A%20{$page
                  .error?.message}">Developer E-Mail</a
              >
            </li>
          </ul>
        {/if}
      </div>
    </Section>
  </GenericPage>
</Layout>

<PageTitle title="[{$page.status}] {$page.error?.message}" />

<Shell>
  <Content></Content>
  <Navbar>
    <NavbarItem label="Back to the App" href="/" />
  </Navbar>
</Shell>

<style lang="postcss">
  .icon {
    font-size: 5rem;
    text-align: center;
    color: var(--color-primary-variant);
  }
</style>
