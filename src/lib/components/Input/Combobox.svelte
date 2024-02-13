<script lang="ts">
  import { Select } from 'bits-ui';
</script>

<Select.Root>
  <Select.Trigger class="root" aria-label="foo">
    <Select.Value placeholder="lorem" />
  </Select.Trigger>

  <Select.Content>
    <Select.Item value="one">
      <Select.ItemIndicator />
    </Select.Item>

    <Select.Group>
      <Select.Label />
      <Select.Item value="one">
        <Select.ItemIndicator />
      </Select.Item>
    </Select.Group>

    <Select.Arrow />
  </Select.Content>
</Select.Root>

<style lang="postcss">
  [data-select-trigger] {
    background-color: var(--color-surface);
  }
</style>
