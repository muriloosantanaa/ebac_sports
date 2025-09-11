// src/components/ProductsList.tsx
import React from 'react'
import { useGetProductsQuery } from '../store/services/productsApi'
import { useAppDispatch } from '../store/hooks'
import { addToCart } from '../store/slices/cartSlice'

function ProductsList() {
  const { data: products, isLoading, isError } = useGetProductsQuery()
  const dispatch = useAppDispatch()

  if (isLoading) return <p>Carregando produtos...</p>
  if (isError) return <p>Erro ao carregar produtos. Tente novamente mais tarde.</p>
  if (!products || products.length === 0) return <p>Nenhum produto encontrado.</p>

  return (
    <div>
      <h2>Produtos</h2>
      {products.map(prod => (
        <div key={prod.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8 }}>
          <h3>{prod.name}</h3>
          <p>R$ {Number(prod.price).toFixed(2)}</p>
          <button onClick={() => dispatch(addToCart({ ...prod, quantity: 1 }))}>
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
