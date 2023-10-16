/* eslint-disable react/no-unknown-property */
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CardComponent from "../components/Card"
import PopupForm from "../components/PopupForm"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [titleNote, setTitleNote] = useState('')
  const [descNote, setDescNote] = useState('')
  const [saveData, setSaveData] = useState([])
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
    localStorage.setItem('formData', JSON.stringify([...saveData, newData]))
  }

  const handleDelete = (val) => {
    const existingNote = JSON.parse(localStorage.getItem('formData')) || []
    const updateNotes = existingNote.filter((note) => note.id !== val)

    localStorage.setItem('formData', JSON.stringify(updateNotes))
    window.location.reload()
  }

  console.log('title', saveData);

  return (
    <>
      <div className="relative isolate px-3 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-4xl py-32 lg:py-56 w-full">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <button onClick={handleShowModal} className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <p className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                {'+'} Create New
              </p>
            </button>
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

          <div className="max-w-4xl w-full">
            <div className="container mx-auto w-90 justify-center flex item-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {saveData?.map((val) => (
                  <CardComponent 
                    key={val.id} 
                    onClickCard={() => handleClickDetail(val.id)} 
                    titleCard={val.titleNote}
                    dateCard={val.date}
                    deleteCard={() => handleDelete(val.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div 
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            area-hidden="true"
          >
            <div 
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#7b4079] to-[#5a54ae] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
