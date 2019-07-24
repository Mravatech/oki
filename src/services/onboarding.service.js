import {ApiService} from "./api.service";
const onboard = {
    phoneNumber: async (phone_number) => {
        let url = "/verify-number";
        return await ApiService.post(url, phone_number).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    verifyCode: async (phone_number, otp) => {
        let data = {
            phone_number: phone_number,
            otp: otp

        };
        let url = "/verify-code";
        return await ApiService.post(url, data).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchCountry: async () => {
        let url = "get_countries" + ApiService.getLiveScoreKey();
        return await ApiService.customRequest({
            method: "GET",
            url: ApiService.getLivescoreUrl() + url
        }).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchStandings: async ({id}) => {

        let url = "get_standings&league_id=" + id + ApiService.getLiveScoreKey();

        return await ApiService.customRequest({
            method: "GET",
            url: ApiService.getLivescoreUrl() + url
        }).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchFixture: async ({id, from, to}) => {
        let val = "get_events&from=" + from + "&to=" + to ;

        let url =  val + ApiService.getLiveScoreKey();

        return await ApiService.customRequest({
            method: "GET",
            url: ApiService.getLivescoreUrl() + url
        }).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

};

export {onboard};





