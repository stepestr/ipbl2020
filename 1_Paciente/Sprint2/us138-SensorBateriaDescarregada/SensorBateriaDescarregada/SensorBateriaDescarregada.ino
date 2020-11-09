#include <Wire.h>
#include <Adafruit_INA219.h>

// Define a tensão necessária para operação do arduino em 5.5V
#define HARDWARE_OPERATE_VOLTAGE 5.5

// Define o limite (%) para acionamento do sinal de bateria fraca
#define EMERGENCY_THRESHOLD 5 


Adafruit_INA219 ina219;
bool  lowbattery = false;
void setup() {
  Serial.begin(115200);

  while(!Serial) {
    delay(1); // Aguardar a serial...
  }
  
  Serial.println("Serial pronta...");

  ina219.begin();

  //ina219.setCalibration_16V_400mA();

}

void loop() {
  
  float shuntvoltage = 0;
  float busvoltage = 0;
  float loadvoltage = 0;

  shuntvoltage = ina219.getShuntVoltage_mV();
  busvoltage = ina219.getBusVoltage_V();
  loadvoltage = busvoltage + (shuntvoltage / 1000);
  
  

  if (loadvoltage<HARDWARE_OPERATE_VOLTAGE*(1+EMERGENCY_THRESHOLD/100)) {
    lowbattery = true;
  } else {
    lowbattery = false;
  }
  Serial.print("EMERGENCY   ");  Serial.print(lowbattery);  Serial.println("");
  Serial.println("---------------------------------");
  delay(1000);
}
