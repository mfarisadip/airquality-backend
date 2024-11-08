import { Elysia } from "elysia";
import { isAuthenticated } from "../utils/isAuthenticated";
import axios from "axios";

export const AirQualityController = new Elysia()
  .use(isAuthenticated)

  // Get nearest city air quality
  .get("/", async ({ set }) => {
    try {
      const API_KEY = "50cc8826-3945-4eac-b984-7800a9d915a3";
      const response = await axios.get(
        `http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`
      );

      set.status = 200;
      return {
        success: true,
        message: "Data kualitas udara kota terdekat berhasil diambil",
        data: response.data
      };
    } catch (error) {
      set.status = 400;
      if (axios.isAxiosError(error)) {
        return {
          success: false,
          message: "Gagal mengambil data kualitas udara",
          error: error.response?.data || error.message,
          data: null
        };
      }
      return {
        success: false,
        message: "Gagal mengambil data kualitas udara",
        error: error instanceof Error ? error.message : "Unknown error",
        data: null
      };
    }
  });