import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PremiumScreen = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanPress = (plan) => {
    setSelectedPlan(plan);
    console.log(`${plan} selected!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Premium!</Text>

      <Text style={styles.description}>
        You can be premium by choosing a package and you can create the QR code you want and customize it as you wish.
      </Text>

      <Text style={styles.subTitle}>Benefits:</Text>
      <View style={styles.benefitContainer}>
        <Text style={styles.benefitText}>✔ Unlimited CSV exports & folders</Text>
        <Text style={styles.benefitText}>✔ Code color customization & app lock</Text>
        <Text style={styles.benefitText}>✔ Scan & create QR & Bar Code</Text>
        <Text style={styles.benefitText}>✔ No ads</Text>
      </View>

      <Text style={styles.subTitle}>Choose a plan:</Text>

      <TouchableOpacity
        style={[
          styles.buttonContainer,
          selectedPlan === 'Best Value' && styles.selectedButton
        ]}
        onPress={() => handlePlanPress('Best Value')}
      >
        <View style={styles.planContent}>
          <Text style={styles.planName}>Best Value</Text>
          <Text style={styles.planPrice}>$59.99</Text>
        </View>
        <Text style={styles.planSubText}>Lifetime</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonContainer,
          selectedPlan === 'Most Popular' && styles.selectedButton
        ]}
        onPress={() => handlePlanPress('Most Popular')}
      >
        <View style={styles.planContent}>
          <Text style={styles.planName}>Most Popular</Text>
          <Text style={styles.planPrice}>$39.99/week</Text>
        </View>
        <Text style={styles.planSubText}>3 Days Free</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonContainer,
          selectedPlan === 'Save 80%' && styles.selectedButton
        ]}
        onPress={() => handlePlanPress('Save 80%')}
      >
        <View style={styles.planContent}>
          <Text style={styles.planName}>Save 80%</Text>
          <Text style={styles.planPrice}>$39.99/year</Text>
        </View>
        <Text style={styles.planSubText}>($0.77/week)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', // Center horizontally
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
    textAlign: 'center', // Center title text
  },
  description: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center', // Center description text
    color: '#000',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    alignSelf: 'flex-start',
  },
  benefitContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    alignSelf: 'stretch', // Stretch to fill width
  },
  benefitText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  buttonContainer: {
    width: '100%',
    height: 90,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  planContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 20,
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  planSubText: {
    fontSize: 14,
    color: '#000',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
  selectedButton: {
    backgroundColor: '#e0e0e0', // Slightly darker for better feedback
    borderColor: '#bbb',
  },
  continueButton: {
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PremiumScreen;