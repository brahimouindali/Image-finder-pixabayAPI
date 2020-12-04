import { useState } from 'react';
import useImages from './hooks/useImages';
import Header from './components/Header';
import ImagesGrid from './components/ImagesGrid';

function App() {
  const [query, setQuery] = useState('')
  const [amount, setAmount] = useState(5)
  const { collection } = useImages(query, amount)

  return (
    <>
      <Header query={query} setQuery={setQuery} amount={amount} setAmount={setAmount} />
      {collection && (<ImagesGrid images={collection} />)}
    </>
  );
}

export default App;
