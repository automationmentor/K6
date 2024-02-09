import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
  const result=http.get('http://test-api.k6.io/');
  sleep(1);
  check(result,{
    'http response code is 200':r => r.status === 200,

  })
}