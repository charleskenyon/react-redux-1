import { connect } from 'react-redux';
import OrderList from '../views/OrderList';
import { cancelOrder } from '../../actions/OrderActions';

const mapStateToProps = function(store) {
    return {
        orders: store.ordersState.orders,
        total: store.ordersState.total
    }
}

export default connect(mapStateToProps, {cancelOrder})(OrderList);