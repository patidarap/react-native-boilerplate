import axiosInstance from './axiosInstance';

export {axiosInstance};

export const PER_PAGE_LIMIT = 10;

export const apiStatusCodes = {
  success: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  serverError: 500,
};
