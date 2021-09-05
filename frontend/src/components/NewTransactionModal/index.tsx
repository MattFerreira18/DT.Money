import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Input } from '../Input';
import { SubmitButton } from '../buttons/SubmitButton';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

type SubmitEventProps = {
  title: string;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW';
  category: string;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [data, setData] = useState<SubmitEventProps>({} as SubmitEventProps);

  async function handleCreateNewTransaction(e: FormEvent<HTMLFormElement>) { 
    e.preventDefault();

    await createTransaction(data)
    
    setData({
      title: '',
      category: '',
      amount: 0,
      type: 'DEPOSIT',
    })
    onRequestClose();
  }

  return (
    <Modal
    isOpen={ isOpen }
    onRequestClose={ onRequestClose }
    overlayClassName="modal-overlay"
    className="modal-content"
  >
    <button type="button">
      <img 
        src={ closeImg } 
        alt="fechar modal" 
        onClick={ onRequestClose } 
        className='modal-close'
      />
    </button>
    <Container onSubmit={ handleCreateNewTransaction }>
    <h2>Cadastrar transação</h2>

      <Input
        type="text" 
        placeholder="Titulo"
        value={ data.title }
        onChange={ (e) => setData((prev) => ({ ...prev, title: e.target.value })) }
      />

      <Input 
        type="number" 
        placeholder="Valor"
        onChange={ (e) => setData((prev) => ({ ...prev, amount: Number(e.target.value) })) }
        value={ data.amount }  
      />

      <TransactionTypeContainer>
        <RadioBox 
          type="button"
          isActive={ data.type === 'DEPOSIT' }
          activeColor="green"
          onClick={ (e) => setData((prev) => ({...prev, type: 'DEPOSIT'})) }
        >
          <img src={ incomeImg } alt="entrada" />
          <span>Entrada</span>
        </RadioBox>
        <RadioBox 
          type="button"
          activeColor="red"
          isActive={ data.type === 'WITHDRAW' }
          onClick={ (e) => setData((prev) => ({...prev, type: 'WITHDRAW'})) }
        >
          <img src={ outcomeImg } alt="saida" />
          <span>Saida</span>
        </RadioBox>
      </TransactionTypeContainer>

      <Input 
        type="text" 
        placeholder="Categoria"
        onChange={ (e) => setData((prev) => ({ ...prev, category: e.target.value })) }
        value={ data.category }  
      />

      <SubmitButton 
        title="Confirmar"  
      />
    </Container>

  </Modal>
  );
}
