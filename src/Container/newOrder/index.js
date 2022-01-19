import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Title from '../../Components/Title'
import Conteiner from '../../Components/Conteiner'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Img from '../../Components/Img'

import burger1 from '../../Assets/burger1.svg'

const App = () => {

const navigate = useNavigate()

  const inputOrder = useRef()
  const inputName = useRef()

  const createOrder = async () => {
     await axios.post('http://localhost:3001/order', { order: inputOrder.current.value, clienteName: inputName.current.value })
    navigate("/Orders")
  }

  return (
    <Conteiner>
      <Img src={burger1} alt='imagem da hamburgueria' />
      <Title inNewOrder={true}>Faça seu pedido!</Title>
      <Label>Pedido</Label>
      <Input ref={inputOrder} name="pedido" type="text" placeholder="ex: 1 Coca-Cola, 1-X Salada" />
      <Label>Nome do Cliente</Label>
      <Input ref={inputName} name="nomeCliente" type="text" placeholder="nome do cliente" />
      <Button onClick={createOrder}>Novo Pedido</Button>
    </Conteiner>
  )
}
export default App
