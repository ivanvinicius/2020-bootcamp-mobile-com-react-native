import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * Configurando baseURL
 * 
 * Android com emulador com localhost: ($ adb reverse tcp:3333 tcp:3333)
 * Android com emulador do android studio com IP: 10.0.2.2
 * Android com dispositivo fisico: IP do dispositivo 
 */