<script lang="ts">
  import QRCode from 'qrcode';

  export let data: string;

  let dataUrl: string;
  QRCode.toDataURL(data).then((url) => {
    dataUrl = url;
  });
</script>

<div class="qrcode">
  <img src={dataUrl} alt="QR Code" />
</div>

<style lang="postcss">
  .qrcode {
    border-radius: 1.25rem;
    overflow: hidden;

    pointer-events: none;
    user-select: none;
  }

  img {
    display: block;
    inline-size: 100%;

    image-rendering: pixelated;
  }
</style>
