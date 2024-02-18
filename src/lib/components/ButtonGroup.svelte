<div>
  <slot />
</div>

<style lang="postcss">
  div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* justify-content: ; */
    gap: 0.5rem;

    & > * {
      flex: 1 1 0;
    }

    @media (min-width: 512px) {
      flex-direction: row;
    }
  }

  /* div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, auto));
    grid-auto-columns: min-content;
    gap: 0.5rem;

    & > * {
      
    }
  } */
</style>
