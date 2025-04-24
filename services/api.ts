import axios, { AxiosInstance, AxiosBasicCredentials } from 'axios';
import getLogger from './logger';
import { IProductReviewParams } from '@/types/global';

const logger = getLogger('instaprotek_website_product_page');

// Function to create an Axios instance with Basic Authentication
const createApiClient = (): AxiosInstance => {
  const apiUsername = process.env.API_USERNAME || '';
  const apiPassword = process.env.API_PASSWORD || '';

  const basicAuthCredentials: AxiosBasicCredentials = {
    username: apiUsername,
    password: apiPassword,
  };

  const apiClient = axios.create({
    baseURL: process.env.INSTAPROTEK_API,
    timeout: 10000,
    auth: basicAuthCredentials,
  });

  // Intercept requests to log them
  apiClient.interceptors.request.use((request) => {
    return request;
  });

  // Intercept responses to log them
  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      logger.error(`Error: ${error.message}`);
      return Promise.reject(error);
    }
  );

  return apiClient;
};

const apiClient = createApiClient();

export const fetchProductReviewData = async (barcode: string, reviewParams?: IProductReviewParams) => {
  try {
    const response = await apiClient.get(`/product/${barcode}/review`, { params: reviewParams });
    return response.data;
  } catch (error: any) {
    logger.error(`Failed to fetch product reviews: ${error.response.data.message}`);
    throw error.response.data;
  }
};

export const fetchProductRepurchaseData = async (barcode: string) => {
  try {
    const response = await apiClient.get(`/product/${barcode}/repurchase-program`);
    return {
      name: response.data.name,
      order_description: response.data.order_description,
      orderPrice: response.data.order_price,
      orderFilePathImages: response.data.order_file_path_images?.map((image: any) => ({
        imageUrl: `/api/image-proxy?path=${encodeURIComponent(image.file_path)}`,
      })) || [],
      order_maximum_quantity: response.data.order_maximum_quantity,
      is_repurchase_program: response.data.is_repurchase_program,
    };
  } catch (error: any) {
    logger.error(`Failed to fetch repurchase program: ${error.response.data.message}`);
    if (error.response.data.message === "Sorry, Repurchase Program is not available for this product.") {
      return { is_repurchase_program: false };
    } else {
      throw error.response.data;
    }
  }
};
