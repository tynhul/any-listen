import { setMiniPlayerWindowMode } from '@/shared/ipc/app'

export const miniPlayerState = $state({
  isMiniPlayer: false,
})

export const setMiniPlayerMode = async (isMini: boolean) => {
  if (miniPlayerState.isMiniPlayer === isMini) return
  await setMiniPlayerWindowMode(isMini)
  miniPlayerState.isMiniPlayer = isMini
}

export const toggleMiniPlayerMode = async () => {
  await setMiniPlayerMode(!miniPlayerState.isMiniPlayer)
}
