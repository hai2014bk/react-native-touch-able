## React Native Touch Able
This is a react-native component, use as TouchOpacity, prevent continually action => prevent bugs







<!-- ![Example](https://media.giphy.com/media/459QrcvUL52qA/giphy.gif) -->
<img src="https://media.giphy.com/media/459QrcvUL52qA/giphy.gif" width="250" /> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://media.giphy.com/media/XcO948vbjhL9e/giphy.gif" width="250" />
<br>



```
npm i react-native-touch-able

```


## Usage
```javascript
import TouchAble from 'react-native-touch-able';

<View style={styles.container}>
<TouchAble style={{flex:1}} onTouch={()=> console.log('Hello world')}
    <Text>Hello</Text>
</TouchAble>
</View>
```

## Props

Set prevent Time(miliseconds)
```javascript
preventTime={500}
```

OnPress Callback:

```javascript
onTouch={()=>{function}}
```
