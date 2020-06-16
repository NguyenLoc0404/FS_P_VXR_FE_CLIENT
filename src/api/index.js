
import axios from "axios";
//tạo 1 instance
export const baseURL = "http://localhost:1988";
const api = axios.create({
    baseURL: `${baseURL}/api`
})

export default api;

export const callApi = (endpoint) => {
  console.log("vao call APi");
    return {
      //get
      // baseURL + endpoint ( cái mình nhập vô)
     
      getItems() {
        return api
          .get(endpoint)
          .then((res) => Promise.resolve(res.data))
          .catch((err) => Promise.reject(err));
      },
      // GET ITEM
      getItem(data) {
        return api
          .get(endpoint ,data)
          .then((res) => Promise.resolve(res.data))
          .catch((err) => Promise.reject(err));
      },
      //post
      createItem(data) {
        return api
          .post(endpoint, data)
          .then((res) => Promise.resolve(res.data))
          .catch((err) => Promise.reject(err));
      },
      createImage(data) {
        console.log("createImage");
        console.log(data.getAll("image"));
        return api
          .post(endpoint, data)
          .then((res) =>{
            console.log(res,444444444444444); 
            Promise.resolve(res.data)
          })
          .catch((err) => Promise.reject(err));
      },
      //put
      updateItem(data) {
        return api
          .put(endpoint, data)
          .then((res) => Promise.resolve(res.data))
          .catch((err) => Promise.reject(err));
      },
      //delete
      deleteItem() {
        return api
          .delete(endpoint)
          .then((res) => Promise.resolve(res.data))
          .catch((err) => Promise.reject(err));
      },

      //Update password only
      patchItem(data) {
        return api
          .patch(endpoint ,data)
          .then((res) => Promise.resolve(res.data))
          .catch((err) => Promise.reject(err));
      },

    };
  };

//thêm chức năng
// xem lịch sử đặt vé
// xem tổng tiền
// xem thanh toán
//Tích điểm
// quản lý hồ sơ cá nhân
//update avatar và password