import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ControllerApp = () => {
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
    history(`/detail-note/${val.id}`)
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
  }

  return {
    showModal,
    handleChangeTitle,
    handleClickDetail,
    handleDelete,
    handleSubmit,
    handleShowModal,
    handleHideModal,
    hadleDescNote,
    titleNote,
    descNote,
    saveData
  }

}