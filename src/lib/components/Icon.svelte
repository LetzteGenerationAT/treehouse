<script lang="ts">
  import 'remixicon/fonts/remixicon.css';

  export let icon: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let variant: 'fill' | 'line' = 'line';

  if (!(icon || name)) {
    throw 'Specify icon or name';
  }
</script>

<i class={icon ? icon : `ri-${name}-${variant}`} />

<style lang="postcss">
  i {
    line-height: 1;
  }
</style>
