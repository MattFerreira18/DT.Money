import React, { FormEvent, useEffect, useState } from 'react';

import { api } from '../../../app/services/api';
import { format } from '../../../utils/format';
import { SubmitButton } from '../../components/buttons';
import { Input } from '../../components/Input';

import { Container, EditProfile, Statistic } from './styles';

interface UserData {
  name: string;
  email: string;
  password?: string;
  passwordConfirmation?: string;
  // created_at: string;
}

interface StatisticsData {
  total_transactions: number;
  total_deposits: number;
  total_withdraws: number;
}

interface UserResponseData {
  user: UserData;
}

export function Profile() {
  const [userData, setUserData] = useState({} as UserData);
  const [statisticsData, setStatisticsData] = useState({} as StatisticsData);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  useEffect(() => {
    if (userData.password) {
      if (userData.password.length > 0) {
        setIsEditingPassword(true);
      } else {
        setIsEditingPassword(false);
      }
    }
  }, [userData.password]);

  useEffect(() => {
    api.get<UserResponseData>('/users/profile')
      .then(response => {
        if (response.status === 200) {
          const { user } = response.data;

          setUserData(user);
        }
      });

    api.get<StatisticsData>('/transactions/statistics')
      .then(response => {
        console.log("🚀 ~ file: index.tsx ~ line 52 ~ useEffect ~ response", response.data)
        if (response.status === 200) {
          setStatisticsData(response.data);
        }
      })
  }, []);

  async function handleUpdateUser(event: FormEvent) {
    event.preventDefault();

    if (userData.password && userData.password !== userData.passwordConfirmation) {
      return;
    }

    delete userData.passwordConfirmation;

    const response = await api.patch('/users', userData);

    if (response.status === 204) {
      window.location.reload();
    }
  }

  return (
    <Container>
      <div>
        <Statistic>
          <h5>Total de Entradas</h5>
          <strong className='deposits'>{format.amount(statisticsData.total_deposits)}</strong>
        </Statistic>
        <Statistic>
          <h5>Total de Saida</h5>
          <strong className='withdraws'>{format.amount(statisticsData.total_withdraws)}</strong>
        </Statistic>
        <Statistic>
          <h5>Total de Produtos Cadastrados</h5>
          <strong>{statisticsData.total_transactions}</strong>
        </Statistic>
      </div>

      <EditProfile>
        <form onSubmit={(e) => handleUpdateUser(e)}>
          <h2>Perfil</h2>
          <Input
            value={userData.name}
            placeholder='Nome'
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <Input
            value={userData.email}
            placeholder='Email'
            type="email"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <Input
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            placeholder="Nova senha"
            type="password"
            value={userData.password}
          />

          {
            isEditingPassword && (
              <Input
                value={userData.passwordConfirmation}
                type="password"
                placeholder="Confirme a nova senha"
                onChange={(e) => setUserData({ ...userData, passwordConfirmation: e.target.value })}
              />
            )
          }
          <SubmitButton title='Atualizar' />
        </form>
      </EditProfile>
    </Container>
  );
}
