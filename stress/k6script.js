import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus:500,
  duration: '10s',

};

export default function () {
  const res = http.get('http://localhost:8000/');

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  //sleep(.5);
}

