<script lang="ts">
  import Btn from '@/components/base/Btn.svelte'
  import { miniPlayerState, toggleMiniPlayerMode } from '@/modules/app/miniPlayer.svelte'
  import { t } from '@/plugins/i18n'

  const label = $derived($t(miniPlayerState.isMiniPlayer ? 'player.exit_mini_player' : 'player.open_mini_player'))
</script>

<div class="icon">
  <Btn icon link onclick={toggleMiniPlayerMode} aria-label={label}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      {#if miniPlayerState.isMiniPlayer}
        <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" />
        <path d="M9 3H3v6M3 3l6 6m6 6 6 6m0 0h-6m6 0v-6" />
      {:else}
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
        <rect x="12" y="11" width="6" height="5" rx="1" fill="currentColor" stroke="none" />
      {/if}
    </svg>
  </Btn>
</div>

<style lang="less">
  .icon :global {
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      padding: 0;
      color: inherit !important;
      opacity: 0.55;
      transition: opacity @transition-normal;

      &:hover {
        opacity: 0.9;
      }
      &:active {
        opacity: 1;
      }
    }
  }
</style>
