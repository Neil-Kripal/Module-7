import { useEffect } from "react";
import { useState } from "react";

export function UseEffectDemo() {
  const [displayText, updateText] = useState("");
  const [products, setProducts] = useState([]);
  console.log('Re-Rendered');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${displayText}`)
      .then((response) => response.json())
      .then((json) => setProducts(json));
      
    console.log('useEffect in action');
  }, [displayText]);

  return (
    <>
      <div>
        <p>{displayText}</p>
      </div>
      <div>
        <button onClick={() => updateText('Posts')}>Posts</button>
        <button onClick={() => updateText('Users')}>Users</button>
        <button onClick={() => updateText('Comments')}>Comments</button>
      </div>
      <div>
        <p>{products.map(product=>{return <pre>{JSON.stringify(product)}</pre>})}</p>
      </div>
    </>
  );
}
