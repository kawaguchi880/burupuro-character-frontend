import { useEffect, useState } from 'react';

export async function getServerSideProps() {
  const data = JSON.stringify({ time: new Date() });
  return { props: { data } };
}

export default function Home() {
  const [messege, setMessege] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/')
      .then((res) => res.text())
      .then((data) => setMessege(data));
  }, []);

  return (
    <div>
      <h1>Next.js + Flask!!</h1>
      <p>{messege}</p>
    </div>
  );
}
