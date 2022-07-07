// global.d.ts
// global な type 宣言

type Log = {
  id: string;
  timeStamp: string;
  direction: string;
  statusCode: string;
  data: string;
  body: string;
};
type NotificationData = {
  path: string;
  body: string;
};
type IdInfo = {
  deviceType: string;
  id: string;
};

export {
  Log,
  NotificationData,
  IdInfo,
};