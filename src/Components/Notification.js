import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = (message, type = 'success', duration = 3000) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position: 'top-right',
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case 'error':
      toast.error(message, {
        position: 'top-right',
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    default:
      break;
  }
};

export default Notification;
