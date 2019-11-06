import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Form from './Form';

class NewTransaction extends Component {
   render() {
      const accounts = this.props.accounts;
      const firstAccId = accounts[0]._id;
      const userAccountsList = accounts.map(acc => (
         <option key={acc._id} value={acc._id}>
            {`${acc.type}, ${acc.sortcode}, ${acc.balance} ${acc.currency}`}
         </option>
      ));

      return (
         <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
               <section className="new-transfer module">
                  <h1>New transfer</h1>

                  <Form
                     userAccountsList={userAccountsList}
                     firstAccId={firstAccId}
                     addTransfer={this.props.addTransfer}
                  />
               </section>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      accounts: state.accounts.data
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addTransfer: data => dispatch(actions.addTransfer(data))
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NewTransaction);
