import {orderBy} from 'lodash';
import {Alert} from 'react-native';
import {_api_key, language, category, articles_url} from '../config/rest_config';

export async function getArticles(){

    try {
        const articles = await fetch(`https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=4dc3f2a9df944bd0ab813feabd9ee76b`, {mode: 'no-cors'});

        const result = await articles.json();
        articles= null;

        return _.orderBy(result.articles,'publishedAt','desc');

    } catch (error) {
        Alert.alert("Error", "Data not fetched")
    }
}