import { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import { changeMediaStreams } from '@/reducers/global.reducer'
import { MediaStreamTrackType, MediaDevicesType } from '@/types/webRTC.types'

interface Return {
  allDevices: MediaDeviceInfo[]
  getDevice: (
    item: MediaDeviceInfo | MediaStreamTrack
  ) => MediaDeviceInfo | undefined
  setDevice: (
    type: MediaStreamTrackType,
    deviceId: MediaDeviceInfo['deviceId']
  ) => Promise<void>
  getTypeDevices: (type: MediaDeviceInfo['kind']) => MediaDeviceInfo[]
  currMediaDevices: MediaDevicesType
}

export const useMediaDevices = (): Return => {
  const [allDevices, setAllDevices] = useState<MediaDeviceInfo[]>([])
  const dispatch = useDispatch()
  const mediaStreams = useSelector(
    (state: StateType) => state.global.mediaStreams
  )

  const getDevice = (
    item: MediaDeviceInfo | MediaStreamTrack | null
  ): MediaDeviceInfo | undefined => {
    return allDevices.find((d) => d.label === item?.label)
  }

  const currMediaDevices = useMemo<MediaDevicesType>(
    () => ({
      [MediaStreamTrackType.AUDIO]: getDevice(mediaStreams.audio),
      [MediaStreamTrackType.VIDEO]: getDevice(mediaStreams.video),
    }),
    [mediaStreams, allDevices]
  )

  const setDefaultStreams = async (): Promise<void> => {
    await navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream: MediaStream) => {
        dispatch(
          changeMediaStreams({
            [MediaStreamTrackType.VIDEO]: stream.getTracks()[0],
            [MediaStreamTrackType.AUDIO]: stream.getTracks()[1],
          })
        )
      })
  }

  const getTypeDevices = (type: MediaDeviceInfo['kind']): MediaDeviceInfo[] => {
    return allDevices.filter((d) => d.kind === type)
  }

  const getAllDevices = async (): Promise<MediaDeviceInfo[]> => {
    return navigator.mediaDevices.enumerateDevices()
  }

  const voidHandler = (fn: () => Promise<void>): void => {
    fn()
      .then(() => {})
      .catch(() => {})
  }

  const setDevice = async (
    type: MediaStreamTrackType,
    deviceId: MediaDeviceInfo['deviceId']
  ): Promise<void> => {
    await navigator.mediaDevices
      .getUserMedia({
        [type]: {
          deviceId,
        },
      })
      .then((stream: MediaStream) =>
        dispatch(
          changeMediaStreams({
            [type]:
              stream.getTracks()[Number(type === MediaStreamTrackType.AUDIO)],
          })
        )
      )
  }

  const init = async (): Promise<void> => {
    await setDefaultStreams()
    const allD = await getAllDevices()

    setAllDevices(allD)
  }

  useEffect(() => {
    voidHandler(init)
  }, [])

  return {
    currMediaDevices,
    allDevices,
    getDevice,
    setDevice,
    getTypeDevices,
  }
}
