import { connect } from 'react-redux';
import Alert from '../views/Alert';

const mapStateToProps = (store) => ({ alert: store.ordersState.alert });

export default connect(mapStateToProps)(Alert);