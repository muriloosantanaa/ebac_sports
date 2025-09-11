// src/components/Cart.tsx
import React from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { removeFromCart, clearCart } from '../store/slices/cartSlice'

function Cart() {
  const cart = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()

  const total = cart.reduce((s, item) => s + item.price * item.quantity, 0)

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length === 0 && <p>Seu carrinho está vazio.</p>}
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: 8 }}>
          {item.name} - {item.quantity} x R$ {Number(item.price).toFixed(2)}
          <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: 8 }}>
            Remover
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>Limpar Carrinho</button>
        </>
      )}
    </div>
  )
}

export default Cart
