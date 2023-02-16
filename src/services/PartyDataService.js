import http from "../http-common";

class PartyDataService {
  getAll() {
    return http.get("/party");
  }

  get(id) {
    return http.get(`/party/${id}`);
  }

  create(data) {
    return http.post("/party", data);
  }

  update(id, data) {
    return http.put(`/party/${id}`, data);
  }

  delete(id) {
    return http.delete(`/party/${id}`);
  }

}

export default new PartyDataService();