import { useRouter } from 'next/router';

export default function Coin() {
  const router = useRouter();
  return <div className='content'>
    <h1>{router.query.single} info page</h1>
    TODO: More info...
  </div>;
}
