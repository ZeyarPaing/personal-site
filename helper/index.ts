export function getAbsoluteUrl(route: string) {
  let host = '';
  switch (process.env.NODE_ENV) {
    case 'development':
      host = 'http://192.168.100.44:3000/';
      break;
    case 'production':
      host = 'https://zeyar.dev/';
      break;
  }

  const url = host + 'api' + route;
  // console.log('url is : ', url);
  return url;
}
