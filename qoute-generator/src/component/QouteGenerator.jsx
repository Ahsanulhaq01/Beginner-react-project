import {useState,useRef , useEffect}from 'react'


function QouteGenerator() {
    const [qouteText ,setQoute] = useState(JSON.parse(localStorage.getItem('quote')) || {});
  const [copyQoute , setCopyQoute] = useState('Copy Qoute');
  const refQoutePara = useRef(null);

 

  useEffect(()=>{
    localStorage.setItem('quote' ,JSON.stringify(qouteText));

  },[qouteText])

  async function getQoute() {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    let id = Math.floor(Math.random()*30 +1);
    setQoute({
      qoute : data.quotes[id].quote,
      authorName : data.quotes[id].author,
      
    })

  }
  function handleCopyText(){
    window.getSelection().selectAllChildren(refQoutePara.current)
    navigator.clipboard.writeText(qouteText.qoute);
    setCopyQoute('copied')
    setTimeout(() => {
      setCopyQoute('Copy Quote');
      window.getSelection().removeAllRanges();
    }, 1500);
  }


  return (
    <>
    <div className="app-container">
        <button className="copy-qoute"value={copyQoute} onClick={handleCopyText}>{copyQoute}</button>
        <div className="comma-1 comma">&ldquo;</div>
        <div className="qoute-content">
         <p ref={refQoutePara}>{qouteText.qoute}</p>
        </div>
        <div className="comma-2 comma">&rdquo;</div>
        <p className="author-name">{qouteText.authorName}</p>
        <button className='new-btn' onClick={()=> getQoute()}>New Qoute</button>
     
      </div>
    </>
  )
}

export default QouteGenerator