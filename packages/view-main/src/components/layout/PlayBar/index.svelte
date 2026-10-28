<script>
  import CenterBar from './CenterBar.svelte'
  import CenterMiddleBar from './CenterMiddleBar.svelte'
  import CenterFullBar from './CenterFullBar.svelte'
  import { useSettingValue } from '@/modules/setting/reactive.svelte'

  const playBarProgressStyle = useSettingValue('common.playBarProgressStyle')
</script>

{#if playBarProgressStyle.val == 'middle' || playBarProgressStyle.val == 'centerControlMiddle'}
  <CenterMiddleBar />
{:else if playBarProgressStyle.val == 'full' || playBarProgressStyle.val == 'centerControlFull'}
  <CenterFullBar />
{:else}
  <CenterBar />
{/if}
