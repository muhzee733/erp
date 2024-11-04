import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_AI;

const erpApi = {
  getDashboardStat: async (day, userId) => {
    return axios({
      url: `${baseUrl}/DashBoard/Stats?agencyID=${userId}&days=${day}`,
      method: 'get',
    });
  }
};
export default erpApi;