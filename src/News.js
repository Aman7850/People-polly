import React, { useEffect, useState } from 'react';
import { FlatList, Text, View , ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';
import { Card} from 'react-native-paper';
import {Divider} from 'react-native-elements';
 
const News = () => {
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);


  useEffect(() => {
    setTimeout(async() => {
    fetch('http://pp-api.wooshelf.com/news/post_api/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }, 8000);
  }, []);

  if(isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView source={require('./62961-loading.json')} autoPlay loop duration={5000}/>
      </View>
    )
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 25, color: 'black', fontWeight: '600', letterSpacing: 2, textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text style={{ fontSize: 19, fontWeight: '800'}}>{item.id + '. '}</Text>
                  <Text style={{fontSize: 18, width: '100%', marginBottom: 10, color: '#62017d', textAlign: 'center', fontStyle: 'italic', fontWeight: '800'}}>{item.title}</Text>
                </View>
                <Divider width={2} color={'#0af2ea'}/>
                  <Text style={{marginTop: 10, fontSize: 16, fontWeight: '800', textAlign: 'center'}}>{item.content + '. ' }</Text>
                  <Card style={{backgroundColor: '#facdf8', padding: 10, marginTop: 10}}>
                    <Text style={{marginTop: 5, fontSize: 16, color: 'red', fontWeight: '800'}}>Hash Tag: {item.hash_tag}</Text>
                    <Text style={{marginTop: 5, fontSize: 16, color: 'red', fontWeight: '800'}}>Source: {item.source}</Text>
                    <Text style={{marginTop: 5, fontSize: 16, color: 'red', fontWeight: '800'}}>Author: {item.author}</Text>
                    <Text style={{marginTop: 5, fontSize: 16, color: 'red', fontWeight: '800'}}>Post Views: {item.post_views}</Text>
                    <Text style={{marginTop: 5, fontSize: 16, color: '#a803a1', fontWeight: '800'}}>Likes: {item.likes}</Text>
                    <Text style={{marginTop: 5, fontSize: 16, color: '#a803a1', fontWeight: '800'}}>Dislikes: {item.dislikes}</Text>
                    <Text style={{marginTop: 5, fontSize: 16, color: '#a35207', fontWeight: '800'}}>Status: {item.status}</Text>
                  </Card>
              </View>
            )}
          />
        </View>
      )}
    </View>
    )
}

export default News;
