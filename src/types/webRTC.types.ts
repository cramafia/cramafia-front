export enum MediaStreamTrackType {
  VIDEO = 'video',
  AUDIO = 'audio',
}

export type MediaDevicesType = Record<
  MediaStreamTrackType,
  MediaDeviceInfo | undefined
>
