import React, {useMemo} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchInput({onClear, onPressToSearch, ...props}) {
  const existValue = useMemo(() => {
    return props.value && String(props.value).length > 0;
  }, [props.value]);

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput style={styles.input} {...props} />
        {existValue ? (
          <TouchableOpacity style={styles.buttonCancel} onPress={onClear}>
            <Icon name="window-close" color="#221F1F" size={24} />
          </TouchableOpacity>
        ) : null}
      </View>

      <TouchableOpacity style={styles.buttonSearch} onPress={onPressToSearch}>
        <Icon name="feature-search-outline" color="#FFF" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  inputArea: {
    flex: 1,
    borderRadius: 7,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: '#221F1F',
  },
  buttonSearch: {
    backgroundColor: '#E21221',
    height: 55,
    width: 55,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonCancel: {
    marginRight: 10,
  },
});

export default SearchInput;
