export enum VideoFileType {
  MP4 = 'mp4',
  VIDEO = 'video/mp4', // support type old data in db
}

export const CONTENT_FILE_SUPPORTED: string[] = [VideoFileType.MP4, VideoFileType.VIDEO];
