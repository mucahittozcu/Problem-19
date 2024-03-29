import { useEffect, useRef, useState } from 'react'

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false)
  const openButton = useRef(null)
  const closeButton = useRef(null)
 
  function openModal() {
    setOpen(true)
    openButton.current.focus()

  }
  
  function closeModal() {
    setOpen(false)
   closeButton.current.focus()
  }

  return (
    <>
      <button ref={openButton} onClick={openModal}>Modalı aç</button>
      {isOpen &&
      <Modal>
        <h1 className='pb-2 text-lg font-bold'>Modal açık</h1>
        <button ref={closeButton} onClick={closeModal}>Kapalı</button>
      </Modal>
      }
      
    </>
  )
}

function Modal({ children }) {
  let ref = useRef(null)
useEffect(() => {
  if(ref.current){

    ref.current.showModal()
  }
},[])
  return <dialog ref={ref} className='border-2 border-black p-4'>{children} </dialog>
}
