import axios from 'axios';
import { CreateUserDto } from '../types/user';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getAllUser = async (page?: number, limit?: number) => {
  const response = await axios.get(`${API_URL}/usuarios`, {
    params: { page, limit },
  });
  return response.data;
};

export const createUser = async (data: CreateUserDto) => {
  const response = await axios.post(`${API_URL}/usuarios`, {...data, contrasena: data.password});
  return response.data;
};


export const updateUser = async (id: number, data: Partial<CreateUserDto>) => {
  const response = await axios.put(`${API_URL}/usuarios/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axios.delete(`${API_URL}/usuarios/${id}`);
  return response.data;
};

