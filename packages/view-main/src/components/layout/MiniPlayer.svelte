<script lang="ts">
  import Image from '@/components/base/Image.svelte'
  import PlayerProgressBar from '@/components/common/PlayerProgressBar.svelte'
  import ToggleMiniPlayerBtn from '@/components/common/ToggleMiniPlayerBtn.svelte'
  import PlayBtns from '@/components/layout/PlayBar/components/PlayBtns.svelte'
  import PlayInfo from '@/components/layout/PlayBar/components/PlayInfo.svelte'
  import { musicInfo } from '@/modules/player/reactive.svelte'

  const pic = $derived($musicInfo.pic)
</script>

<div class="mini-player">
  <div class="drag-handle drag"><span>Any Listen</span></div>
  <div class="player-main no-drag">
    <div class="cover">
      <Image decoding="async" loading="eager" src={pic} />
    </div>
    <PlayInfo />
    <div class="transport">
      <PlayBtns />
    </div>
    <ToggleMiniPlayerBtn />
  </div>
  <div class="progress-wrap">
    <PlayerProgressBar />
  </div>
</div>

<style lang="less">
  .mini-player {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 10px 9px;
    background-color: var(--color-content-background);
  }

  .drag-handle {
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    height: 16px;
    color: var(--color-font-label);
    font-size: 10px;
    opacity: 0.55;
    user-select: none;
  }

  .player-main {
    display: flex;
    flex: auto;
    flex-flow: row nowrap;
    align-items: center;
    min-width: 0;
    gap: 8px;
  }

  .cover {
    flex: none;
    width: 52px;
    height: 52px;
    overflow: hidden;
    border-radius: 6px;
    background-color: var(--color-primary-light-800);

    :global(img) {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  :global(.mini-player .player-main > .container) {
    flex: auto;
    min-width: 55px;
  }

  .transport {
    flex: none;
    height: 62px;
  }

  .progress-wrap {
    position: relative;
    flex: none;
    height: 5px;
    margin: 0 3px;
  }
</style>
