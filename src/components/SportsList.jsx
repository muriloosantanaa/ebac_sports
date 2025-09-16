import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSports } from "../redux/sportsSlice";

const SportsList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.sports);

  useEffect(() => {
    dispatch(fetchSports());
  }, [dispatch]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <ul>
      {list.map((sport) => (
        <li key={sport.id}>{sport.name}</li>
      ))}
    </ul>
  );
};

export default SportsList;
