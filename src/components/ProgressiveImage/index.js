import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import FastImage from 'react-native-fast-image';

const ProgressiveImage = ({url}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ShimmerPlaceHolder
      autoRun={true}
      visible={loaded}
      style={styles.container}>
      <FastImage
        source={{
          uri: url,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        style={styles.container}
        resizeMode={FastImage.resizeMode.cover}
        onLoadEnd={() => setLoaded(true)}
      />
    </ShimmerPlaceHolder>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default ProgressiveImage;
