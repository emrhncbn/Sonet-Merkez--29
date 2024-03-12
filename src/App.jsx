import { useState, useRef } from 'react';
import sonnetsData from './data/sonnetsData';
import Header from './components/Header';
import './styles.css';

export default function App() {
  const inputRef = useRef();
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])

  function handleClick() {
    const inputText = inputRef.current.value.trim()
    setSearchInput(inputText)
    const results = sonnetsData.filter((sonnet) =>
      sonnet.lines.join(" ").toLowerCase().includes(inputText.toLowerCase())
    )
    setSearchResults(results)
  }

  /* Challenge

  Kullanıcı " Arama " butonuna tıkladığında, input alanına yazdığı metin searchInput state'inin değeri olur (bu kod zaten yazılmıştı).    
 1. SonnetsData array'indeki satırlarından birinde searchInput değerini içeren her bir sonnet için "sonnets-container" div'inde className'i "sonnet" olan bir div oluşturun (satır 27). 
    
    2. "sonnet" div'inde, sonenin number özelliğini bir <h3> öğesinin metin içeriği olarak ekleyin ve ardından lines özelliğinden/dizisinden sonenin *her* satırını bir <p> öğesinin text içeriği olarak ekleyin, böylece sonenin her satırı için bir <p> elde edin. 
       
    3. "Love", "summer", "winter" ve "strange" gibi yaygın sözcüklerin yanı sıra "hello" ve "weird" gibi hiçbir sonede geçmeyen sözcükleri arayarak kodunuzu test edin.
*/


  return (
    <div className='wrapper'>
      <Header searchProps={{ inputRef, handleClick }} />

      <div className='sonnets-container'>
        {searchResults.length > 0 ? (
          searchResults.map((sonnet) => (
            <div className='sonnet' key={crypto.randomUUID()}>
              <h3>{sonnet.number}</h3>
              {sonnet.lines.map((line) => (
                <p key={crypto.randomUUID()}>
                  {line.split(' ').map((word, index) => (
                    <span key={crypto.randomUUID()} className={word.toLowerCase() === searchInput.toLowerCase() ? 'highlight' : ''}>
                     {word + ' '}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          ))
        ) : (
          <p className='no-results-message'>Ne yazık ki, araman sonucunda hiçbir şey bulamadın.</p>
        )}
      </div>
    </div>
  )
}

/*Bonus Challenges
      
    - Arama sonucu yoksa, "sonnets-container" div'inde "Ne yazık ki, araman sonucunda hiçbir şey bulamadın." yazan bir <p> öğesi oluşturun. <p> öğesine "no-results-message" şeklinde bir className verin. 
      
    - Sonuçlar varsa, sonedeki searchInput değeriyle eşleşen her kelimenin etrafına bir <span> koyun. Böylece kelime otomatik olarak vurgulanacaktır (CSS zaten ayarlanmıştır). 
*/
