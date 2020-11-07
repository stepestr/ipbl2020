/* $******* SCADE Suite KCG 32-bit 6.6.1 beta (build i1) ********
** Command: kcg661.exe -config C:/Users/FJCM GAMER/Google Drive/ITA RESTRICT/TRABALHOS/SCADE/ToArduino/KCG/ledScade/config.txt
** Generation date: 2020-11-02T23:24:34
*************************************************************$ */

#include "kcg_consts.h"
#include "kcg_sensors.h"
#include "setFlag.h"

/* setFlag/ */
void setFlag(inC_setFlag *inC, outC_setFlag *outC)
{
  outC->delay_out = inC->potenciometro * kcg_lit_uint16(2);
  outC->piscar_led = outC->delay_out > kcg_lit_uint16(20);
}

#ifndef KCG_USER_DEFINED_INIT
void setFlag_init(outC_setFlag *outC)
{
  outC->piscar_led = kcg_true;
  outC->delay_out = kcg_lit_uint16(0);
}
#endif /* KCG_USER_DEFINED_INIT */


#ifndef KCG_NO_EXTERN_CALL_TO_RESET
void setFlag_reset(outC_setFlag *outC)
{
}
#endif /* KCG_NO_EXTERN_CALL_TO_RESET */



/* $******* SCADE Suite KCG 32-bit 6.6.1 beta (build i1) ********
** setFlag.c
** Generation date: 2020-11-02T23:24:34
*************************************************************$ */

