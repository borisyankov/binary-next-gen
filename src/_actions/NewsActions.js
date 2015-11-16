import * as types from '../_constants/ActionTypes';

export const updateCurrentDailyReport = dr => ({
    type: types.UPDATE_CURRENT_DAILY_REPORT,
    current: {
        title: dr.title,
        dateTime: dr.dateTime,
        content: dr.content,
    },
});

export const updateNewsList = articles => ({
    type: types.UPDATE_NEWS_LIST,
    articles: articles,
});
