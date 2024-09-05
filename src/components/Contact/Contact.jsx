import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa6";
import Modal from "react-modal";
import css from "./Contact.module.css";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const loading = useSelector(selectIsLoading);
  Modal.setAppElement("#root");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <div className={css.contactTextContainer}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button
        disabled={loading}
        onClick={() => {
          openModal(id);
        }}
        type="button"
      >
        Delete
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm delete"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "300px",
            height: "200px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <h2>Are you sure you want to delete this contact?</h2>
        <div>
          <button
            onClick={() => {
              handleDelete(id);
              closeModal();
            }}
          >
            Yes
          </button>
          <button onClick={closeModal}>No</button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
