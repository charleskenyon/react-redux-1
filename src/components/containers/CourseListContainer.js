import React from 'react';
import { connect } from 'react-redux';
import CourseList from '../views/CourseList';
import { fetchMenu } from '../../actions/MenuActions';
import { validateOrder } from '../../actions/OrderActions';

class CourseListContainer extends React.Component {

    componentDidMount() {
        if (!this.props.fetchSuccess) {
            this.props.fetchMenu('/menu-data.json');
        }
    }

    render() {
        return <CourseList {...this.props} />
    }

}

const mapStateToProps = function(store) {
    return {
        courses: store.menuState.courses,
        fetchSuccess: store.menuState.fetchSuccess
    }
}

export default connect(mapStateToProps, {validateOrder, fetchMenu})(CourseListContainer);