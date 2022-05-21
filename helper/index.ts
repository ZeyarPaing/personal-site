export function getAbsoluteUrl(route: string) {
  const localHost = 'http://localhost:3000/api';
  const sever = 'https://app.vercel.app/api';
  const url = localHost + route;
  console.log('url is : ', url);
  return url;
}
