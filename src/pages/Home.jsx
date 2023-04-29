import React from "react";
// import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import { useSelector, useDispatch, connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getCategory } from "../redux/actions/category";
// import configureStore from "store";
// import thunk from 'redux-thunk';

// import * as reducers  from "../redux/reducers/category";

class  Home extends React.Component {
    // componentDidMount() {
    // }
    componentDidMount() {
        this.props.getCategory();
    }
    render() {
   //   const categories = useSelector(state => state.category.category);
  //   const dispatch = useDispatch();
    return (
    <div>home page
        <div>
        {this.props.categories.map((employee, index) => {
        return (
          <div key={index}>
            <h2>title: {employee.title}</h2>

            <hr />
          </div>
        );
      })} 
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
)(Home);