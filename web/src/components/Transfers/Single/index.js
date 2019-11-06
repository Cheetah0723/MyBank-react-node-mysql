import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'tools';

const SingleTransfer = ({ singleTrans: { type, date, payeeName, amount, status } }) => {
   date = formatDate(date, 'DD/MM/YYYY HH:mm');

   return (
      <section className="single-transfer module">
         <h1>{type}</h1>
         <ul>
            <li>Date: {date}</li>
            <li>Payee: {payeeName}</li>
            <li>Amount: {amount}</li>
            <li>Type: {type}</li>
            <li>Status: {status}</li>
         </ul>
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const transId = ownProps.match.params.transId;

   return {
      singleTrans: state.transfers.data.find(el => el._id === transId)
   };
};

export default connect(mapStateToProps)(SingleTransfer);