import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import Title from '../../Components/Title'
import Conteiner from '../../Components/Conteiner'
import Button from '../../Components/Button'
import Img from '../../Components/Img'

import {
  ConteinerItem,
  DivLabel,
  OrderLabel,
  NomeLabel,
  TrashIcon
} from "./style";

import burger2 from '../../Assets/burger2.svg'
import trash from '../../Assets/trash.svg'

const App = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])

  const getOrders = async () => {
    const { data } = await axios.get("http://localhost:3001/order")
    setOrders(data)
  }
  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:3001/order/${id}`)
    getOrders()
  }
  useEffect(() => getOrders(), [])

  return (
    <Conteiner>
      <Img src={burger2} alt="imagem da sacola do hamburguer" />
      <Title>Pedidos</Title>
      {
        orders.map((order, index) => {
          return (
            <ConteinerItem key={(index + 1) * 5}>
              <DivLabel key={(index + 1) * 6}>
                <OrderLabel key={(index + 1) * 7}>{order.order}</OrderLabel>
                <NomeLabel key={(index + 1) * 8}>{order.clienteName}</NomeLabel>
              </DivLabel>
              <TrashIcon onClick={() => deleteOrder(order.id)} key={(index + 1) * 9} src={trash} alt="imagem de uma lixeira" />
            </ConteinerItem>)
        })
      }
      <Button onClick={() => navigate("/")}>Voltar</Button>
    </Conteiner>

  )
}
export default App
