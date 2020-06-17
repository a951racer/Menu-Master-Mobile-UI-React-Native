import * as React from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  switch(props.library) {
    case "Ionicons":
      return (
        <Ionicons
          name={props.name}
          size={30}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      )
      break;
      case "MaterialIcons":
        return (
          <MaterialIcons
            name={props.name}
            size={30}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
        break;
      case "Ionicons":
        return (
          <Ionicons
            name={props.name}
            size={30}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
        break;
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={props.name}
            size={30}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
        break;
        default:
        return (
          <MaterialIcons
            name={props.name}
            size={30}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
        break;
      }
}
