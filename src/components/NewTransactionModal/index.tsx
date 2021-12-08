import Modal from "react-modal"
import ImgIncome from "../../assets/income.svg"
import ImgClose from "../../assets/close.svg"
import ImgOutcome from "../../assets/outcome.svg"

import {Container, TransactionTypeContainer, RadioBox} from "./styles"
import {useState} from "react"

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit")

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
      <Container>
        <h2>Cadastrar Transação </h2>
        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
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

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
