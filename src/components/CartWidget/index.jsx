import { Cart } from 'react-bootstrap-icons';
import './cartwidget.component.scss';

const CartWidget = () => {
    return (
      <>
        <li> 
            <a href="#" className="nav-item nav-link"><Cart size={16} className="margin-bottom" /><span> 0 </span></a>
        </li>
      </>
    );
  }
  
  export default CartWidget;