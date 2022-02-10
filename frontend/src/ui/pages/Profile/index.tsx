import React, { useEffect, useState } from 'react';
import { format } from '../../../utils/format';
import { SubmitButton } from '../../components/buttons';
import { Input } from '../../components/Input';

import { Container, EditProfile, Statistic } from './styles';

export function Profile() {
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    if (newPassword.length > 0) {
      setIsEditingPassword(true);
    } else {
      setIsEditingPassword(false);
    }
  }, [newPassword]);

  return (
    <Container>
      <div>
        <Statistic>
          <h5>Total de Entradas</h5>
          <strong className='deposits'>{format.amount(1500)}</strong>
        </Statistic>
        <Statistic>
          <h5>Total de Saida</h5>
          <strong className='withdraws'>{format.amount(720)}</strong>
        </Statistic>
        <Statistic>
          <h5>Total de Produtos Cadastrados</h5>
          <strong>600</strong>
        </Statistic>
      </div>

      <EditProfile>
        <form>
          <h2>Perfil</h2>
          <Input value="Matheus Ferreira" placeholder='Nome' onChange={() => { }} />
          <Input value="matheusferreira.dev@gmail.com" placeholder='Email' type="email" onChange={() => { }} />
          <Input onChange={(e) => setNewPassword(e.target.value)} placeholder="Nova senha" type="password" value={newPassword} />

          {
            isEditingPassword && (
              <Input
                value=""
                type="password"
                placeholder="Confirme a nova senha"
                onChange={() => console.log('value')}
              />
            )
          }
          <SubmitButton title='Atualizar' />
        </form>
      </EditProfile>
    </Container>
  );
}
