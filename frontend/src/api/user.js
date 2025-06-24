import toast from "react-hot-toast";
import fetcher from "../utils/fetch.js";

async function signupApi(formData) {
    const response = await fetcher.post('/signup', formData);
    const result = response.data;

    if(result.error) {
        toast.error(result.error);
        return false;
    } else {
        toast.success(result.message);
        return true;
    }
}

async function loginApi(formData) {
    const response = await fetcher.post('/login', formData);
    const result = response.data;

    if(result.error) {
        toast.error(result.error);
        return false;
    } else {
        toast.success(result.message);
        return true;
    }
}

export { signupApi, loginApi };