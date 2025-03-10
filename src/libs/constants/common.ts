export const DATE_YYYYMMDD = 'YYYYMMDD';
export const DATE_YYYYMMDD_HHMM = 'YYYYMMDDHHmm';
export const DATE_YYYYMMDDHHMMSS = 'YYYY-MM-DD HH:mm:ss';
export const REFRESH_TOKEN_COOKIE_NAME = 'OTC_Refresh_Token';
export const SERVER_ERROR_MESSAGE = 'Something went wrong';

export const UPLOAD_PATH = process.env['UPLOAD_PATH'] || 'upload';

export enum PrefixModel {
  EXAM = 'EXM',
  EXAM_USER = 'EXU',
  USER_EXAM_QUESTION = 'UEQ',
  QUESTION = 'QUE',
  ANSWER = 'ANS',
  SKILL = 'SKL',
  COURSE = 'CRS',
  ATTACHMENT = 'ATC',
  CATEGORY = 'CATE',
  SECTION = 'SCT',
  LECTURE = 'LCT',
}
