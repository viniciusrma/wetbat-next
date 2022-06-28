/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from '../../styles/Modal.module.css'

function Modal({
  show,
  onClose,
  from,
  departureDate,
  destination,
  returnDate,
  people,
  transport,
  name,
  email
}) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button href="#" onClick={handleClose} className={styles.button}>
            ✖
          </button>
        </div>

        <div className={styles.body}>
          <h5>From:</h5>
          <p>{from}</p>
          <br />
          <h5>Departure date:</h5>
          <p>{departureDate}</p>
          <br />
          <h5>Destination:</h5>
          <p>{destination}</p>
          <br />
          <h5>Return date:</h5>
          <p>{returnDate}</p>
          <br />
          <h5>Nº of travellers:</h5>
          <p>{people}</p>
          <br />
          <h5>Transport:</h5>
          <p>{transport}</p>
          <br />
          <h5>Applicant't name:</h5>
          <p>{name}</p>
          <br />
          <h5>Applicant't e-mail:</h5>
          <p>{email}</p>
          <br />
        </div>
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

export default Modal
