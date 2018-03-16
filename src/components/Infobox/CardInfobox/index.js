import React from 'react';
import PropTypes from 'prop-types';

import '../style.css';
import './style.css';

import CardLogos from '../CardLogos/index';
import CardDetails from '../CardDetails/index';
import AccountName from '../AccountName/index';
import AccountSummary from '../AccountSummary/index';

import MultiModuleButtons from 'components/Buttons/MultiModuleButtons/index';
import SingleMultiButton from 'components/Buttons/SingleMultiButton/index';

const CardInfobox = ({
   number, expires_month, expires_year, balance, income_7_days, expenses_7_days, currentUrl
}) => {

   return (
      <section className="infobox card-infobox module">
         <header>
            <CardLogos type="visa" />
            <CardDetails
               number={number}
               expires_month={expires_month}
               expires_year={expires_year} />
         </header>

         <AccountName />
         <AccountSummary
            balance={balance} 
            income_7_days={income_7_days}
            expenses_7_days={expenses_7_days} />

         <MultiModuleButtons>
            <SingleMultiButton text="Change PIN" href={`${currentUrl}/change-pin`} />
            <SingleMultiButton text="Change limits" href={`${currentUrl}/change-limits`} />
         </MultiModuleButtons>
      </section>
   );
}

CardInfobox.propTypes = {
   number: PropTypes.number,
   expires_month: PropTypes.number,
   expires_year: PropTypes.number,
   balance: PropTypes.number,
   income_7_days: PropTypes.number,
   expenses_7_days: PropTypes.number,
   currentUrl: PropTypes.string
}
 
export default CardInfobox;