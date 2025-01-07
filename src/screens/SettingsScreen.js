import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({ navigation }) {
  const [vibrateEnabled, setVibrateEnabled] = useState(false);
  const [openWebPagesEnabled, setOpenWebPagesEnabled] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upgrade</Text>
      </View>

      <View style={styles.upgradeContainer}>
        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Go Premium</Text>
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress={() => navigation.navigate('Premium')}
          >
            <Text style={styles.subscribeText}>Subscribe</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Restore Purchase</Text>
          <TouchableOpacity
            style={styles.restoreButton}
            onPress={() => {
              console.log('Restore purchase clicked');
            }}
          >
            <Text style={styles.freeText}>Free</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Custom Settings</Text>
      </View>

      <View style={styles.upgradeContainer}>
        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Foreground Color</Text>
          <Text style={styles.star}>★</Text>
          <View style={[styles.circle, { backgroundColor: 'black' }]} />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Background Color</Text>
          <Text style={styles.star}>★</Text>
          <View style={[styles.circle, { backgroundColor: 'white' }]} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scan Settings</Text>
      </View>

      <View style={styles.upgradeContainer}>
        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Vibrate</Text>
          <Switch
            value={vibrateEnabled}
            onValueChange={(newValue) => setVibrateEnabled(newValue)}
            style={styles.switch}
            trackColor={{ false: '#767577', true: '#000' }}
            thumbColor={vibrateEnabled ? '#000' : '#f4f3f4'}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Open Web Pages Automatically</Text>
          <Switch
            value={openWebPagesEnabled}
            onValueChange={(newValue) => setOpenWebPagesEnabled(newValue)}
            style={styles.switch}
            trackColor={{ false: '#767577', true: '#000' }}
            thumbColor={openWebPagesEnabled ? '#000' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Result Settings</Text>
      </View>

      <View style={styles.upgradeContainer}>
        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Language</Text>
          <Ionicons name="arrow-forward" size={20} color="#555" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get Help</Text>
      </View>

      <View style={styles.upgradeContainer}>
        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Terms</Text>
          <Ionicons name="arrow-forward" size={20} color="#555" />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Privacy Policy</Text>
          <Ionicons name="arrow-forward" size={20} color="#555" />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.goPremiumText}>Feedback</Text>
          <Ionicons name="arrow-forward" size={20} color="#555" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Arial',
  },
  upgradeContainer: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  goPremiumText: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Arial',
  },
  subscribeButton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  subscribeText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  restoreButton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  freeText: {
    fontSize: 12,
    color: '#555',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 12,
  },
  customSettingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 8,
  },
  settingLabel: {
    fontSize: 14,
    color: '#555',
  },
  colorOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 50,
    marginLeft: -20,
  },
  star: {
    fontSize: 18,
    color: '#000',
    marginLeft: 0,
    marginRight: 200,
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  arrow: {
    fontSize: 18,
    color: '#555',
  },
});