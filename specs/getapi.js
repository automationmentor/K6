import http from 'k6/http';
import { sleep, check } from 'k6';

export default function() {

    http.get('https://k6.io');
    sleep(1);


}