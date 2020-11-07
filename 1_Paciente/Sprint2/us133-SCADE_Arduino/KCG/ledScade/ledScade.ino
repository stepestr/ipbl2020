
extern "C"
{
#include "setFlag.h"
}

inC_setFlag in_struct;
outC_setFlag out_struct;
uint16_t potenciometro_in = 0;
void setup() {

  Serial.begin(9600);
  pinMode(10, OUTPUT);
  memset(&in_struct, 0, sizeof(inC_setFlag));
  memset(&out_struct, 0, sizeof(outC_setFlag));
  setFlag_reset(&out_struct);
  digitalWrite(10,HIGH);
    
}

void loop() {

  in_struct.potenciometro = analogRead(2);
  setFlag(&in_struct, &out_struct); 
  Serial.println(in_struct.potenciometro);
  Serial.println(out_struct.delay_out);
  Serial.println(out_struct.piscar_led);
  if (out_struct.piscar_led) {
    digitalWrite(10,LOW);
    delay(out_struct.delay_out);
    digitalWrite(10,HIGH);    
  } else {
    digitalWrite(10,HIGH);
  }
  delay(50);
}
