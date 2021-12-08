import {FormEvent, useState} from "react"

import Modal from "react-modal"
import ImgIncome from "../../assets/income.svg"
import ImgClose from "../../assets/close.svg"
import ImgOutcome from "../../assets/outcome.svg"

import {api} from "../../services/api"

import {Container, TransactionTypeContainer, RadioBox} from "./styles"

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState("")
  const [type, setType] = useState("deposit")

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    }

    api.post("/transactions", data)
  }

  return (
    <Modal
      isOpen={isOpen} //abrindo modal
      onRequestClose={onRequestClose} //fechando modal com esc
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={ImgClose} alt="Fechar modal"></img>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação </h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit")
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={ImgIncome} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw")
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={ImgOutcome} alt="saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
