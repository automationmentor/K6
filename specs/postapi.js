import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
  //vus: 1,
  //duration: '1s',
};

export default function () {
    const url='https://dummyjson.com/auth/login';
    const payload=JSON.stringify({
    
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })

    const params= {
        headers: { 'Content-Type': 'application/json' },
    }

  const res=http.post(url,payload,params);
  console.log(res);

  check(res,{
    'http response code is 200':r => r.status === 200,
    'res body has username':r => r.body.includes('kminchelle'),
  })

  
}