import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { useParams } from "react-router-dom";
import withRouter from '../withRoute';

import { getCategory } from "../redux/actions/category";



class  Login extends React.Component {


    render() {
      
      console.log(this.props.params.id);
    return (
    <div>Login page
        <div>
        </div>
       <div>
          <button onClick={() => this.props.getCategory()}>ssssss</button>
       </div>
    </div>);
    }
};
const mapStateToProps = state => ({
    categories: state.category.category
});
const mapDispatchToProps = () => ({ 
    getCategory, 
});

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(withRouter(Login));