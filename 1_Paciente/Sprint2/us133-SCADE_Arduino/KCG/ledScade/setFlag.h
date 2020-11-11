/* $******* SCADE Suite KCG 32-bit 6.6.1 beta (build i1) ********
** Command: kcg661.exe -config C:/Users/FJCM GAMER/Google Drive/ITA RESTRICT/TRABALHOS/SCADE/ToArduino/KCG/ledScade/config.txt
** Generation date: 2020-11-02T23:24:34
*************************************************************$ */
#ifndef _setFlag_H_
#define _setFlag_H_

#include "kcg_types.h"

/* ========================  input structure  ====================== */
typedef struct {
  kcg_uint16 /* _L7/, potenciometro/ */ potenciometro;
} inC_setFlag;

/* =====================  no output structure  ====================== */

/* ========================  context type  ========================= */
typedef struct {
  /* ---------------------------  outputs  --------------------------- */
  kcg_uint16 /* _L10/, delay_out/ */ delay_out;
  kcg_bool /* _L18/, piscar_led/ */ piscar_led;
  /* -----------------------  no local probes  ----------------------- */
  /* -----------------------  no local memory  ----------------------- */
  /* -------------------- no sub nodes' contexts  -------------------- */
  /* ----------------- no clocks of observable data ------------------ */
} outC_setFlag;

/* ===========  node initialization and cycle functions  =========== */
/* setFlag/ */
extern void setFlag(inC_setFlag *inC, outC_setFlag *outC);

#ifndef KCG_NO_EXTERN_CALL_TO_RESET
extern void setFlag_reset(outC_setFlag *outC);
#endif /* KCG_NO_EXTERN_CALL_TO_RESET */

#ifndef KCG_USER_DEFINED_INIT
extern void setFlag_init(outC_setFlag *outC);
#endif /* KCG_USER_DEFINED_INIT */



#endif /* _setFlag_H_ */
/* $******* SCADE Suite KCG 32-bit 6.6.1 beta (build i1) ********
** setFlag.h
** Generation date: 2020-11-02T23:24:34
*************************************************************$ */

