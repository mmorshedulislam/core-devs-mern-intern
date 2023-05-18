import { toast } from "react-toastify";
const hitToast = (variant, message) => {
  if (!["success", "error"].includes(variant))
    throw new Error("Something went wrong. Please try again hit");
  toast[`${variant}`](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export default hitToast;
