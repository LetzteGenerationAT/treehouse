<script lang="ts">
  import { enhance } from '$app/forms';

  import type { PageData } from './$types';

  import Section from '$lib/components/Section.svelte';
  import Drawer from '$lib/components/Drawer.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import QrCode from '$lib/components/QrCode.svelte';

  export let data: PageData;

  let showQrDialog = false;
</script>

<div class="page">
  {#if data.profile}
    <Section title="Mein Profil">
      <div class="profile">
        <div class="picture">
          {#if data.profile.pictureUrl}
            <img src={data.profile.pictureUrl} alt="Profil" />
          {:else}
            <Icon name="user" />
          {/if}
        </div>
        <div class="details">
          <h3>{data.profile.displayName}</h3>
          <span class="pronouns">{data.profile.bio ?? ''}</span>
          <span class="bio">{data.profile.bio ?? ''}</span>
        </div>
      </div>
      <div class="actions">
        <Button
          variant="secondary"
          useExternalIcon={true}
          on:click={() => {
            showQrDialog = true;
          }}
        >
          QR Code
          <Icon slot="icon" name="qr-code" />
        </Button>
        <Button useExternalIcon={true}>
          Profil bearbeiten
          <Icon slot="icon" name="edit" />
        </Button>
        <Button href="/logout" useExternalIcon={true}>
          Ausloggen
          <Icon slot="icon" name="logout-box" />
        </Button>
      </div>
    </Section>

    <Section title="Debug Info">
      <details open>
        <summary>JSON Dump</summary>
        <div class="dump">
          <pre><code>{JSON.stringify(data, null, 4)}</code></pre>
        </div>
      </details>
    </Section>

    <Drawer bind:show={showQrDialog}>
      <div class="drawer">
        <p>
          Zeige diesen Code bei Events und Protesten, um deine Anwesenheit zu bestätigen. Dabei
          werden keine persönlichen Daten übermittelt.
        </p>
        <div class="qr">
          <QrCode data="https://baumhaus.community/profile?rotatingId={data.rotatingId}" />
          <code>{data.rotatingId}</code>
        </div>
      </div>
    </Drawer>
  {:else}
    <Section title="Profil">
      <p>Du hast noch kein Profil? Kein Problem!</p>
      <div class="actions">
        <Button variant="primary" useExternalIcon={true} href="/signup">
          Profil erstellen
          <Icon slot="icon" name="user-add" />
        </Button>
        <Button useExternalIcon={true} href="/login/oauth">
          Anmelden
          <Icon slot="icon" name="login-box" />
        </Button>
      </div>
    </Section>
  {/if}
</div>

<style lang="postcss">
  .page {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 3rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    border-radius: 1.25rem;
    padding: 0.75rem;

    color: var(--color-on-surface);

    background-color: var(--color-surface);

    & .picture {
      display: flex;
      border-radius: 1rem;
      aspect-ratio: 1;
      inline-size: 100%;
      max-inline-size: 4rem;
      block-size: auto;
      overflow: hidden;

      background-color: var(--color-surface-variant);

      & img {
        inline-size: 100%;
        block-size: 100%;
        object-fit: cover;
        object-position: center;
      }

      & i {
        margin: auto;
        font-size: 1.5rem;
        color: var(--color-on-surface-variant);
      }
    }

    & .details {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0.75rem;
      padding-block-start: 0;

      text-align: center;
    }

    & h3 {
      margin: 0;
      line-height: 1;
    }

    & .pronouns {
      margin-block-end: 0.25rem;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rem;

    & > * {
      flex: 1;
    }

    @media (min-width: 512px) {
      flex-flow: row nowrap;
      justify-content: stretch;
    }
  }

  .dump {
    overflow-x: auto;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    text-align: center;
    color: var(--color-on-surface);

    & code {
      display: inline-block;
      padding-block-start: 1rem;
    }

    & .qr {
      margin: auto;
      inline-size: 100%;
      max-inline-size: 392px;
    }

    @media (min-width: 768px) {
      flex-direction: row-reverse;
      align-items: center;
      

      & p {
        max-inline-size: 512px;
        padding-inline: 1.5rem 2.5rem;
        padding-block-end: 1rem;
      }
    }
  }
</style>
