import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure({ host: '192.168.0.10' })
  .useReactNative()
  .connect();

console.tron = tron;

tron.clear();
