import { createSelector, createStructuredSelector } from 'reselect';
import {
    todayUTCString,
    epochToUTCDateString,
    yesterdayUTCString,
    getLastXMonthEpoch,
    last7DaysEpoch,
} from '../_utils/DateUtils';

export const transactionsSelector = state => state.transactions;

export const transactionsTodaySelector = createSelector(
    transactionsSelector,
    transactions => {
        const today = todayUTCString();
        return transactions.filter(tx => today === epochToUTCDateString(tx.transaction_time));
    }
);

export const transactionsYesterdaySelector = createSelector(
    transactionsSelector,
    transactions => {
       const yesterday = yesterdayUTCString();
       return transactions.filter(tx => yesterday === epochToUTCDateString(tx.transaction_time));
   }
);

export const transactionsLast7DaysSelector = createSelector(
    transactionsSelector,
    transactions => {
        const Last7DaysEpoch = last7DaysEpoch();
        return transactions.filter(tx => tx.transaction_time > Last7DaysEpoch);
    }
);

export const transactionsLast30DaysSelector = createSelector(
    transactionsSelector,
    transactions => {
        const Last30DaysEpoch = getLastXMonthEpoch(1);
        return transactions.filter(tx => tx.transaction_time > Last30DaysEpoch);
    }
);


export const transactionsTotalSelector = createSelector(
    transactionsSelector,
    transactions =>
        transactions
            .map(t => +t.amount)
            .reduce((x, y) => x + y, 0)
);

export default createStructuredSelector({
    transactions: transactionsSelector,
    transactionsToday: transactionsTodaySelector,
    transactionsYesterday: transactionsYesterdaySelector,
    transactionsLast7Days: transactionsLast7DaysSelector,
    transactionsLast30Days: transactionsLast30DaysSelector,
    transactionsTotal: transactionsTotalSelector,
});
