<script>
  import { Content, Header, PageTitle } from '$lib/components/old/Layout';
  import { Button } from '$lib/components/old/Input';
  import { Icon } from '$lib/components/Icon.svelte';

  import style from '$lib/styles/theme.module.pcss';
  import EventCard from '$lib/components/old/Event/EventCard.svelte';
</script>

<PageTitle title="Events" />

<Header>
  <h1 class={style.typeTitle}>Events</h1>
  <div class="toolbar">
    <Button size="small"><Icon name="search" /></Button>
    <Button size="small"><Icon name="filter" /></Button>
  </div>
</Header>

<Content>
  <EventCard
    name="Protest"
    date={new Date()}
    location="Example Street"
    href="/"
    thumbnailUrl="https://picsum.photos/500?random=1"
    thumbnailAlt="Random"
  />
  <EventCard
    name="Discussion"
    date={new Date()}
    location="Online"
    href="/"
    thumbnailUrl="https://picsum.photos/500?random=2"
    thumbnailAlt="Random"
  />
  <EventCard
    name="Camp"
    date={new Date()}
    location="Event Space"
    href="/"
    thumbnailUrl="https://picsum.photos/500?random=3"
    thumbnailAlt="Random"
  />

  <Button slot="float" variant="tertiary">
    <Icon slot="icon" name="calendar-event" variant="fill" />New Event</Button
  >
</Content>
