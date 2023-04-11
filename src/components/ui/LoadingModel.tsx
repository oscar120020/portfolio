import { Html } from '@react-three/drei';
import ReactLoading from 'react-loading';

export const LoadingModel = () => {
  return (
    <Html>
        <ReactLoading type="spin" color="#fff" height={50} width={50} />
    </Html>
  )
}
