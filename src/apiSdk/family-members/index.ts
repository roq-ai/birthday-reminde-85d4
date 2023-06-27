import axios from 'axios';
import queryString from 'query-string';
import { FamilyMemberInterface, FamilyMemberGetQueryInterface } from 'interfaces/family-member';
import { GetQueryInterface } from '../../interfaces';

export const getFamilyMembers = async (query?: FamilyMemberGetQueryInterface) => {
  const response = await axios.get(`/api/family-members${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFamilyMember = async (familyMember: FamilyMemberInterface) => {
  const response = await axios.post('/api/family-members', familyMember);
  return response.data;
};

export const updateFamilyMemberById = async (id: string, familyMember: FamilyMemberInterface) => {
  const response = await axios.put(`/api/family-members/${id}`, familyMember);
  return response.data;
};

export const getFamilyMemberById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/family-members/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFamilyMemberById = async (id: string) => {
  const response = await axios.delete(`/api/family-members/${id}`);
  return response.data;
};
