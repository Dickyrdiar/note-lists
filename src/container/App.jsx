/* eslint-disable react/no-unknown-property */
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CardComponent from "../components/Card"
// import NavbarComponent from "../components/Navbar"
import PopupForm from "../components/PopupForm"
import IconPlus from '../assets/add.png'
import ContainerBackground from "../components/ContainerBackgrund"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [titleNote, setTitleNote] = useState('')
  const [descNote, setDescNote] = useState('')
  const [saveData, setSaveData] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  const handleChangeTitle = (e) => {
    setTitleNote(e.target.value)
  }

  const hadleDescNote = (e) => {
    setDescNote(e.target.value)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData')) || []
    setSaveData(data)
  }, [])

  const handleClickDetail = (val) => {
    console.log(val)
    history(`/detail-note/${val}`)
    localStorage.setItem('dataDetail', JSON.stringify(val))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newData = {
      id: Date.now(),
      titleNote,
      descNote,
      date: new Date().toUTCString()
    }
    setSaveData([...saveData, newData])
    setTitleNote('')
    setDescNote('')
    localStorage.setItem('formData', JSON.stringify([...saveData, newData]))
  }

  const handleDelete = (val) => {
    const existingNote = JSON.parse(localStorage.getItem('formData')) || []
    const updateNotes = existingNote.filter((note) => note.id !== val)

    localStorage.setItem('formData', JSON.stringify(updateNotes))
    window.location.reload()
    setLoading(true)
  }

  console.log('title', loading);

  return (
    <>
      <ContainerBackground>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <div className="flex justify-between w-30 pt-10">
              <div>
                <button onClick={handleShowModal}>
                    <img 
                      src={IconPlus} 
                      alt="plus" 
                      width='80'
                    />
                  </button>
              </div>

              <div>
                <p className="text-4xl font-bold max-w-1xl  text-indigo-600 ml-10 pt-4">
                    Create your note Here  
                </p>
              </div>
            </div>
            <PopupForm 
              showModal={showModal} 
              closeModal={handleHideModal}
              titleNote={titleNote}
              handleChangeNote={handleChangeTitle}
              descNote={descNote}
              handleChangeDesc={hadleDescNote}
              handleSubmit={handleSubmit}
            />
          </div>
          

          <div className="max-w-6xl w-full flex items-center justify-center w-full h-full">
            <div className="container mx-auto w-90 justify-center flex item-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {saveData?.map((val) => (
                  <CardComponent 
                    key={val.id} 
                    onClickCard={() => handleClickDetail(val)} 
                    titleCard={val.titleNote}
                    dateCard={val.date}
                    deleteCard={() => handleDelete(val.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerBackground>
    </>
  )
}

export default App
